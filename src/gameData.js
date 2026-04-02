// Categories for item tagging (used for personality scoring)
export const CATEGORIES = {
  COMFORT: 'comfort',
  ADVENTUROUS: 'adventurous',
  PRACTICAL: 'practical',
  BOUGIE: 'bougie',
  SOCIAL: 'social',
  HEALTH: 'health',
};

// Store names for realism
const STORES = {
  PIZZA_HUT: 'Pizza Hut',
  CHEESECAKE: 'The Cheesecake Factory',
  TRADER_JOES: 'Trader Joe\'s',
  WALGREENS: 'Walgreens',
  SAFEWAY: 'Safeway',
  BOBA_GUYS: 'Boba Guys',
  PANDA: 'Panda Express',
  CHIPOTLE: 'Chipotle',
  POPEYES: 'Popeyes',
  WHOLE_FOODS: 'Whole Foods',
  TARGET: 'Target',
  CVS: 'CVS',
  JAMBA: 'Jamba Juice',
  TACO_BELL: 'Taco Bell',
  BEVMO: 'BevMo!',
  KRISPY: 'Krispy Kreme',
  NOBU: 'Nobu',
  SHAKE_SHACK: 'Shake Shack',
  SWEETGREEN: 'Sweetgreen',
  PRESSED: 'Pressed Juicery',
  BATH_BODY: 'Bath & Body Works',
  SPROUTS: 'Sprouts',
  TOTAL_WINE: 'Total Wine',
  SUSHI_SPOT: 'Sugarfish',
  BASKIN: 'Baskin-Robbins',
  CRUMBL: 'Crumbl Cookies',
  STARBUCKS: 'Starbucks',
  MCCORMICK: 'McCormick & Schmick\'s',
  PARTY_CITY: 'Party City',
};

// 5 scenarios — each has 12 items + a $40-$50 budget
// Items have individual prices so you must strategize
export const scenarios = [
  {
    id: 1,
    emoji: '🏠',
    situation: "Friends are coming over in 15 minutes.",
    subtitle: "Quick — what are you ordering?",
    budget: 45,
    items: [
      { id: 'a1', name: 'Large Pepperoni Pizza', emoji: '🍕', price: 16.99, store: STORES.PIZZA_HUT, tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food', rating: 4.6, time: '25 min' },
      { id: 'a2', name: 'IPA 6-Pack', emoji: '🍺', price: 13.99, store: STORES.BEVMO, tags: [CATEGORIES.SOCIAL, CATEGORIES.ADVENTUROUS], category: 'alcohol', rating: 4.8, time: '20 min' },
      { id: 'a3', name: 'Charcuterie Board', emoji: '🧀', price: 24.99, store: STORES.WHOLE_FOODS, tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'grocery', rating: 4.9, time: '30 min' },
      { id: 'a4', name: 'Bag of Ice', emoji: '🧊', price: 3.49, store: STORES.CVS, tags: [CATEGORIES.PRACTICAL], category: 'household', rating: 4.2, time: '15 min' },
      { id: 'a5', name: 'Brownie 6-Pack', emoji: '🍫', price: 8.99, store: STORES.WHOLE_FOODS, tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'dessert', rating: 4.5, time: '25 min' },
      { id: 'a6', name: 'LaCroix 12-Pack', emoji: '💧', price: 6.99, store: STORES.TARGET, tags: [CATEGORIES.HEALTH, CATEGORIES.PRACTICAL], category: 'grocery', rating: 4.3, time: '20 min' },
      { id: 'a7', name: '24pc Wing Platter', emoji: '🍗', price: 19.99, store: STORES.POPEYES, tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food', rating: 4.7, time: '30 min' },
      { id: 'a8', name: 'Bottle of Rosé', emoji: '🍷', price: 18.99, store: STORES.TOTAL_WINE, tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'alcohol', rating: 4.6, time: '20 min' },
      { id: 'a9', name: 'Paper Plates (40ct)', emoji: '🍽️', price: 4.99, store: STORES.TARGET, tags: [CATEGORIES.PRACTICAL], category: 'household', rating: 4.0, time: '20 min' },
      { id: 'a10', name: 'Guac & Chips', emoji: '🥑', price: 9.49, store: STORES.CHIPOTLE, tags: [CATEGORIES.HEALTH, CATEGORIES.SOCIAL], category: 'food', rating: 4.5, time: '20 min' },
      { id: 'a11', name: 'Napkins & Cups', emoji: '🧻', price: 5.99, store: STORES.TARGET, tags: [CATEGORIES.PRACTICAL], category: 'household', rating: 3.9, time: '20 min' },
      { id: 'a12', name: 'Hummus Trio', emoji: '🫘', price: 8.49, store: STORES.TRADER_JOES, tags: [CATEGORIES.HEALTH, CATEGORIES.ADVENTUROUS], category: 'grocery', rating: 4.4, time: '25 min' },
    ],
  },
  {
    id: 2,
    emoji: '😴',
    situation: "It's 11 PM and you deserve a treat.",
    subtitle: "No judgment zone — what's it gonna be?",
    budget: 40,
    items: [
      { id: 'b1', name: 'Pint of Cookie Dough', emoji: '🍦', price: 7.99, store: STORES.BASKIN, tags: [CATEGORIES.COMFORT], category: 'dessert', rating: 4.7, time: '20 min' },
      { id: 'b2', name: 'Tonkotsu Ramen', emoji: '🍜', price: 15.99, store: 'Ichiran', tags: [CATEGORIES.ADVENTUROUS, CATEGORIES.COMFORT], category: 'food', rating: 4.8, time: '35 min' },
      { id: 'b3', name: 'Lavender Candle', emoji: '🕯️', price: 14.99, store: STORES.BATH_BODY, tags: [CATEGORIES.BOUGIE, CATEGORIES.HEALTH], category: 'household', rating: 4.6, time: '25 min' },
      { id: 'b4', name: 'Loaded Nachos', emoji: '🧀', price: 12.99, store: STORES.TACO_BELL, tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food', rating: 4.3, time: '20 min' },
      { id: 'b5', name: 'Açaí Smoothie Bowl', emoji: '🫐', price: 11.99, store: STORES.JAMBA, tags: [CATEGORIES.HEALTH], category: 'food', rating: 4.5, time: '25 min' },
      { id: 'b6', name: 'Warm Cookies (4pc)', emoji: '🍪', price: 13.99, store: STORES.CRUMBL, tags: [CATEGORIES.COMFORT], category: 'dessert', rating: 4.9, time: '25 min' },
      { id: 'b7', name: 'Mezcal Margarita Kit', emoji: '🍸', price: 22.99, store: STORES.TOTAL_WINE, tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'alcohol', rating: 4.7, time: '25 min' },
      { id: 'b8', name: 'Protein Bars (4pk)', emoji: '💪', price: 6.99, store: STORES.CVS, tags: [CATEGORIES.HEALTH, CATEGORIES.PRACTICAL], category: 'grocery', rating: 4.1, time: '15 min' },
      { id: 'b9', name: 'Sushi Deluxe (12pc)', emoji: '🍣', price: 24.99, store: STORES.SUSHI_SPOT, tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.9, time: '35 min' },
      { id: 'b10', name: 'Chamomile Tea Box', emoji: '🫖', price: 5.49, store: STORES.TRADER_JOES, tags: [CATEGORIES.HEALTH, CATEGORIES.PRACTICAL], category: 'grocery', rating: 4.3, time: '20 min' },
      { id: 'b11', name: 'Cinnamon Rolls (6pc)', emoji: '🧁', price: 9.99, store: STORES.WHOLE_FOODS, tags: [CATEGORIES.COMFORT, CATEGORIES.BOUGIE], category: 'dessert', rating: 4.6, time: '25 min' },
      { id: 'b12', name: 'Face Mask 3-Pack', emoji: '✨', price: 8.99, store: STORES.TARGET, tags: [CATEGORIES.BOUGIE, CATEGORIES.HEALTH], category: 'household', rating: 4.4, time: '20 min' },
    ],
  },
  {
    id: 3,
    emoji: '🎬',
    situation: "Movie night for one. Just you and the couch.",
    subtitle: "Build your ultimate solo spread.",
    budget: 42,
    items: [
      { id: 'c1', name: 'Butter Popcorn Bag', emoji: '🍿', price: 4.99, store: STORES.TARGET, tags: [CATEGORIES.COMFORT], category: 'grocery', rating: 4.4, time: '20 min' },
      { id: 'c2', name: 'Chicken Burrito', emoji: '🌯', price: 12.49, store: STORES.CHIPOTLE, tags: [CATEGORIES.COMFORT, CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.6, time: '25 min' },
      { id: 'c3', name: 'Kombucha 4-Pack', emoji: '🫧', price: 9.99, store: STORES.SPROUTS, tags: [CATEGORIES.HEALTH, CATEGORIES.ADVENTUROUS], category: 'grocery', rating: 4.2, time: '25 min' },
      { id: 'c4', name: 'Fuzzy Throw Blanket', emoji: '🧸', price: 19.99, store: STORES.TARGET, tags: [CATEGORIES.COMFORT, CATEGORIES.BOUGIE], category: 'household', rating: 4.8, time: '30 min' },
      { id: 'c5', name: 'Mochi Ice Cream Box', emoji: '🍡', price: 8.99, store: STORES.TRADER_JOES, tags: [CATEGORIES.ADVENTUROUS, CATEGORIES.BOUGIE], category: 'dessert', rating: 4.7, time: '25 min' },
      { id: 'c6', name: '8pc Chicken Tenders', emoji: '🍗', price: 14.99, store: STORES.POPEYES, tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food', rating: 4.7, time: '25 min' },
      { id: 'c7', name: 'Pinot Noir Bottle', emoji: '🍷', price: 16.99, store: STORES.TOTAL_WINE, tags: [CATEGORIES.BOUGIE], category: 'alcohol', rating: 4.5, time: '20 min' },
      { id: 'c8', name: 'Fruit & Cheese Box', emoji: '🍇', price: 11.99, store: STORES.WHOLE_FOODS, tags: [CATEGORIES.HEALTH, CATEGORIES.BOUGIE], category: 'grocery', rating: 4.6, time: '25 min' },
      { id: 'c9', name: 'Smashburger Combo', emoji: '🍔', price: 13.99, store: STORES.SHAKE_SHACK, tags: [CATEGORIES.COMFORT, CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.8, time: '30 min' },
      { id: 'c10', name: 'Gummy Bears Bag', emoji: '🐻', price: 3.49, store: STORES.CVS, tags: [CATEGORIES.COMFORT, CATEGORIES.PRACTICAL], category: 'grocery', rating: 4.1, time: '15 min' },
      { id: 'c11', name: 'Hard Seltzer 4-Pack', emoji: '🥤', price: 10.99, store: STORES.BEVMO, tags: [CATEGORIES.SOCIAL, CATEGORIES.PRACTICAL], category: 'alcohol', rating: 4.3, time: '20 min' },
      { id: 'c12', name: 'Brownie Sundae Kit', emoji: '🍫', price: 7.49, store: STORES.BASKIN, tags: [CATEGORIES.COMFORT, CATEGORIES.BOUGIE], category: 'dessert', rating: 4.6, time: '20 min' },
    ],
  },
  {
    id: 4,
    emoji: '🏖️',
    situation: "Surprise day off. The whole day is yours.",
    subtitle: "What are you getting delivered first?",
    budget: 48,
    items: [
      { id: 'd1', name: 'Açaí Power Bowl', emoji: '🫐', price: 13.99, store: STORES.JAMBA, tags: [CATEGORIES.HEALTH, CATEGORIES.BOUGIE], category: 'food', rating: 4.7, time: '25 min' },
      { id: 'd2', name: 'Breakfast Burrito', emoji: '🌯', price: 10.99, store: STORES.CHIPOTLE, tags: [CATEGORIES.COMFORT], category: 'food', rating: 4.5, time: '20 min' },
      { id: 'd3', name: 'Cold Brew Venti', emoji: '☕', price: 5.99, store: STORES.STARBUCKS, tags: [CATEGORIES.BOUGIE, CATEGORIES.PRACTICAL], category: 'food', rating: 4.4, time: '15 min' },
      { id: 'd4', name: 'Prosecco Bottle', emoji: '🥂', price: 15.99, store: STORES.TOTAL_WINE, tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'alcohol', rating: 4.6, time: '20 min' },
      { id: 'd5', name: 'SPF 50 Sunscreen', emoji: '🧴', price: 11.99, store: STORES.CVS, tags: [CATEGORIES.PRACTICAL, CATEGORIES.HEALTH], category: 'household', rating: 4.3, time: '15 min' },
      { id: 'd6', name: 'BBQ Half Rack', emoji: '🍖', price: 21.99, store: 'Baby Blues BBQ', tags: [CATEGORIES.COMFORT, CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.8, time: '35 min' },
      { id: 'd7', name: 'Green Juice (3-Pack)', emoji: '🥬', price: 18.99, store: STORES.PRESSED, tags: [CATEGORIES.HEALTH], category: 'grocery', rating: 4.5, time: '25 min' },
      { id: 'd8', name: 'Pad Thai', emoji: '🥡', price: 14.49, store: 'Thai Basil', tags: [CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.6, time: '30 min' },
      { id: 'd9', name: 'Glazed Dozen', emoji: '🍩', price: 16.99, store: STORES.KRISPY, tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'dessert', rating: 4.8, time: '20 min' },
      { id: 'd10', name: 'Kale Caesar Salad', emoji: '🥗', price: 12.49, store: STORES.SWEETGREEN, tags: [CATEGORIES.HEALTH, CATEGORIES.BOUGIE], category: 'food', rating: 4.4, time: '25 min' },
      { id: 'd11', name: 'Aloe Vera Drink 6pk', emoji: '🧃', price: 7.99, store: STORES.TRADER_JOES, tags: [CATEGORIES.HEALTH, CATEGORIES.ADVENTUROUS], category: 'grocery', rating: 4.2, time: '25 min' },
      { id: 'd12', name: 'Croissant Box (6pc)', emoji: '🥐', price: 12.99, store: STORES.WHOLE_FOODS, tags: [CATEGORIES.BOUGIE, CATEGORIES.COMFORT], category: 'dessert', rating: 4.7, time: '25 min' },
    ],
  },
  {
    id: 5,
    emoji: '🎉',
    situation: "You just got the best news of your life.",
    subtitle: "Time to celebrate — what's in the bag?",
    budget: 55,
    items: [
      { id: 'e1', name: 'Moët Champagne', emoji: '🍾', price: 29.99, store: STORES.TOTAL_WINE, tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'alcohol', rating: 4.9, time: '20 min' },
      { id: 'e2', name: 'Lobster Mac & Cheese', emoji: '🦞', price: 22.99, store: STORES.MCCORMICK, tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.8, time: '35 min' },
      { id: 'e3', name: '"Congrats!" Cake', emoji: '🎂', price: 18.99, store: STORES.WHOLE_FOODS, tags: [CATEGORIES.SOCIAL, CATEGORIES.COMFORT], category: 'dessert', rating: 4.6, time: '25 min' },
      { id: 'e4', name: 'Taco Party Pack (12)', emoji: '🌮', price: 15.99, store: STORES.TACO_BELL, tags: [CATEGORIES.SOCIAL, CATEGORIES.COMFORT], category: 'food', rating: 4.5, time: '20 min' },
      { id: 'e5', name: 'Balloons (12pk)', emoji: '🎈', price: 8.99, store: STORES.PARTY_CITY, tags: [CATEGORIES.SOCIAL, CATEGORIES.PRACTICAL], category: 'household', rating: 4.2, time: '25 min' },
      { id: 'e6', name: 'Wagyu Smash Burger', emoji: '🍔', price: 17.99, store: STORES.SHAKE_SHACK, tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.9, time: '30 min' },
      { id: 'e7', name: 'Spicy Margarita Kit', emoji: '🍹', price: 19.99, store: STORES.BEVMO, tags: [CATEGORIES.ADVENTUROUS, CATEGORIES.SOCIAL], category: 'alcohol', rating: 4.7, time: '20 min' },
      { id: 'e8', name: 'Sushi Boat (24pc)', emoji: '🍣', price: 34.99, store: STORES.SUSHI_SPOT, tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food', rating: 4.9, time: '40 min' },
      { id: 'e9', name: 'Party Mix Mega Box', emoji: '📦', price: 11.99, store: STORES.TRADER_JOES, tags: [CATEGORIES.PRACTICAL, CATEGORIES.SOCIAL], category: 'grocery', rating: 4.3, time: '25 min' },
      { id: 'e10', name: 'Streamers & Banners', emoji: '🎊', price: 6.99, store: STORES.PARTY_CITY, tags: [CATEGORIES.SOCIAL, CATEGORIES.PRACTICAL], category: 'household', rating: 4.1, time: '25 min' },
      { id: 'e11', name: 'Tiramisu Slice', emoji: '🍰', price: 9.99, store: STORES.CHEESECAKE, tags: [CATEGORIES.BOUGIE, CATEGORIES.COMFORT], category: 'dessert', rating: 4.8, time: '30 min' },
      { id: 'e12', name: 'Truffle Fries', emoji: '🍟', price: 8.49, store: STORES.SHAKE_SHACK, tags: [CATEGORIES.ADVENTUROUS, CATEGORIES.COMFORT], category: 'food', rating: 4.6, time: '25 min' },
    ],
  },
];

// Personality types based on dominant category
export const personalityTypes = {
  [CATEGORIES.COMFORT]: {
    title: 'The Cozy Commander',
    emoji: '🛋️',
    color: '#FF6B35',
    gradient: 'linear-gradient(135deg, #FF6B35, #FF8F5E)',
    description: "You know what you like and you're not sorry about it. Your bag is a warm hug in delivery form. Comfort food is your love language, and honestly? Same.",
    badge: "Top 12% Comfort Orderer",
    shareText: "I'm a Cozy Commander! My DoorDash bag is basically a warm hug.",
    stats: { topItem: 'Pizza', avgOrderTime: '9:47 PM', spirit: 'Golden Retriever' },
  },
  [CATEGORIES.ADVENTUROUS]: {
    title: 'The Flavor Chaser',
    emoji: '🌶️',
    color: '#E63946',
    gradient: 'linear-gradient(135deg, #E63946, #FF6B6B)',
    description: "You never order the same thing twice. Your taste buds have a passport, and they've been EVERYWHERE. If it's bold, spicy, or unexpected — it's in your bag.",
    badge: "Top 8% Adventurous Eater",
    shareText: "I'm a Flavor Chaser! My DoorDash bag has a passport.",
    stats: { topItem: 'Spicy Ramen', avgOrderTime: '7:23 PM', spirit: 'Red Fox' },
  },
  [CATEGORIES.PRACTICAL]: {
    title: 'The Strategic Snacker',
    emoji: '🧠',
    color: '#457B9D',
    gradient: 'linear-gradient(135deg, #457B9D, #6BA3C7)',
    description: "While everyone else panics, you've already ordered the ice, the plates, AND the napkins. You're the friend everyone needs but doesn't deserve. Respect.",
    badge: "Top 5% Most Prepared",
    shareText: "I'm a Strategic Snacker! I already ordered napkins before you asked.",
    stats: { topItem: 'Paper Plates', avgOrderTime: '3:15 PM', spirit: 'Owl' },
  },
  [CATEGORIES.BOUGIE]: {
    title: 'The Luxe Orderer',
    emoji: '✨',
    color: '#9B5DE5',
    gradient: 'linear-gradient(135deg, #9B5DE5, #C084FC)',
    description: "Charcuterie boards, craft cocktails, wagyu burgers — your bag has TASTE. You believe life's too short for mediocre delivery, and honestly you're absolutely right.",
    badge: "Top 3% Bougie Bag Builder",
    shareText: "I'm a Luxe Orderer! My DoorDash bag has exquisite taste.",
    stats: { topItem: 'Charcuterie', avgOrderTime: '6:30 PM', spirit: 'Persian Cat' },
  },
  [CATEGORIES.SOCIAL]: {
    title: 'The Party Starter',
    emoji: '🎊',
    color: '#FF006E',
    gradient: 'linear-gradient(135deg, #FF006E, #FF5C9E)',
    description: "Your bag isn't just for you — it's for the CULTURE. You're always ordering enough for the group, thinking of everyone's vibe. The group chat MVP.",
    badge: "Top 7% Social Orderer",
    shareText: "I'm a Party Starter! My DoorDash bag feeds the whole squad.",
    stats: { topItem: 'Party Pack', avgOrderTime: '8:00 PM', spirit: 'Dolphin' },
  },
  [CATEGORIES.HEALTH]: {
    title: 'The Glow Getter',
    emoji: '🥑',
    color: '#06D6A0',
    gradient: 'linear-gradient(135deg, #06D6A0, #40E0C0)',
    description: "Smoothie bowls, green juice, protein bars — your bag glows from the inside out. You're proof that healthy delivery exists and SLAPS. Keep shining.",
    badge: "Top 6% Wellness Warrior",
    shareText: "I'm a Glow Getter! My DoorDash bag is basically a spa day.",
    stats: { topItem: 'Açaí Bowl', avgOrderTime: '10:30 AM', spirit: 'Gazelle' },
  },
};

// Simulated "what other users picked" data for each scenario
export const communityData = [
  { scenarioId: 1, topPicks: ['Large Pepperoni Pizza', 'IPA 6-Pack', '24pc Wing Platter'], avgSpent: 38.20, percent: 34 },
  { scenarioId: 2, topPicks: ['Pint of Cookie Dough', 'Tonkotsu Ramen', 'Warm Cookies (4pc)'], avgSpent: 33.50, percent: 41 },
  { scenarioId: 3, topPicks: ['Butter Popcorn Bag', 'Chicken Burrito', '8pc Chicken Tenders'], avgSpent: 36.80, percent: 29 },
  { scenarioId: 4, topPicks: ['Cold Brew Venti', 'Breakfast Burrito', 'Açaí Power Bowl'], avgSpent: 40.10, percent: 37 },
  { scenarioId: 5, topPicks: ['Moët Champagne', 'Taco Party Pack (12)', '"Congrats!" Cake'], avgSpent: 48.30, percent: 44 },
];

// Calculate personality from all selected items
export function calculatePersonality(allSelections) {
  const scores = {};
  Object.values(CATEGORIES).forEach(cat => { scores[cat] = 0; });

  allSelections.forEach(item => {
    item.tags.forEach(tag => {
      scores[tag] = (scores[tag] || 0) + 1;
    });
  });

  // Find dominant category
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const dominant = sorted[0][0];
  const secondary = sorted[1][0];

  // Calculate total spent
  const totalSpent = allSelections.reduce((sum, item) => sum + item.price, 0);

  return {
    primary: personalityTypes[dominant],
    secondary: personalityTypes[secondary],
    scores,
    dominant,
    totalSpent,
    itemCount: allSelections.length,
  };
}
