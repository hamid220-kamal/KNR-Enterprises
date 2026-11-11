import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bleaching-powder-grade1',
    name: 'Commercial Bleaching Powder Grade 1 (33% Chlorine)',
    teluguName: 'కమర్షియల్ బ్లీచింగ్ పౌడర్ గ్రేడ్ 1 (33% క్లోరిన్)',
    category: 'Disinfectants & Chemicals',
    categoryTelugu: 'క్రిమిసంహారకాలు & రసాయనాలు',
    badge: 'Disinfectants/Bulk Stock',
    badgeColor: 'orange',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
    price: 850,
    originalPrice: 1150,
    discountPercent: 26,
    unit: 'bag',
    moq: 5,
    moqDescription: '5 Bags (125 kg)',
    hsnCode: '2828.10.10',
    rating: 4.8,
    reviewCount: 64,
    inStock: true,
    specifications: [
      '33% Min Available Chlorine content',
      'ISI marked / Municipal grade quality',
      'Heavy-duty HDPE laminated outer bag',
      'Tested against pathogen vector reservoirs'
    ],
    description: 'Industrial Grade 1 Bleaching Powder with guaranteed 33%+ chlorine potency. Specifically formulated for open drain sanitation, public wells, overhead reservoir tanks, and high-pathogen rural drainage.'
  },
  {
    id: 'hdpe-wheeled-garbage-bin-240l',
    name: 'Heavy-Duty HDPE Wheeled Garbage Bin (240L SBM)',
    teluguName: 'హెవీ-డ్యూటీ వీల్డ్ చెత్త డబ్బా (240 లీటర్లు SBM)',
    category: 'Waste Management',
    categoryTelugu: 'వ్యర్థాల నిర్వహణ',
    badge: 'Waste Mgmt | SBM Std',
    badgeColor: 'green',
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&auto=format&fit=crop&q=80',
    price: 2850,
    originalPrice: 3600,
    discountPercent: 21,
    unit: 'unit',
    moq: 4,
    moqDescription: '4 Units (Immediate Dispatch)',
    hsnCode: '3923.10.90',
    rating: 4.8,
    reviewCount: 78,
    inStock: true,
    specifications: [
      '240-Litre nominal volumetric capacity',
      'UV-stabilized 100% virgin HDPE plastic',
      'Solid rubber wheels with galvanized steel axle',
      'Swachh Bharat green/blue colorfast pigments'
    ],
    description: 'Heavy-duty 240-Litre outdoor mobile dustbin compliant with Swachh Bharat Mission (SBM) norms. Built with thick reinforced ribs to withstand tractor tipper lifting and rough gravel terrain.'
  },
  {
    id: 'malathion-5dp-insecticide',
    name: 'Malathion 5% DP Vector Insecticide (Dusting Powder)',
    teluguName: 'మలాథియాన్ 5% డిపి దోమల నియంత్రణ రసాయనం',
    category: 'Pest & Vector Control',
    categoryTelugu: 'కీటకాలు & దోమల నియంత్రణ',
    badge: 'Pest Control | CIB Reg',
    badgeColor: 'blue',
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?w=800&auto=format&fit=crop&q=80',
    price: 1450,
    originalPrice: 1850,
    discountPercent: 21,
    unit: 'bag',
    moq: 2,
    moqDescription: '2 Bags (50 kg)',
    hsnCode: '3808.91.99',
    rating: 4.9,
    reviewCount: 53,
    inStock: true,
    specifications: [
      'CIB & RC approved formulation for public health',
      '5% active ingredient dusting powder',
      'Effective against Anopheles, Culex & Aedes vectors',
      'Supplied with batch certificate of analysis'
    ],
    description: 'Central Insecticides Board (CIB) registered dusting powder for rural vector abatement, stagnant water treatment, and open sewage mosquito control. Standard issue for Telangana municipal drives.'
  },
  {
    id: 'sanitation-worker-safety-kit',
    name: 'Sanitation Worker Complete Safety Kit (PPE Pro)',
    teluguName: 'పారిశుద్ధ్య కార్మికుల పూర్తి భద్రతా కిట్ (PPE)',
    category: 'Sanitization Tools',
    categoryTelugu: 'పారిశుద్ధ్య పరికరాలు & PPE',
    badge: 'Safety PPE | ISI Gumboots',
    badgeColor: 'yellow',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop&q=80',
    price: 890,
    originalPrice: 1200,
    discountPercent: 25,
    unit: 'set',
    moq: 5,
    moqDescription: '5 Sets',
    hsnCode: '6211.42.00',
    rating: 4.9,
    reviewCount: 57,
    inStock: true,
    specifications: [
      'ISI standard waterproof PVC gumboots with non-skid sole',
      'High-visibility neon reflective safety jacket',
      'Heavy-duty nitrile chemical & sludge gloves',
      'Dual-cartridge dust & organic vapor respirator mask'
    ],
    description: 'Comprehensive occupational safety bundle for Gram Panchayat and Municipal corporation safai karmacharis. Meets national occupational safety norms for solid waste handling and drain de-silting.'
  },
  {
    id: 'heavy-thermal-fogging-machine',
    name: 'Heavy Pulse-Jet Thermal Fogging Machine (Delta Fog)',
    teluguName: 'థర్మల్ ఫాగింగ్ మిషన్ (పల్స్-జెట్ డెల్టా ఫాగ్)',
    category: 'Pest & Vector Control',
    categoryTelugu: 'కీటకాలు & దోమల నియంత్రణ',
    badge: 'Pest Control | Govt Spec',
    badgeColor: 'red',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80',
    price: 26500,
    originalPrice: 32000,
    discountPercent: 17,
    unit: 'unit',
    moq: 1,
    moqDescription: '1 Unit (Ready in Depot)',
    hsnCode: '8424.89.90',
    rating: 4.9,
    reviewCount: 29,
    inStock: true,
    specifications: [
      'High-yield pulse-jet thermal resonator',
      'Dual fuel/chemical stainless steel tanks (6L)',
      'Aerosol droplet spectrum: 5 to 30 microns',
      'Electronic push-button instant battery ignition'
    ],
    description: 'High-output pulse-jet thermal fogger designed specifically for village-wide mosquito containment and dengue/chikungunya prevention. Operates reliably on petrol and diesel carrier mix.'
  },
  {
    id: 'mosquito-larvicide-temephos',
    name: 'Mosquito Larvicide Granules & Liquid (Temephos 50% EC)',
    teluguName: 'దోమల లార్వా నియంత్రణ ద్రావకం (టెమెఫాస్ 50% EC)',
    category: 'Pest & Vector Control',
    categoryTelugu: 'కీటకాలు & దోమల నియంత్రణ',
    badge: 'Pest Control | NVBDCP Std',
    badgeColor: 'blue',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&auto=format&fit=crop&q=80',
    price: 1850,
    originalPrice: 2350,
    discountPercent: 21,
    unit: 'can',
    moq: 2,
    moqDescription: '2 Cans (10L)',
    hsnCode: '3808.91.99',
    rating: 4.8,
    reviewCount: 39,
    inStock: true,
    specifications: [
      'WHO and NVBDCP recognized organophosphate larvicide',
      'Safe for potable water reservoirs at labeled dosages',
      'Rapid kill of 3rd and 4th instar larvae within 24 hours',
      '100% active shelf life sealed aluminium container'
    ],
    description: 'National Vector Borne Disease Control Programme standard larvicide. Interrupts mosquito breeding cycles in puddles, water storage sumps, septic soak pits, and agricultural tanks.'
  },
  {
    id: 'civic-led-street-light-60w-120w',
    name: 'Civic Smart LED Street Light (60W / 120W IP66)',
    teluguName: 'స్మార్ట్ ఎల్ఈడీ వీధి దీపాలు (60W / 120W IP66)',
    category: 'Municipal Infrastructure',
    categoryTelugu: 'మున్సిపల్ మౌలిక వసతులు',
    badge: 'Infrastructure | IP66 Rating',
    badgeColor: 'cyan',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=80',
    price: 2450,
    originalPrice: 3200,
    discountPercent: 23,
    unit: 'fixture',
    moq: 6,
    moqDescription: '6 Fixtures',
    hsnCode: '9405.40.90',
    rating: 4.8,
    reviewCount: 45,
    inStock: true,
    specifications: [
      'High-pressure die-cast aluminum housing',
      '140 Lumens per Watt high-efficacy Osram/Philips chips',
      '10kV built-in lightning surge protection',
      'BIS certified & Telangana rural electrification compliant'
    ],
    description: 'Engineered for Gram Panchayat village roads and municipal colonies. Tested to withstand extreme summer temperatures up to 50°C and rural voltage spikes between 140V to 300V.'
  },
  {
    id: 'battery-backpack-sprayer-16l',
    name: 'Professional Battery Backpack Sprayer (16L 12V)',
    teluguName: 'బ్యాటరీ స్ప్రేయర్ (16 లీటర్ల సామర్థ్యం 12V)',
    category: 'Sanitization Tools',
    categoryTelugu: 'పారిశుద్ధ్య పరికరాలు & PPE',
    badge: 'Sanitization | 12V Battery',
    badgeColor: 'teal',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?w=800&auto=format&fit=crop&q=80',
    price: 2750,
    originalPrice: 3400,
    discountPercent: 19,
    unit: 'unit',
    moq: 2,
    moqDescription: '2 Units',
    hsnCode: '8424.41.00',
    rating: 4.8,
    reviewCount: 62,
    inStock: true,
    specifications: [
      '12V 12Ah heavy-duty sealed lead-acid/lithium battery',
      'Telescopic stainless steel lance with 4 interchangeable nozzles',
      'Chemical-resistant Viton seals and diaphragm pump',
      'Full battery charge covers up to 35-40 full tanks'
    ],
    description: 'High-pressure electric backpack knapsack sprayer for chemical disinfectant spraying in schools, gram panchayat offices, primary health centers (PHC), and community drainage ditches.'
  },
  {
    id: 'hydrated-lime-powder-50kg',
    name: 'Hydrated Lime Powder (Drain Sanitation 50kg)',
    teluguName: 'హైడ్రేటెడ్ లైమ్ పౌడర్ (సున్నం 50 కిలోలు)',
    category: 'Disinfectants & Chemicals',
    categoryTelugu: 'క్రిమిసంహారకాలు & రసాయనాలు',
    badge: 'Disinfectants | Bulk Stock',
    badgeColor: 'orange',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80',
    price: 620,
    originalPrice: 780,
    discountPercent: 20,
    unit: 'bag',
    moq: 10,
    moqDescription: '10 Bags (500 kg)',
    hsnCode: '2522.20.00',
    rating: 4.7,
    reviewCount: 42,
    inStock: true,
    specifications: [
      '90%+ Calcium Hydroxide Ca(OH)2 concentration',
      'Super fine 300-mesh pulverization for instant slurry dispersion',
      'Moisture-resistant poly woven sack packaging',
      'Immediate alkalinity adjustment and odor neutralizer'
    ],
    description: 'High-purity calcium hydroxide for neutralizing open sewer stench, soil sanitization, and roadside whitewashing during village festivals, government VIP visits, and monsoon cleaning drives.'
  },
  {
    id: 'heavy-steel-street-sweeping-broom',
    name: 'Heavy Steel Street Sweeping Broom & Scraper',
    teluguName: 'రోడ్ల క్లీనింగ్ స్టీల్ బ్రూమ్ & స్క్రాపర్',
    category: 'Sanitization Tools',
    categoryTelugu: 'పారిశుద్ధ్య పరికరాలు & PPE',
    badge: 'Sanitization | Durable GI',
    badgeColor: 'amber',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop&q=80',
    price: 380,
    originalPrice: 490,
    discountPercent: 22,
    unit: 'broom',
    moq: 10,
    moqDescription: '10 Brooms Bundle',
    hsnCode: '9603.90.00',
    rating: 4.6,
    reviewCount: 48,
    inStock: true,
    specifications: [
      'Reinforced high-tensile galvanized flat steel bristles',
      'Solid heavy-gauge welded steel scraper head',
      'Ergonomic threaded socket for 5ft wooden/pipe handle',
      'Built for asphalt mud crusts, de-silting, and gravel sweeping'
    ],
    description: 'Tough road-sweeping broom designed for municipal sanitary workers. Removes hardened mud crusts, silt, and heavy construction debris without bending or bristle loss.'
  },
  {
    id: 'twin-wet-dry-community-dustbin',
    name: 'Twin Wet & Dry Community Dustbin (100L x 2)',
    teluguName: 'ద్విముఖ తడి మరియు పొడి చెత్త డబ్బాలు (100L x 2)',
    category: 'Waste Management',
    categoryTelugu: 'వ్యర్థాల నిర్వహణ',
    badge: 'Waste Mgmt | Segregation',
    badgeColor: 'green',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80',
    price: 6400,
    originalPrice: 7900,
    discountPercent: 19,
    unit: 'set',
    moq: 2,
    moqDescription: '2 Twin Sets',
    hsnCode: '3923.10.90',
    rating: 4.8,
    reviewCount: 37,
    inStock: true,
    specifications: [
      'Dual 100-Litre bins (Green: Biodegradable, Blue: Non-Biodegradable)',
      'Heavy powder-coated GI frame stand with base mounting brackets',
      'Swing-top swivel hood lids to prevent rain ingress',
      'Screen-printed Swachh Bharat & Segregation bilingual logos'
    ],
    description: 'Post-mounted dual waste segregation unit ideal for village bus stops, gram panchayat bhavans, PHC clinics, and weekly shandies (santalu) across rural Telangana.'
  },
  {
    id: 'high-density-artificial-turf-35mm',
    name: 'High-Density Artificial Green Turf (35mm UV)',
    teluguName: 'ఆర్టిఫిషియల్ గ్రీన్ టర్ఫ్ (35మి.మీ UV ప్రొటెక్టెడ్)',
    category: 'Civic Landscaping',
    categoryTelugu: 'పౌర పచ్చదనం & పార్కులు',
    badge: 'Landscaping | 35mm Dense',
    badgeColor: 'emerald',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=80',
    price: 48,
    originalPrice: 65,
    discountPercent: 26,
    unit: 'sq.ft',
    moq: 500,
    moqDescription: '500 Sq.Ft Roll',
    hsnCode: '5703.30.00',
    rating: 4.7,
    reviewCount: 31,
    inStock: true,
    specifications: [
      '35mm four-tone natural look virgin polymer yarns',
      'Triple-layer latex backing with water drainage perforations',
      'UV-stabilized to withstand intense 45°C Deccan summers',
      '5-Year outdoor warranty against bald spots or color fading'
    ],
    description: 'Contractor-grade artificial landscape grass for municipal parks, roundabouts, gram panchayat open auditoriums, government school playgrounds, and township medians.'
  }
];

export const CATEGORIES = [
  {
    id: 'Disinfectants & Chemicals',
    name: 'Bleaching Powder & Lime',
    teluguName: 'బ్లీచింగ్ & లైమ్ పౌడర్',
    count: 2,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    description: 'Industrial 33% chlorine & 90% hydrated lime sacks'
  },
  {
    id: 'Pest & Vector Control',
    name: 'Vector & Mosquito Control',
    teluguName: 'దోమల & కీటకాల నియంత్రణ',
    count: 3,
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&auto=format&fit=crop&q=80',
    description: 'Malathion 5% DP, pulse thermal foggers & larvicides'
  },
  {
    id: 'Waste Management',
    name: 'Commercial Dust Bins',
    teluguName: 'మున్సిపల్ చెత్త డబ్బాలు',
    count: 2,
    image: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=600&auto=format&fit=crop&q=80',
    description: '240L SBM wheeled bins & 100L twin segregation units'
  },
  {
    id: 'Municipal Infrastructure',
    name: 'Civic LED Street Lights',
    teluguName: 'ఎల్ఈడీ వీధి దీపాలు',
    count: 1,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop&q=80',
    description: '60W/120W IP66 die-cast fixtures with surge protectors'
  },
  {
    id: 'Civic Landscaping',
    name: 'Green Mat Turf',
    teluguName: 'ఆర్టిఫిషియల్ గడ్డి & పార్కులు',
    count: 1,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format&fit=crop&q=80',
    description: '35mm dense UV weather-resistant landscape turf'
  },
  {
    id: 'Sanitization Tools',
    name: 'Sanitization Tools & PPE',
    teluguName: 'పారిశుద్ధ్య టూల్స్ & PPE',
    count: 3,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
    description: 'Battery sprayers, road brooms, gumboots & safety gear'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'M. Ramachandra Rao',
    role: 'Sarpanch, Chevella Gram Panchayat',
    location: 'Ranga Reddy District',
    verifiedBadge: 'Verified Sarpanch',
    quote: 'KNR Enterprises has been our primary supplier for Swachh Bharat bleaching powder and 240L dustbins for over 3 years. Their 24-hour depot dispatch to our mandal during monsoon sanitation drives was flawless. Proper GST proforma made our panchayat audit effortless.',
    rating: 5,
    avatar: 'MR'
  },
  {
    id: 2,
    name: 'Dr. K. Srinivasulu',
    role: 'Sanitary Inspector, Vikarabad Municipality',
    location: 'Vikarabad Urban Dept',
    verifiedBadge: 'Verified Municipality',
    quote: 'We procured commercial Delta thermal fogging machines and Malathion 5% DP for vector control across 12 municipal wards. The machine build quality (SS304) is exceptional and their team provided on-site operator training on delivery.',
    rating: 5,
    avatar: 'KS'
  },
  {
    id: 3,
    name: 'N. Sudhakar Reddy',
    role: 'Project Director, Sri Sai Infra & Civil Works',
    location: 'EPC Infrastructure Partner',
    verifiedBadge: 'Verified Contractor',
    quote: 'As an EPC contractor executing urban civic illumination, sourcing 120W IP66 die-cast LED streetlights with 10kV surge protection at wholesale depot rates with instant GST invoices has given us a major advantage in municipal tenders.',
    rating: 5,
    avatar: 'NS'
  }
];

export const GOVERNMENT_BODIES = [
  'Telangana Gram Panchayat Raj',
  'Swachh Telangana Mission',
  'Vikarabad Municipal Council',
  'Ranga Reddy Rural Dev Agency',
  'Chevella Mandal Parishad',
  'Sri Sai Civil Infrastructure EPC',
  'Urban Township Facility Mgmt',
  'Telangana State Rural Water & Sanitation'
];

export const FAQS_DATA = [
  {
    id: 'faq-1',
    category: 'Bulk Orders & MOQ',
    question: 'Do you supply in bulk for Gram Panchayats and Municipal Corporations?',
    questionTelugu: 'మీరు గ్రామ పంచాయతీలు మరియు మున్సిపాలిటీలకు హోల్‌సేల్‌గా సరఫరా చేస్తారా?',
    answer: 'Yes, absolutely. KNR Enterprises specializes in institutional, bulk, and depot-level supplies. We cater to Gram Panchayats, Municipal Councils (GHMC, HMDA peripheries), Townships, and EPC civil contractors with full truckload (FTL) and less-than-truckload (LTL) deliveries across all 33 Telangana districts.',
    tags: ['33 Districts Covered', 'Panchayats & Municipalities']
  },
  {
    id: 'faq-2',
    category: 'Tenders & Billing',
    question: 'Do you provide official GST invoices for government audit compliance?',
    questionTelugu: 'ప్రభుత్వ ఆడిట్ నిబంధనల ప్రకారం అధికారిక GST ఇన్వాయిస్ అందిస్తారా?',
    answer: 'Yes. Every consignment is invoiced under GSTIN 36CUHPK5939D1ZG with correct HSN classification (e.g., 2828.10.10 for bleaching, 3923.10.90 for bins, 9405.40.90 for street lights). We provide formal GST-3B proforma invoices suitable for treasury token releases, Mandal Development Officer (MDO) sanction, and Gram Panchayat bank withdrawals.',
    tags: ['GST-3B Compliant', 'MDO / Audit Approved']
  },
  {
    id: 'faq-3',
    category: 'Delivery & Logistics',
    question: 'Which areas do you deliver to and what are the transit timelines?',
    questionTelugu: 'మీరు ఏ ప్రాంతాలకు డెలివరీ చేస్తారు? డెలివరీ సమయం ఎంత?',
    answer: 'We deliver directly across all 33 districts of Telangana. For Ranga Reddy, Vikarabad, and Hyderabad HMDA peripheries, dispatches reach destinations in under 4 hours. For other districts (Nizamabad, Warangal, Khammam, Mahabubnagar, Adilabad, etc.), standard road delivery takes 24 to 48 hours.',
    tags: ['Same-Day Local', '24-48h Statewide']
  },
  {
    id: 'faq-4',
    category: 'Payments & Support',
    question: 'What payment methods and credit terms are accepted for institutional orders?',
    questionTelugu: 'ప్రభుత్వ ఆర్డర్లకు ఎలాంటి చెల్లింపు పద్ధతులు అందుబాటులో ఉన్నాయి?',
    answer: 'We accept RTGS / NEFT, Panchayat Cheques, Treasury Challans, UPI, and authorized e-Procurement purchase orders. For verified regular Gram Panchayats and registered municipal vendors, standard delivery against token/MDO sanctioned sanction orders is facilitated.',
    tags: ['NEFT / RTGS', 'Gram Panchayat Cheque', 'Treasury Challan']
  },
  {
    id: 'faq-5',
    category: 'Bulk Orders & MOQ',
    question: 'What is the Minimum Order Quantity (MOQ) for different catalog products?',
    questionTelugu: 'వివిధ ఉత్పత్తులకు కనీస ఆర్డర్ పరిమాణం (MOQ) ఎంత?',
    answer: 'Each product is indexed with clear depot MOQ: Bleaching Powder (5 Bags / 125kg), Hydrated Lime (10 Bags / 500kg), Malathion 5% DP (2 Bags / 50kg), Wheeled 240L Bins (4 Units), Thermal Foggers (1 Unit), LED Streetlights (6 Fixtures), and Artificial Turf (500 sq.ft). Smaller test samples can be collected directly at our Chevella depot.',
    tags: ['Transparent MOQs', 'Depot Pickup Allowed']
  },
  {
    id: 'faq-6',
    category: 'Tenders & Billing',
    question: 'Do you participate in Government Tenders and e-Procurement bids?',
    questionTelugu: 'మీరు ప్రభుత్వ టెండర్లు మరియు ఈ-ప్రొక్యూర్మెంట్ లో పాల్గొంటారా?',
    answer: 'Yes. KNR Enterprises holds active state vendor registration, GSTIN, PAN, and technical laboratory assay test certificates (active chlorine testing, plastic virgin polymer certification). We furnish complete vendor documentation and bid bond support for GeM (Government e-Marketplace) and Telangana e-Procurement portals.',
    tags: ['e-Procurement Ready', 'GeM / State Vendor']
  },
  {
    id: 'faq-7',
    category: 'Payments & Support',
    question: 'How can I get an instant bulk quote or proforma invoice?',
    questionTelugu: 'నేను తక్షణమే బల్క్ కొటేషన్ లేదా ప్రొఫార్మా ఇన్వాయిస్ ఎలా పొందగలను?',
    answer: 'You can use the built-in "Get Quote" button in the navigation bar to add supplies to your requirement sheet, specify your Panchayat or Contractor name, and click "Generate Proforma Invoice". A formatted GST proforma invoice will generate instantly with PDF download and WhatsApp dispatch.',
    tags: ['15-Minute Turnaround', 'WhatsApp Fast-Track']
  },
  {
    id: 'faq-8',
    category: 'Delivery & Logistics',
    question: 'How do I track my dispatched order or schedule depot pickup?',
    questionTelugu: 'ఆర్డర్ ట్రాకింగ్ లేదా చెవెళ్ల డిపోలో నేరుగా పికప్ చేయడం ఎలా?',
    answer: 'Our Chevella logistics yard is open Monday through Saturday from 8:30 AM to 7:30 PM (with emergency monsoon fogging dispatches on Sunday on-call). You can call Logistics Incharge G. Siva at +91 9640195798 for real-time driver mobile coordinates and weighbridge receipts.',
    tags: ['Dedicated Dispatcher', 'Active Waybills']
  }
];
