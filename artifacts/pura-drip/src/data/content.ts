export interface TreatmentIngredient {
  name: string;
  amount: string;
  benefit: string;
}

export type TreatmentCategory = 'Hydration' | 'Wellness' | 'Performance' | 'Beauty' | 'Relief' | 'Specialty';

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  'Hydration', 'Wellness', 'Performance', 'Beauty', 'Relief', 'Specialty'
];

export interface Treatment {
  id: string;
  name: string;
  popular: boolean;
  category: TreatmentCategory;
  uses: string[];
  description: string;
  price: number;
  duration: string;
  volume: string;
  tagline: string;
  longDescription: string;
  ingredients: TreatmentIngredient[];
  benefits: string[];
  idealFor: string[];
}

export const treatments: Treatment[] = [
  {
    id: 'just-fluids',
    name: 'Just Fluids',
    popular: false,
    category: 'Hydration',
    uses: ['Dehydration', 'Hangover Recovery', 'Heat Exhaustion', 'Post-Workout Recovery'],
    description: "Simple, effective hydration to restore your body's natural fluid balance. Perfect for quick recovery without added vitamins.",
    price: 99,
    duration: '30-45 min',
    volume: '1000 mL',
    tagline: 'Pure Hydration, Nothing Extra',
    longDescription: "Sometimes your body just needs water — delivered directly to your bloodstream for maximum absorption. Our Just Fluids IV bypasses the digestive system, rehydrating you up to 3x faster than drinking water alone. This is the perfect entry-level treatment for anyone new to IV therapy or looking for a quick hydration boost.",
    ingredients: [
      { name: 'Normal Saline (0.9% NaCl)', amount: '1000 mL', benefit: 'Restores fluid balance and electrolytes' }
    ],
    benefits: ['Rapid rehydration', 'Restores electrolyte balance', 'Relieves fatigue from dehydration', 'Quick 30-minute session'],
    idealFor: ['Mild dehydration', 'Post-exercise recovery', 'Hot weather relief', 'General wellness maintenance']
  },
  {
    id: 'dehydration',
    name: 'Dehydration',
    popular: true,
    category: 'Hydration',
    uses: ['Dehydration', 'Heat Exhaustion', 'Post-Workout Recovery', 'Travel Fatigue'],
    description: "Rapidly replenish fluids and essential electrolytes to bounce back fast from travel, heat, or exertion.",
    price: 179,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Rapid Recovery When You Need It Most',
    longDescription: "Go beyond basic hydration with our enhanced Dehydration IV. This treatment combines premium saline with a targeted blend of electrolytes and B-vitamins to not only rehydrate you but also replenish what your body has lost. Whether you've been traveling, working out, or just not drinking enough water, this drip gets you back to feeling 100% fast.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Core hydration and fluid restoration' },
      { name: 'Electrolyte Complex', amount: 'Custom blend', benefit: 'Replaces lost minerals (magnesium, potassium, calcium)' },
      { name: 'Vitamin B Complex', amount: 'Standard dose', benefit: 'Supports energy production and metabolism' },
      { name: 'Vitamin B12', amount: '1000 mcg', benefit: 'Boosts energy levels and mental clarity' }
    ],
    benefits: ['3x faster rehydration than oral intake', 'Replenishes critical electrolytes', 'Boosts energy with B-vitamins', 'Reduces symptoms of dehydration headaches'],
    idealFor: ['Travelers and jet lag', 'Post-workout recovery', 'Heat exhaustion', 'Anyone feeling run-down']
  },
  {
    id: 'nausea-rescue',
    name: 'Nausea Rescue',
    popular: false,
    category: 'Relief',
    uses: ['Food Poisoning', 'Morning Sickness', 'Motion Sickness', 'Stomach Flu'],
    description: "Calm your stomach and rehydrate your body when you can't keep liquids down. Includes targeted anti-nausea medication.",
    price: 199,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Fast Relief When Nothing Stays Down',
    longDescription: "When nausea strikes, drinking fluids can feel impossible. Our Nausea Rescue IV delivers hydration and powerful anti-nausea medication directly into your bloodstream, bypassing your upset stomach entirely. You'll start feeling relief within minutes — not hours. This is one of our most-requested treatments for food poisoning, morning sickness, and stomach bugs.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Rehydrates without upsetting your stomach' },
      { name: 'Ondansetron (Zofran)', amount: '4 mg', benefit: 'Fast-acting anti-nausea medication' },
      { name: 'Vitamin B6', amount: '100 mg', benefit: 'Natural nausea relief, especially for morning sickness' },
      { name: 'Electrolyte Complex', amount: 'Custom blend', benefit: 'Replaces minerals lost from vomiting' }
    ],
    benefits: ['Stops nausea within minutes', 'Rehydrates without oral intake', 'Safe for morning sickness', 'Restores lost electrolytes'],
    idealFor: ['Food poisoning recovery', 'Morning sickness', 'Stomach flu', 'Post-surgery nausea']
  },
  {
    id: 'hangover-rescue',
    name: 'Hangover Rescue',
    popular: true,
    category: 'Hydration',
    uses: ['Dehydration', 'Fatigue & Brain Fog', 'Hangover Recovery', 'Nausea & Headaches'],
    description: "The ultimate recovery blend to eliminate headaches, nausea, and dehydration after a long night out.",
    price: 219,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'From Rough Morning to Ready for Anything',
    longDescription: "Had one too many? Our Hangover Rescue IV is designed to undo the damage fast. This powerful combination targets every hangover symptom: dehydration, headache, nausea, and fatigue. With anti-inflammatory medication, anti-nausea support, and a B-vitamin energy boost, you'll go from miserable to functional in under an hour. It's like a reset button for your body.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Combats alcohol-induced dehydration' },
      { name: 'Ondansetron (Zofran)', amount: '4 mg', benefit: 'Eliminates hangover nausea' },
      { name: 'Ketorolac (Toradol)', amount: '30 mg', benefit: 'Powerful anti-inflammatory for headaches and body aches' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Replenishes B-vitamins depleted by alcohol' },
      { name: 'Magnesium', amount: '500 mg', benefit: 'Reduces muscle cramps and supports recovery' }
    ],
    benefits: ['Eliminates headaches and nausea', 'Rapid rehydration', 'Restores depleted vitamins', 'Feel better within 30-45 minutes'],
    idealFor: ['Morning-after recovery', 'Bachelor/bachelorette parties', 'Vegas trips', 'Any big night out']
  },
  {
    id: 'headache-rescue',
    name: 'Headache Rescue',
    popular: false,
    category: 'Relief',
    uses: ['Chronic Migraines', 'Dehydration-Related Headaches', 'Stress Headaches', 'Tension Headaches'],
    description: "Targeted, fast-acting relief for severe headaches and migraines to get you back to your day pain-free.",
    price: 219,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Powerful Migraine & Headache Relief',
    longDescription: "Don't suffer through another migraine or tension headache. Our Headache Rescue IV delivers prescription-strength relief directly to your bloodstream, working in minutes instead of the 30-60 minutes oral medications need. Combined with hydration and magnesium — a proven migraine-fighting mineral — this treatment attacks headaches from every angle.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Addresses dehydration, a leading headache trigger' },
      { name: 'Ketorolac (Toradol)', amount: '30 mg', benefit: 'Prescription-strength anti-inflammatory pain relief' },
      { name: 'Magnesium', amount: '1000 mg', benefit: 'Clinically proven to reduce migraine frequency and severity' },
      { name: 'Vitamin B2 (Riboflavin)', amount: '400 mg', benefit: 'Supports neurological function and headache prevention' }
    ],
    benefits: ['Fast-acting pain relief', 'Addresses root cause (dehydration)', 'Magnesium for migraine prevention', 'No drowsiness side effects'],
    idealFor: ['Chronic migraine sufferers', 'Tension headaches', 'Cluster headaches', 'Dehydration headaches']
  },
  {
    id: 'myers-cocktail',
    name: 'Myers Cocktail',
    popular: true,
    category: 'Wellness',
    uses: ['Chronic Fatigue', 'Immune Support', 'Migraine Relief', 'Post-Workout Recovery'],
    description: "The gold standard of IV therapy. A comprehensive blend of essential vitamins and minerals for overall systemic wellness.",
    price: 249,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'The Gold Standard of IV Therapy',
    longDescription: "Originally developed by Dr. John Myers in the 1970s, the Myers Cocktail has become the world's most popular IV therapy formula. This time-tested blend of vitamins and minerals addresses a wide range of conditions — from chronic fatigue and fibromyalgia to seasonal allergies and depression. It's the perfect all-around treatment for anyone looking to optimize their health.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Premium hydration base' },
      { name: 'Vitamin C', amount: '2000 mg', benefit: 'Powerful antioxidant and immune booster' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Supports energy, metabolism, and brain function' },
      { name: 'Vitamin B12', amount: '1000 mcg', benefit: 'Essential for energy and neurological health' },
      { name: 'Magnesium', amount: '1000 mg', benefit: 'Muscle relaxation and cardiovascular support' },
      { name: 'Calcium Gluconate', amount: '200 mg', benefit: 'Bone health and muscle function' }
    ],
    benefits: ['Comprehensive vitamin and mineral replenishment', 'Boosts immune function', 'Increases energy levels', 'Reduces symptoms of chronic conditions'],
    idealFor: ['General wellness optimization', 'Chronic fatigue sufferers', 'Seasonal allergy relief', 'Monthly maintenance therapy']
  },
  {
    id: 'athletic-performance',
    name: 'Athletic Performance',
    popular: false,
    category: 'Performance',
    uses: ['Boosting Endurance', 'Muscle Recovery', 'Pre-Workout Hydration', 'Reducing Cramps & Soreness'],
    description: "Optimize your physical performance, reduce muscle fatigue, and significantly accelerate your recovery time.",
    price: 249,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Train Harder, Recover Faster',
    longDescription: "Whether you're a weekend warrior or competitive athlete, our Athletic Performance IV is formulated to help you push harder and recover faster. This specialized blend combines amino acids, electrolytes, and anti-inflammatory support to reduce muscle soreness, replenish what you lose through sweat, and prepare your body for peak performance.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Replaces fluids lost through sweat' },
      { name: 'Amino Acid Complex', amount: 'Performance dose', benefit: 'Supports muscle repair and growth' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Converts nutrients to usable energy' },
      { name: 'Magnesium', amount: '1000 mg', benefit: 'Prevents cramps and supports muscle recovery' },
      { name: 'Vitamin C', amount: '2000 mg', benefit: 'Reduces exercise-induced oxidative stress' },
      { name: 'Zinc', amount: '10 mg', benefit: 'Supports testosterone production and tissue repair' }
    ],
    benefits: ['Accelerated muscle recovery', 'Reduced cramping and soreness', 'Improved endurance', 'Faster return to training'],
    idealFor: ['Marathon runners', 'CrossFit athletes', 'Pre-game preparation', 'Post-competition recovery']
  },
  {
    id: 'beauty',
    name: 'Beauty',
    popular: false,
    category: 'Beauty',
    uses: ['Anti-Aging Benefits', 'Detox & Liver Support', 'Hair & Nail Health', 'Skin Hydration & Glow'],
    description: "Nourish your body from the inside out with a powerful blend that promotes a radiant, youthful glow.",
    price: 249,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Glow From the Inside Out',
    longDescription: "True beauty starts at the cellular level. Our Beauty IV delivers a concentrated cocktail of biotin, glutathione, and vitamin C directly to your cells — bypassing the digestive system for maximum absorption. The result? Stronger hair, healthier nails, and that coveted natural glow that no topical product can match. Many of our clients schedule this treatment monthly as part of their beauty regimen.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Deep cellular hydration for plump, dewy skin' },
      { name: 'Glutathione', amount: '1000 mg', benefit: 'Master antioxidant for skin brightening and detox' },
      { name: 'Biotin (Vitamin B7)', amount: '5000 mcg', benefit: 'Strengthens hair and nails' },
      { name: 'Vitamin C', amount: '3000 mg', benefit: 'Stimulates collagen production' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Supports healthy cell turnover' }
    ],
    benefits: ['Brighter, more radiant skin', 'Stronger hair and nails', 'Increased collagen production', 'Powerful detoxification'],
    idealFor: ['Pre-event glow prep', 'Anti-aging maintenance', 'Wedding preparation', 'Monthly beauty boost']
  },
  {
    id: 'energy-boost',
    name: 'Energy Boost',
    popular: false,
    category: 'Performance',
    uses: ['Fatigue & Brain Fog', 'Low Energy Levels', 'Midday Slumps', 'Stress & Burnout'],
    description: "Recharge your batteries and clear brain fog with essential B-vitamins designed for sustained energy.",
    price: 199,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Sustained Energy Without the Crash',
    longDescription: "Tired of relying on coffee and energy drinks that leave you crashing by 2 PM? Our Energy Boost IV delivers a potent combination of B-vitamins, amino acids, and hydration that provides clean, sustained energy without the jitters or crash. This treatment is especially popular with busy professionals, new parents, and anyone fighting chronic fatigue.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Hydration to combat fatigue' },
      { name: 'Vitamin B12', amount: '2000 mcg', benefit: 'The body\'s primary energy vitamin' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Supports metabolic energy production' },
      { name: 'Taurine', amount: '1000 mg', benefit: 'Natural energy and focus enhancer' },
      { name: 'Magnesium', amount: '500 mg', benefit: 'Reduces fatigue and muscle tension' }
    ],
    benefits: ['Sustained energy for 1-2 weeks', 'Mental clarity and focus', 'No jitters or crash', 'Improved mood and motivation'],
    idealFor: ['Busy professionals', 'New parents', 'Chronic fatigue sufferers', 'Pre-travel energy boost']
  },
  {
    id: 'flu-rescue',
    name: 'Flu Rescue',
    popular: true,
    category: 'Relief',
    uses: ['Dehydration', 'Fever & Body Aches', 'Flu Symptoms', 'Nausea & Headaches'],
    description: "Fight off illness faster and alleviate symptoms with high-dose vitamin C, zinc, and premium hydration.",
    price: 249,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Fight Illness, Feel Better Faster',
    longDescription: "When the flu hits, every minute matters. Our Flu Rescue IV is loaded with high-dose vitamin C, zinc, and immune-supporting nutrients to help your body fight off infection faster. Combined with anti-nausea and anti-inflammatory medications, this treatment addresses both the root cause and the symptoms, getting you back on your feet days sooner than rest alone.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Critical hydration during illness' },
      { name: 'Vitamin C', amount: '5000 mg', benefit: 'High-dose immune system activation' },
      { name: 'Zinc', amount: '20 mg', benefit: 'Reduces duration and severity of illness' },
      { name: 'Ondansetron (Zofran)', amount: '4 mg', benefit: 'Controls flu-related nausea' },
      { name: 'Ketorolac (Toradol)', amount: '30 mg', benefit: 'Relieves fever and body aches' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Supports immune function and energy' }
    ],
    benefits: ['Shortens illness duration', 'Immediate symptom relief', 'Immune system boost', 'Prevents dehydration from fever'],
    idealFor: ['Active flu symptoms', 'Cold and respiratory infections', 'Post-illness recovery', 'When you can\'t afford to be sick']
  },
  {
    id: 'detox',
    name: 'Detox',
    popular: false,
    category: 'Wellness',
    uses: ['Boosting Immune Function', 'Detox & Liver Support', 'Hydration & Energy', 'Reducing Inflammation'],
    description: "Flush out built-up toxins and deeply support your liver function with powerful systemic antioxidants.",
    price: 249,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Deep Cleanse at the Cellular Level',
    longDescription: "Our modern lives expose us to an unprecedented amount of toxins — from processed foods and environmental pollutants to alcohol and medications. Our Detox IV delivers glutathione (the body's master antioxidant) along with vitamin C and other liver-supporting nutrients to help your body naturally flush out these harmful substances. Regular detox treatments can improve energy, skin clarity, and overall vitality.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Flushes toxins through increased hydration' },
      { name: 'Glutathione', amount: '1500 mg', benefit: 'Master antioxidant for liver detoxification' },
      { name: 'Vitamin C', amount: '3000 mg', benefit: 'Neutralizes free radicals' },
      { name: 'Alpha Lipoic Acid', amount: '250 mg', benefit: 'Supports liver function and regeneration' },
      { name: 'B Complex', amount: 'High dose', benefit: 'Supports metabolic detox pathways' }
    ],
    benefits: ['Enhanced liver function', 'Reduced inflammation', 'Improved skin clarity', 'Increased energy and mental clarity'],
    idealFor: ['Post-holiday reset', 'Alcohol recovery', 'Environmental toxin exposure', 'Monthly maintenance cleanse']
  },
  {
    id: 'immunity',
    name: 'Immunity',
    popular: false,
    category: 'Wellness',
    uses: ['Cold & Flu Prevention', 'Immune Support', 'Post-Illness Recovery', 'Travel Wellness'],
    description: "Fortify your immune system before upcoming travel or during cold and flu season to stay healthy.",
    price: 229,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Your Best Defense Against Getting Sick',
    longDescription: "Prevention is always better than cure. Our Immunity IV is designed to supercharge your immune system with high-dose vitamin C, zinc, and a full spectrum of immune-supporting nutrients. This treatment is ideal before traveling, during cold and flu season, or anytime you feel like you might be coming down with something. Think of it as armor for your immune system.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Optimal hydration for immune function' },
      { name: 'Vitamin C', amount: '5000 mg', benefit: 'Supercharges immune cell production' },
      { name: 'Zinc', amount: '20 mg', benefit: 'Essential mineral for immune defense' },
      { name: 'Vitamin D3', amount: '50,000 IU', benefit: 'Activates immune response pathways' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Supports white blood cell production' },
      { name: 'Selenium', amount: '200 mcg', benefit: 'Protects cells from oxidative damage' }
    ],
    benefits: ['Strengthened immune defenses', 'Reduced risk of getting sick', 'Faster recovery if you do get ill', 'Protection during travel'],
    idealFor: ['Pre-travel preparation', 'Cold and flu season', 'After exposure to sick contacts', 'Immune-compromised individuals']
  },
  {
    id: 'mega-myers',
    name: 'Mega Myers Cocktail',
    popular: false,
    category: 'Wellness',
    uses: ['Anti-Aging Benefits', 'Chronic Fatigue', 'Immune Defense', 'Overall Wellness'],
    description: "An amplified version of the classic Myers formulation, delivering maximum nutrient density for profound health benefits.",
    price: 349,
    duration: '60-90 min',
    volume: '1000 mL',
    tagline: 'Maximum Strength, Maximum Results',
    longDescription: "For those who want the absolute best, our Mega Myers Cocktail takes the legendary Myers formula and amplifies everything. Double the vitamins, added glutathione, and additional minerals create a powerhouse IV treatment that delivers profound health benefits. This is our most comprehensive single-session treatment and is especially popular with health-conscious clients seeking the ultimate in preventive care.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Premium hydration base' },
      { name: 'Vitamin C', amount: '5000 mg', benefit: 'Maximum antioxidant protection' },
      { name: 'Glutathione', amount: '1000 mg', benefit: 'Master antioxidant and detoxifier' },
      { name: 'Vitamin B Complex', amount: 'Double dose', benefit: 'Maximum energy and metabolism support' },
      { name: 'Vitamin B12', amount: '2000 mcg', benefit: 'Enhanced neurological and energy support' },
      { name: 'Magnesium', amount: '1500 mg', benefit: 'Deep muscle relaxation and cardiovascular support' },
      { name: 'Calcium Gluconate', amount: '400 mg', benefit: 'Enhanced bone and muscle function' },
      { name: 'Zinc', amount: '20 mg', benefit: 'Immune support and tissue repair' }
    ],
    benefits: ['The most comprehensive IV treatment available', 'Maximum vitamin and mineral delivery', 'Anti-aging and cellular repair', 'Profound energy and wellness boost'],
    idealFor: ['Health optimization enthusiasts', 'Chronic illness management', 'Anti-aging maintenance', 'Quarterly deep-wellness treatment']
  },
  {
    id: 'nad',
    name: 'NAD+',
    popular: false,
    category: 'Beauty',
    uses: ['Athletic Performance & Recovery', 'Brain Function', 'Cellular Repair', 'Chronic Fatigue'],
    description: "The ultimate anti-aging coenzyme therapy to repair cells, boost cognitive clarity, and restore youthful energy.",
    price: 499,
    duration: '2-4 hours',
    volume: '500 mL',
    tagline: 'The Future of Anti-Aging Therapy',
    longDescription: "NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in every cell of your body that's essential for energy production, DNA repair, and cellular communication. As we age, our NAD+ levels naturally decline, contributing to aging, cognitive decline, and decreased energy. Our NAD+ IV therapy restores these levels, effectively turning back the clock at the cellular level. This is our most advanced treatment and the closest thing to a fountain of youth that science has to offer.",
    ingredients: [
      { name: 'NAD+', amount: '500 mg', benefit: 'Repairs DNA, restores cellular energy, and reverses aging markers' },
      { name: 'Normal Saline', amount: '500 mL', benefit: 'Hydration carrier for optimal NAD+ delivery' }
    ],
    benefits: ['Cellular repair and regeneration', 'Enhanced cognitive function and mental clarity', 'Increased physical energy and endurance', 'Slowed biological aging process'],
    idealFor: ['Anti-aging enthusiasts', 'Cognitive optimization', 'Addiction recovery support', 'Chronic fatigue and fibromyalgia']
  },
  {
    id: 'altitude-sickness',
    name: 'Altitude Sickness',
    popular: false,
    category: 'Specialty',
    uses: ['Altitude Adjustment', 'Headache Relief', 'Nausea & Dizziness', 'Travel Wellness'],
    description: "Prevent or relieve altitude sickness symptoms with targeted hydration, anti-nausea medication, and anti-inflammatory support.",
    price: 249,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Conquer Any Elevation',
    longDescription: "Heading to the mountains? Altitude sickness can turn an amazing trip into a miserable experience. Our Altitude Sickness IV is specifically formulated to help your body acclimate faster by optimizing hydration, delivering anti-nausea and anti-inflammatory medications, and replenishing the electrolytes your body burns through at higher elevations. Whether you're skiing in Colorado or hiking in the Rockies, this treatment helps you enjoy every moment.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Optimizes hydration for altitude acclimation' },
      { name: 'Ondansetron (Zofran)', amount: '4 mg', benefit: 'Relieves altitude-related nausea' },
      { name: 'Ketorolac (Toradol)', amount: '30 mg', benefit: 'Reduces headaches and body aches' },
      { name: 'Dexamethasone', amount: '4 mg', benefit: 'Steroid to reduce inflammation and swelling' },
      { name: 'Vitamin B Complex', amount: 'Standard dose', benefit: 'Supports energy and metabolism at altitude' },
      { name: 'Magnesium', amount: '500 mg', benefit: 'Prevents muscle cramps common at elevation' }
    ],
    benefits: ['Faster altitude acclimation', 'Relief from headaches and nausea', 'Reduced fatigue and dizziness', 'Prevention of worsening symptoms'],
    idealFor: ['Ski trips', 'Mountain hiking', 'High-altitude travel', 'Arriving in Denver, Colorado Springs, or similar cities']
  },
  {
    id: 'anti-inflammatory',
    name: 'Anti-Inflammatory',
    popular: false,
    category: 'Relief',
    uses: ['Chronic Pain', 'Joint Inflammation', 'Post-Surgery Recovery', 'Autoimmune Support'],
    description: "Reduce systemic inflammation and oxidative stress with powerful antioxidants and targeted anti-inflammatory support.",
    price: 299,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Calm Inflammation From the Inside',
    longDescription: "Chronic inflammation is at the root of many modern health issues — from joint pain and autoimmune conditions to cardiovascular disease and premature aging. Our Anti-Inflammatory IV delivers a potent combination of glutathione, NAC (N-Acetyl Cysteine), and a steroid to combat inflammation at the cellular level. This treatment is ideal for anyone dealing with chronic pain, post-surgical recovery, or autoimmune flare-ups.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Hydration to support detox pathways' },
      { name: 'Glutathione', amount: '1500 mg', benefit: 'Master antioxidant to reduce oxidative stress' },
      { name: 'NAC (N-Acetyl Cysteine)', amount: '1000 mg', benefit: 'Precursor to glutathione, supports liver and lungs' },
      { name: 'Dexamethasone', amount: '4 mg', benefit: 'Powerful anti-inflammatory steroid' },
      { name: 'Vitamin C', amount: '2000 mg', benefit: 'Supports immune function and tissue repair' }
    ],
    benefits: ['Reduced systemic inflammation', 'Pain relief for joints and muscles', 'Support for autoimmune conditions', 'Enhanced recovery from surgery or injury'],
    idealFor: ['Chronic pain sufferers', 'Autoimmune flare-ups', 'Post-surgery recovery', 'Athletes with overuse injuries']
  },
  {
    id: 'food-poisoning',
    name: 'Food Poisoning',
    popular: false,
    category: 'Relief',
    uses: ['Dehydration', 'Nausea & Vomiting', 'Stomach Cramps', 'Electrolyte Imbalance'],
    description: "Rapid relief from food poisoning symptoms with aggressive hydration, anti-nausea medication, and electrolyte restoration.",
    price: 229,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Fast Recovery From Food-Borne Illness',
    longDescription: "Food poisoning can leave you completely debilitated — unable to keep down food or water, experiencing severe nausea, vomiting, and cramping. Our Food Poisoning IV bypasses your upset stomach entirely, delivering hydration, electrolytes, and anti-nausea medication directly into your bloodstream. Most clients start feeling significantly better within 30 minutes of starting their infusion.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Combats severe dehydration from vomiting and diarrhea' },
      { name: 'Ondansetron (Zofran)', amount: '4 mg', benefit: 'Stops nausea and vomiting fast' },
      { name: 'Famotidine', amount: '20 mg', benefit: 'Reduces stomach acid and heartburn' },
      { name: 'Magnesium', amount: '500 mg', benefit: 'Relieves stomach cramping' },
      { name: 'Vitamin B Complex', amount: 'Standard dose', benefit: 'Supports recovery and energy' },
      { name: 'Electrolyte Complex', amount: 'Custom blend', benefit: 'Replaces minerals lost from GI distress' }
    ],
    benefits: ['Immediate nausea relief', 'Rapid rehydration without oral intake', 'Stomach cramp reduction', 'Faster return to normal eating'],
    idealFor: ['Acute food poisoning', 'Traveler\'s stomach', 'Severe stomach bugs', 'Any GI distress preventing oral hydration']
  },
  {
    id: 'jet-lag',
    name: 'Jet Lag',
    popular: false,
    category: 'Specialty',
    uses: ['Fatigue & Brain Fog', 'Sleep Disruption', 'Travel Recovery', 'Dehydration'],
    description: "Combat travel fatigue with targeted hydration, B-vitamins, and immune support to reset your body after long flights.",
    price: 199,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Reset Your Body Clock Fast',
    longDescription: "Air travel is incredibly dehydrating — cabin air has humidity levels as low as 10-20%, and crossing time zones disrupts your circadian rhythm. Our Jet Lag IV is formulated to address both issues: aggressive hydration to counteract the drying effects of flight, combined with B-vitamins for energy, vitamin C for immune protection (airports are germ hotspots), and magnesium to help your muscles relax and your body reset.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Counteracts flight-induced dehydration' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Restores energy and mental alertness' },
      { name: 'Vitamin B12', amount: '1000 mcg', benefit: 'Combats fatigue and brain fog' },
      { name: 'Vitamin C', amount: '2000 mg', benefit: 'Immune protection after airport exposure' },
      { name: 'Magnesium', amount: '500 mg', benefit: 'Promotes relaxation and muscle recovery' },
      { name: 'Zinc', amount: '10 mg', benefit: 'Additional immune system support' }
    ],
    benefits: ['Rapid rehydration after flights', 'Mental clarity and focus restored', 'Immune protection', 'Faster adjustment to new time zone'],
    idealFor: ['Business travelers', 'International flights', 'Red-eye recovery', 'Frequent flyers']
  },
  {
    id: 'morning-sickness',
    name: 'Morning Sickness',
    popular: false,
    category: 'Specialty',
    uses: ['Pregnancy Nausea', 'Dehydration', 'Nutrient Replenishment', 'First Trimester Support'],
    description: "Safe, pregnancy-approved relief from morning sickness with gentle hydration and targeted anti-nausea support.",
    price: 219,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Gentle Relief for Expecting Mothers',
    longDescription: "Morning sickness affects up to 80% of pregnant women, and severe cases can lead to dangerous dehydration and nutrient depletion. Our Morning Sickness IV uses only pregnancy-safe medications and vitamins to provide relief. Vitamin B6 is clinically proven to reduce pregnancy-related nausea, and our gentle hydration formula helps you stay nourished even when you can't keep anything down. All ingredients are approved for use during pregnancy.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Gentle hydration safe for pregnancy' },
      { name: 'Vitamin B6 (Pyridoxine)', amount: '100 mg', benefit: 'Clinically proven to reduce pregnancy nausea' },
      { name: 'Ondansetron (Zofran)', amount: '4 mg', benefit: 'Safe anti-nausea medication for pregnancy' },
      { name: 'Famotidine', amount: '20 mg', benefit: 'Reduces pregnancy-related heartburn' },
      { name: 'Magnesium', amount: '500 mg', benefit: 'Supports fetal development and reduces cramping' }
    ],
    benefits: ['Pregnancy-safe nausea relief', 'Hydration when oral intake is impossible', 'Essential nutrient replenishment', 'Reduced heartburn and cramping'],
    idealFor: ['First trimester nausea', 'Hyperemesis gravidarum', 'Dehydrated expecting mothers', 'Pregnancy wellness support']
  },
  {
    id: 'weight-management',
    name: 'Weight Management',
    popular: false,
    category: 'Specialty',
    uses: ['GLP-1 Medication Support', 'Metabolism Boost', 'Nausea Relief', 'Nutritional Support'],
    description: "Support your weight loss journey with hydration, nausea relief for GLP-1 users, and metabolism-boosting nutrients.",
    price: 279,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Support Your Weight Loss Journey',
    longDescription: "Whether you're on GLP-1 medications (like Ozempic or Mounjaro) and experiencing side effects, or simply looking for metabolic support on your weight loss journey, this IV is designed for you. The treatment addresses common GLP-1 side effects like severe nausea while delivering metabolism-boosting B-vitamins, amino acids that support fat burning, and hydration that keeps your body functioning optimally during caloric restriction.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Essential hydration during caloric restriction' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Boosts metabolism and energy production' },
      { name: 'Vitamin B12', amount: '2000 mcg', benefit: 'Supports fat metabolism and prevents fatigue' },
      { name: 'Ondansetron (Zofran)', amount: '4 mg', benefit: 'Relieves GLP-1 related nausea' },
      { name: 'Famotidine', amount: '20 mg', benefit: 'Reduces heartburn from medications' },
      { name: 'L-Carnitine', amount: '1000 mg', benefit: 'Amino acid that supports fat burning' },
      { name: 'Taurine', amount: '1000 mg', benefit: 'Supports metabolic function and energy' }
    ],
    benefits: ['Relief from GLP-1 medication side effects', 'Boosted metabolism', 'Sustained energy during weight loss', 'Prevention of nutrient depletion'],
    idealFor: ['GLP-1 medication users (Ozempic, Mounjaro)', 'Active weight loss programs', 'Metabolic support', 'Anyone experiencing weight-loss related fatigue']
  },
  {
    id: 'recovery',
    name: 'Recovery',
    popular: false,
    category: 'Performance',
    uses: ['Post-Surgery', 'Post-Event Recovery', 'Physical Exhaustion', 'Mental Burnout'],
    description: "Comprehensive recovery blend to restore, replenish, and rehydrate after physical or mental strain.",
    price: 229,
    duration: '45-60 min',
    volume: '1000 mL',
    tagline: 'Restore, Replenish, Rebound',
    longDescription: "Life pushes us hard — whether it's a marathon, a big conference, a weekend festival, or surgery recovery. Our Recovery IV is a comprehensive blend designed to help your body bounce back from any type of physical or mental strain. Amino acids support muscle repair, B-vitamins restore energy, antioxidants combat oxidative stress, and aggressive hydration gets your fluid levels back to optimal.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Aggressive rehydration for faster recovery' },
      { name: 'Amino Acid Complex', amount: 'Recovery dose', benefit: 'Supports muscle repair and tissue healing' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Restores energy depleted by stress' },
      { name: 'Vitamin C', amount: '2000 mg', benefit: 'Reduces oxidative stress and supports healing' },
      { name: 'Glutathione', amount: '1000 mg', benefit: 'Master antioxidant for cellular recovery' },
      { name: 'Magnesium', amount: '1000 mg', benefit: 'Relieves muscle tension and promotes relaxation' }
    ],
    benefits: ['Accelerated physical recovery', 'Reduced muscle soreness and stiffness', 'Mental clarity after exhaustion', 'Immune support during vulnerable recovery period'],
    idealFor: ['Post-marathon or athletic event', 'Conference and travel recovery', 'Post-surgery healing support', 'Festival and event recovery']
  },
  {
    id: 'pre-game',
    name: 'Pre-Game',
    popular: false,
    category: 'Performance',
    uses: ['Event Preparation', 'Energy & Stamina', 'Hydration Optimization', 'Performance Readiness'],
    description: "Prepare your body for peak performance before a big event, competition, or night out with optimized hydration and energy.",
    price: 199,
    duration: '30-45 min',
    volume: '1000 mL',
    tagline: 'Start Strong, Stay Strong',
    longDescription: "Don't wait until you're feeling rough — get ahead of it. Our Pre-Game IV optimizes your hydration, loads you up with energy-boosting B-vitamins and amino acids, and prepares your body to perform at its best. Whether you're gearing up for a big race, a wedding weekend, or a Vegas trip, starting with a Pre-Game IV means you'll have more energy, better endurance, and a head start on hydration.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Pre-loads hydration for optimal performance' },
      { name: 'Vitamin B Complex', amount: 'High dose', benefit: 'Maximizes energy production' },
      { name: 'Vitamin B12', amount: '2000 mcg', benefit: 'Provides sustained mental and physical energy' },
      { name: 'Vitamin C', amount: '1000 mg', benefit: 'Antioxidant protection during exertion' },
      { name: 'Amino Acid Complex', amount: 'Standard dose', benefit: 'Supports stamina and endurance' }
    ],
    benefits: ['Optimized hydration before exertion', 'Sustained energy throughout your event', 'Better physical endurance', 'Prevention of next-day fatigue'],
    idealFor: ['Pre-race or competition', 'Before a big night out', 'Wedding weekend prep', 'Music festival preparation']
  },
  {
    id: 'premium-package',
    name: 'Premium Package',
    popular: false,
    category: 'Wellness',
    uses: ['Full-Spectrum Wellness', 'Maximum Recovery', 'VIP Treatment', 'Comprehensive Health'],
    description: "Our most comprehensive all-in-one IV treatment with maximum doses of vitamins, antioxidants, amino acids, and hydration.",
    price: 549,
    duration: '90-120 min',
    volume: '1000 mL',
    tagline: 'The Ultimate Wellness Experience',
    longDescription: "For those who want nothing but the best, our Premium Package is the most comprehensive single-session IV treatment we offer. This elite blend combines high-dose vitamins, the master antioxidant glutathione, amino acids for muscle support, and a full spectrum of minerals — all in one extended session. It's the equivalent of combining multiple treatments into one powerful infusion. Popular with executives, celebrities, and anyone who demands peak performance from their body.",
    ingredients: [
      { name: 'Normal Saline', amount: '1000 mL', benefit: 'Premium hydration foundation' },
      { name: 'Vitamin C', amount: '5000 mg', benefit: 'Maximum antioxidant and immune support' },
      { name: 'Glutathione', amount: '1500 mg', benefit: 'Master antioxidant and liver support' },
      { name: 'Vitamin B Complex', amount: 'Double dose', benefit: 'Maximum energy and metabolic support' },
      { name: 'Vitamin B12', amount: '2000 mcg', benefit: 'Enhanced neurological function' },
      { name: 'Magnesium', amount: '1500 mg', benefit: 'Deep relaxation and cardiovascular support' },
      { name: 'Zinc', amount: '20 mg', benefit: 'Immune defense and tissue repair' },
      { name: 'Amino Acid Complex', amount: 'Performance dose', benefit: 'Muscle repair and recovery' },
      { name: 'Taurine', amount: '1000 mg', benefit: 'Energy and metabolic optimization' },
      { name: 'NAC (N-Acetyl Cysteine)', amount: '500 mg', benefit: 'Additional antioxidant support' }
    ],
    benefits: ['The most complete IV treatment available', 'Maximum vitamin and mineral delivery', 'Full-spectrum recovery and wellness', 'Noticeable results lasting 1-2 weeks'],
    idealFor: ['VIP wellness seekers', 'Quarterly deep-health investment', 'Post-major event full recovery', 'Health optimization enthusiasts']
  },
  {
    id: 'kids-iv',
    name: 'Kids IV',
    popular: false,
    category: 'Specialty',
    uses: ['Pediatric Hydration', 'Childhood Illness', 'Sports Recovery', 'Immune Support'],
    description: "Age-appropriate IV hydration and nutrient support for children, administered by pediatric-experienced nurses.",
    price: 179,
    duration: '30-45 min',
    volume: '500 mL',
    tagline: 'Gentle Care for Little Ones',
    longDescription: "Kids get dehydrated and sick too — sometimes even faster than adults. Our Kids IV is specifically formulated with age-appropriate dosing and a smaller fluid volume, making it safe and comfortable for younger patients. Our pediatric-experienced nurses are gentle, patient, and skilled at making the experience as stress-free as possible. This treatment is available for children ages 5 and up with parental consent.",
    ingredients: [
      { name: 'Normal Saline', amount: '500 mL', benefit: 'Gentle hydration appropriate for pediatric patients' },
      { name: 'Vitamin B Complex', amount: 'Pediatric dose', benefit: 'Supports energy and immune function' },
      { name: 'Vitamin C', amount: '500 mg', benefit: 'Immune support with age-appropriate dosing' },
      { name: 'Zinc', amount: '5 mg', benefit: 'Supports growth and immune defense' },
      { name: 'Magnesium', amount: '250 mg', benefit: 'Supports hydration and muscle function' }
    ],
    benefits: ['Age-appropriate hydration', 'Gentle immune support', 'Faster recovery from childhood illness', 'Administered by pediatric-experienced nurses'],
    idealFor: ['Dehydrated children (ages 5+)', 'Kids with stomach bugs', 'Young athletes needing recovery', 'Children who can\'t keep fluids down']
  }
];

export interface MembershipPlan {
  name: string;
  price: number;
  ivsPerMonth: number;
  discount: string;
  choices: string[];
}

export const memberships = {
  classic: [
    { name: 'Basic Plan', price: 149, ivsPerMonth: 1, discount: '5% off additional IVs & add-ons', choices: ['Basic Fluids', 'Dehydration', 'Nausea Bag', 'Any bag with 1 add-on'] },
    { name: 'Basic Duo', price: 280, ivsPerMonth: 2, discount: '5% off additional IVs & add-ons', choices: ['Basic Fluids', 'Dehydration', 'Nausea Bag', 'Any bag with 1 add-on'] },
    { name: 'Plus Plan', price: 200, ivsPerMonth: 1, discount: '10% off additional IVs & add-ons', choices: ['Hangover Drip', 'Headache Drip', 'Any bag with 2 add-ons'] },
    { name: 'Plus Duo', price: 380, ivsPerMonth: 2, discount: '10% off additional IVs & add-ons', choices: ['Hangover Drip', 'Headache Drip', 'Any bag with 2 add-ons'] }
  ],
  myers: [
    { name: 'Myers Plan', price: 225, ivsPerMonth: 1, discount: '10% off additional IVs & add-ons', choices: ['Myers Cocktail', 'Detox or Immunity', 'Athletic Performance', 'Energy Boost', 'Beauty', 'Any bag with 3 add-ons'] },
    { name: 'Myers Duo', price: 425, ivsPerMonth: 2, discount: '10% off additional IVs & add-ons', choices: ['Myers Cocktail', 'Detox or Immunity', 'Athletic Performance', 'Energy Boost', 'Beauty', 'Any bag with 3 add-ons'] },
    { name: 'Mega Myers Plan', price: 299, ivsPerMonth: 1, discount: '15% off additional IVs & add-ons', choices: ['Includes 1 Mega Myers IV per month'] },
    { name: 'Mega Duo', price: 580, ivsPerMonth: 2, discount: '15% off additional IVs & add-ons', choices: ['Includes 2 Mega Myers IVs per month'] }
  ]
};

export const testimonials = [
  { id: 1, name: "Sarah J.", rating: 5, quote: "Absolutely amazing experience. The nurse was so professional and I felt instantly better after the Hangover Rescue." },
  { id: 2, name: "Michael T.", rating: 5, quote: "I get the Myers Cocktail every month. Pura Drip's membership is the best investment I've made in my long-term health." },
  { id: 3, name: "Elena R.", rating: 5, quote: "Fast, clean, and incredibly convenient. They came right to my hotel room before my big presentation." }
];
