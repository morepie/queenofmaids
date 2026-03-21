export interface Treatment {
  id: string;
  name: string;
  popular: boolean;
  uses: string[];
  description: string;
}

export const treatments: Treatment[] = [
  { id: 'just-fluids', name: 'Just Fluids', popular: false, uses: ['Dehydration', 'Hangover Recovery', 'Heat Exhaustion', 'Post-Workout Recovery'], description: "Simple, effective hydration to restore your body's natural fluid balance. Perfect for quick recovery without added vitamins." },
  { id: 'dehydration', name: 'Dehydration', popular: true, uses: ['Dehydration', 'Heat Exhaustion', 'Post-Workout Recovery', 'Travel Fatigue'], description: "Rapidly replenish fluids and essential electrolytes to bounce back fast from travel, heat, or exertion." },
  { id: 'nausea-rescue', name: 'Nausea Rescue', popular: false, uses: ['Food Poisoning', 'Morning Sickness', 'Motion Sickness', 'Stomach Flu'], description: "Calm your stomach and rehydrate your body when you can't keep liquids down. Includes targeted anti-nausea medication." },
  { id: 'hangover-rescue', name: 'Hangover Rescue', popular: true, uses: ['Dehydration', 'Fatigue & Brain Fog', 'Hangover Recovery', 'Nausea & Headaches'], description: "The ultimate recovery blend to eliminate headaches, nausea, and dehydration after a long night out." },
  { id: 'headache-rescue', name: 'Headache Rescue', popular: false, uses: ['Chronic Migraines', 'Dehydration-Related Headaches', 'Stress Headaches', 'Tension Headaches'], description: "Targeted, fast-acting relief for severe headaches and migraines to get you back to your day pain-free." },
  { id: 'myers-cocktail', name: 'Myers Cocktail', popular: true, uses: ['Chronic Fatigue', 'Immune Support', 'Migraine Relief', 'Post-Workout Recovery'], description: "The gold standard of IV therapy. A comprehensive blend of essential vitamins and minerals for overall systemic wellness." },
  { id: 'athletic-performance', name: 'Athletic Performance', popular: false, uses: ['Boosting Endurance', 'Muscle Recovery', 'Pre-Workout Hydration', 'Reducing Cramps & Soreness'], description: "Optimize your physical performance, reduce muscle fatigue, and significantly accelerate your recovery time." },
  { id: 'beauty', name: 'Beauty', popular: false, uses: ['Anti-Aging Benefits', 'Detox & Liver Support', 'Hair & Nail Health', 'Skin Hydration & Glow'], description: "Nourish your body from the inside out with a powerful blend that promotes a radiant, youthful glow." },
  { id: 'energy-boost', name: 'Energy Boost', popular: false, uses: ['Fatigue & Brain Fog', 'Low Energy Levels', 'Midday Slumps', 'Stress & Burnout'], description: "Recharge your batteries and clear brain fog with essential B-vitamins designed for sustained energy." },
  { id: 'flu-rescue', name: 'Flu Rescue', popular: true, uses: ['Dehydration', 'Fever & Body Aches', 'Flu Symptoms', 'Nausea & Headaches'], description: "Fight off illness faster and alleviate symptoms with high-dose vitamin C, zinc, and premium hydration." },
  { id: 'detox', name: 'Detox', popular: false, uses: ['Boosting Immune Function', 'Detox & Liver Support', 'Hydration & Energy', 'Reducing Inflammation'], description: "Flush out built-up toxins and deeply support your liver function with powerful systemic antioxidants." },
  { id: 'immunity', name: 'Immunity', popular: false, uses: ['Cold & Flu Prevention', 'Immune Support', 'Post-Illness Recovery', 'Travel Wellness'], description: "Fortify your immune system before upcoming travel or during cold and flu season to stay healthy." },
  { id: 'mega-myers', name: 'Mega Myers Cocktail', popular: false, uses: ['Anti-Aging Benefits', 'Chronic Fatigue', 'Immune Defense', 'Overall Wellness'], description: "An amplified version of the classic Myers formulation, delivering maximum nutrient density for profound health benefits." },
  { id: 'nad', name: 'NAD+', popular: false, uses: ['Athletic Performance & Recovery', 'Brain Function', 'Cellular Repair', 'Chronic Fatigue'], description: "The ultimate anti-aging coenzyme therapy to repair cells, boost cognitive clarity, and restore youthful energy." }
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
