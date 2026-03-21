export interface TreatmentIngredient {
  name: string;
  amount: string;
  benefit: string;
}

export interface Treatment {
  id: string;
  name: string;
  popular: boolean;
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
