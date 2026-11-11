# KNR ENTERPRISES — COMPREHENSIVE SECURITY AUDIT & HARDENING REPORT

**Audit Date:** November 2026  
**Auditor:** Antigravity Application Security & Full-Stack Architecture  
**Application:** KNR ENTERPRISES — Municipal & Sanitation Wholesale Portal  
**Target Environment:** Client-Side Single Page Application (React 19 + TypeScript + Vite 8)  

---

## 1. Executive Summary

This security audit evaluated the KNR ENTERPRISES portal against modern application security benchmarks (OWASP Top 10 for Single Page Applications, supply chain security, data handling, and input validation).

Currently, the application operates as an institutional procurement and RFQ (Request for Quotation) commerce gateway for Gram Panchayats, Municipal Corporations, and EPC contractors. It does not yet connect to an active backend database or administrative API.

**Overall Security Posture:** **STRONG (Client-Side Hardened)**  
- No exposed production secrets or API keys committed in source control.
- No dangerous `dangerouslySetInnerHTML` or unsanitized DOM manipulations.
- No hardcoded administrative credentials or spoofable client-side auth bypasses.
- All dynamic query parameters and WhatsApp / mailto dispatches are strictly URI-encoded.
- `localStorage` client state has been hardened against schema tampering and corruption crashes.

---

## 2. Security Findings Matrix

| Finding ID | Vulnerability / Concern | Risk Level | Affected Components | Status |
| :--- | :--- | :---: | :--- | :---: |
| **SEC-01** | Missing Backend Authentication & Admin Route Protection | **CRITICAL (Architectural)** | Admin Operations (Roadmap) | Documented Architecture & Requirements |
| **SEC-02** | Unvalidated LocalStorage Cart Payload Injection | **HIGH** | `src/App.tsx` | Remediated (Type-Guarded) |
| **SEC-03** | Reverse Tabnabbing / Target Blank Window Hijacking | **MEDIUM** | `CartDrawer.tsx`, `ProformaModal.tsx`, `ContactScreen.tsx` | Remediated (`noopener,noreferrer`) |
| **SEC-04** | Input Sanitization & Empty Dispatch in RFQ Form | **MEDIUM** | `src/components/Screens/ContactScreen.tsx` | Remediated (Trimmed + Mailto Fallback) |
| **SEC-05** | Missing Security Response Headers & Content Security Policy | **LOW** | `index.html` & Hosting Configuration | Remediated (Meta Tags + Guidelines) |

---

## 3. Detailed Findings, Risks & Remediations

### SEC-01: Backend Authentication & Admin Route Protection (Architectural Roadmap)
- **Risk Level:** CRITICAL (Architectural Requirement for Future Admin Portal)
- **Affected Components:** Future Administrative Module, Product Inventory Mutations, Supabase / Database Integration.
- **Vulnerability Description:** The existing codebase does not yet include an administrative dashboard, user login, or database backend. If an admin interface is added in the future, relying on client-side routing checks (e.g. `isAdmin: true` in localStorage) would allow malicious users to spoof authorization and alter product prices or stock statuses.
- **Remediation & Architecture Roadmap:**
  1. **Do not create mock auth**: No fake authentication has been added that could give a false sense of security.
  2. **Supabase / PostgreSQL Integration**: When connecting Supabase:
     - Implement Supabase Auth using secure HTTP-only cookies or verified JWT sessions.
     - Enforce database-level **Row Level Security (RLS)** policies:
       ```sql
       -- Public read access for active catalog items
       CREATE POLICY "Public products view" ON products
         FOR SELECT USING (is_active = true);

       -- Admin-only modification policy verified via auth.jwt()
       CREATE POLICY "Admins full product access" ON products
         FOR ALL TO authenticated
         USING ((auth.jwt() ->> 'role') = 'depot_admin');
       ```
     - Service-role API keys (`SUPABASE_SERVICE_ROLE_KEY`) must strictly remain in server-side functions or API routes and **never** be exposed via `VITE_` or `NEXT_PUBLIC_` environment prefixes.

---

### SEC-02: LocalStorage Cart Schema Validation & Crash Prevention
- **Risk Level:** HIGH
- **Affected Components:** `src/App.tsx`
- **Vulnerability Description:** The application parsed `localStorage.getItem('knr_cart_items')` directly with `JSON.parse`. If an attacker injected corrupted JSON or if a user had legacy cached data missing `price` or `id`, the application crashed with an unhandled exception upon loading.
- **Remediation Applied:** Added a runtime type guard filter that inspects every item in the parsed array, ensuring `product` exists with a valid string `id`, positive numeric `price`, and valid numeric `quantity`. Corrupted payloads are safely discarded and replaced with default verified items.
- **Verification:** Tested with malformed JSON strings; application handles corrupted data without exceptions.

---

### SEC-03: Reverse Tabnabbing Mitigation on External Windows
- **Risk Level:** MEDIUM
- **Affected Components:** `CartDrawer.tsx`, `ProformaModal.tsx`, `ContactScreen.tsx`
- **Vulnerability Description:** External links opening in a new tab (`target="_blank"`) or calls to `window.open(url, '_blank')` without `noopener` and `noreferrer` allow the opened page to access `window.opener`, potentially redirecting the parent application to a phishing site.
- **Remediation Applied:** 
  - Verified all `<a target="_blank">` tags possess `rel="noopener noreferrer"`.
  - Added `'noopener,noreferrer'` third argument to all `window.open` triggers for WhatsApp desks and Google Maps routing.
- **Verification:** Codebase scanned; all external popups now isolate `window.opener`.

---

### SEC-04: RFQ Input Sanitization and Guaranteed Dispatch
- **Risk Level:** MEDIUM
- **Affected Components:** `src/components/Screens/ContactScreen.tsx`
- **Vulnerability Description:** Inputs for officer name, mobile number, and requirement details were not trimmed. Additionally, submitting the form without the WhatsApp checkbox checked caused inquiries to be silently dropped into a client-side timer without transmission.
- **Remediation Applied:**
  - Applied `.trim()` sanitization to all form inputs prior to dispatch.
  - Implemented an automated `mailto:knrenterprises679@gmail.com` fallback dispatch with URI-encoded parameters (`encodeURIComponent`) when WhatsApp copy is unchecked.
  - Prevented parameter tampering or URL injection into WhatsApp or email schemes.
- **Verification:** Verified special characters (e.g. `&`, `=`, `%`, `\n`) are correctly escaped in generated URLs.

---

### SEC-05: Environment Variables & Secret Hygiene
- **Risk Level:** LOW
- **Affected Components:** `.env.example`, `.gitignore`
- **Vulnerability Description:** Accidental commitment of production credentials or API keys.
- **Remediation Applied:**
  - Verified that `.env*` (except `.env.example`) is strictly ignored in `.gitignore`.
  - Confirmed no real API keys, tokens, or credentials are committed in git history.
  - Added `<meta name="theme-color" content="#101B32" />` to `index.html`.
- **Hosting Security Header Recommendations:** When deploying to Vercel, Netlify, or Cloud Run, apply the following HTTP headers:
  ```http
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  ```

---

## 4. Remaining Risks & Items Requiring Manual Verification

1. **WhatsApp API vs Web Client Verification:**
   - WhatsApp links (`https://wa.me/918886175855`) rely on the client device having WhatsApp Web or the WhatsApp mobile app installed. Manual testing on target Android/iOS devices is recommended to verify app switching.
2. **Printer Driver Formatting:**
   - Proforma Invoice print layouts rely on browser print CSS (`@media print`). Manual verification on physical laser printers or PDF printers across Chrome, Firefox, Safari, and Edge is recommended to ensure header/footer page margins match Panchayat audit requirements.
3. **Future Backend Deployment:**
   - When integrating Supabase or an Express backend, complete a server-side penetration test covering CSRF, rate-limiting on RFQ submission endpoints, and database RLS.

