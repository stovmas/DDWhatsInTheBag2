// Categories for item tagging (used for personality scoring)
export const CATEGORIES = {
  COMFORT: 'comfort',
  ADVENTUROUS: 'adventurous',
  PRACTICAL: 'practical',
  BOUGIE: 'bougie',
  SOCIAL: 'social',
  HEALTH: 'health',
};

// 5 scenarios, each with 9 item choices (pick 3)
export const scenarios = [
  {
    id: 1,
    emoji: '🏠',
    situation: "Friends are coming over in 15 minutes.",
    subtitle: "Quick — what are you ordering?",
    items: [
      { id: 'a1', name: 'Pizza Party Pack', emoji: '🍕', tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food' },
      { id: 'a2', name: 'Craft Beer 6-Pack', emoji: '🍺', tags: [CATEGORIES.SOCIAL, CATEGORIES.ADVENTUROUS], category: 'alcohol' },
      { id: 'a3', name: 'Charcuterie Board Kit', emoji: '🧀', tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'grocery' },
      { id: 'a4', name: 'Bag of Ice', emoji: '🧊', tags: [CATEGORIES.PRACTICAL], category: 'household' },
      { id: 'a5', name: 'Brownie Platter', emoji: '🍫', tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'dessert' },
      { id: 'a6', name: 'Sparkling Water Variety', emoji: '💧', tags: [CATEGORIES.HEALTH, CATEGORIES.PRACTICAL], category: 'grocery' },
      { id: 'a7', name: 'Wings & Dip Combo', emoji: '🍗', tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food' },
      { id: 'a8', name: 'Bottle of Rosé', emoji: '🍷', tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'alcohol' },
      { id: 'a9', name: 'Paper Plates & Napkins', emoji: '🍽️', tags: [CATEGORIES.PRACTICAL], category: 'household' },
    ],
  },
  {
    id: 2,
    emoji: '😴',
    situation: "It's 11 PM and you deserve a treat.",
    subtitle: "No judgment zone — what's it gonna be?",
    items: [
      { id: 'b1', name: 'Ice Cream Pint', emoji: '🍦', tags: [CATEGORIES.COMFORT], category: 'dessert' },
      { id: 'b2', name: 'Spicy Ramen Bowl', emoji: '🍜', tags: [CATEGORIES.ADVENTUROUS, CATEGORIES.COMFORT], category: 'food' },
      { id: 'b3', name: 'Face Mask & Candle', emoji: '🕯️', tags: [CATEGORIES.BOUGIE, CATEGORIES.HEALTH], category: 'household' },
      { id: 'b4', name: 'Loaded Nachos', emoji: '🧀', tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food' },
      { id: 'b5', name: 'Smoothie Bowl', emoji: '🫐', tags: [CATEGORIES.HEALTH], category: 'food' },
      { id: 'b6', name: 'Chocolate Chip Cookies', emoji: '🍪', tags: [CATEGORIES.COMFORT], category: 'dessert' },
      { id: 'b7', name: 'Fancy Cocktail Kit', emoji: '🍸', tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'alcohol' },
      { id: 'b8', name: 'Protein Bar Variety', emoji: '💪', tags: [CATEGORIES.HEALTH, CATEGORIES.PRACTICAL], category: 'grocery' },
      { id: 'b9', name: 'Sushi Deluxe Platter', emoji: '🍣', tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food' },
    ],
  },
  {
    id: 3,
    emoji: '🎬',
    situation: "Movie night for one. Just you and the couch.",
    subtitle: "Build your ultimate solo spread.",
    items: [
      { id: 'c1', name: 'Popcorn & M&Ms', emoji: '🍿', tags: [CATEGORIES.COMFORT], category: 'grocery' },
      { id: 'c2', name: 'Burrito Supreme', emoji: '🌯', tags: [CATEGORIES.COMFORT, CATEGORIES.ADVENTUROUS], category: 'food' },
      { id: 'c3', name: 'Kombucha & Chips', emoji: '🫖', tags: [CATEGORIES.HEALTH, CATEGORIES.PRACTICAL], category: 'grocery' },
      { id: 'c4', name: 'Fuzzy Blanket', emoji: '🧸', tags: [CATEGORIES.COMFORT, CATEGORIES.BOUGIE], category: 'household' },
      { id: 'c5', name: 'Mochi Ice Cream', emoji: '🍡', tags: [CATEGORIES.ADVENTUROUS, CATEGORIES.BOUGIE], category: 'dessert' },
      { id: 'c6', name: 'Fried Chicken Bucket', emoji: '🍗', tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'food' },
      { id: 'c7', name: 'Wine & Cheese Duo', emoji: '🍷', tags: [CATEGORIES.BOUGIE], category: 'alcohol' },
      { id: 'c8', name: 'Fresh Fruit Platter', emoji: '🍇', tags: [CATEGORIES.HEALTH], category: 'grocery' },
      { id: 'c9', name: 'Sliders Variety Pack', emoji: '🍔', tags: [CATEGORIES.COMFORT, CATEGORIES.ADVENTUROUS], category: 'food' },
    ],
  },
  {
    id: 4,
    emoji: '🏖️',
    situation: "Surprise day off. The whole day is yours.",
    subtitle: "What are you getting delivered first?",
    items: [
      { id: 'd1', name: 'Açaí Bowl', emoji: '🫐', tags: [CATEGORIES.HEALTH, CATEGORIES.BOUGIE], category: 'food' },
      { id: 'd2', name: 'Breakfast Burrito', emoji: '🌯', tags: [CATEGORIES.COMFORT], category: 'food' },
      { id: 'd3', name: 'Cold Brew & Pastries', emoji: '☕', tags: [CATEGORIES.BOUGIE], category: 'food' },
      { id: 'd4', name: 'Mimosa Kit', emoji: '🥂', tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'alcohol' },
      { id: 'd5', name: 'Sunscreen & Magazines', emoji: '📖', tags: [CATEGORIES.PRACTICAL, CATEGORIES.HEALTH], category: 'household' },
      { id: 'd6', name: 'BBQ Ribs Platter', emoji: '🍖', tags: [CATEGORIES.COMFORT, CATEGORIES.ADVENTUROUS], category: 'food' },
      { id: 'd7', name: 'Green Juice Cleanse', emoji: '🥬', tags: [CATEGORIES.HEALTH], category: 'grocery' },
      { id: 'd8', name: 'Pad Thai & Spring Rolls', emoji: '🥡', tags: [CATEGORIES.ADVENTUROUS], category: 'food' },
      { id: 'd9', name: 'Donuts Dozen', emoji: '🍩', tags: [CATEGORIES.COMFORT, CATEGORIES.SOCIAL], category: 'dessert' },
    ],
  },
  {
    id: 5,
    emoji: '🎉',
    situation: "You just got the best news of your life.",
    subtitle: "Time to celebrate — what's in the bag?",
    items: [
      { id: 'e1', name: 'Champagne Bottle', emoji: '🍾', tags: [CATEGORIES.BOUGIE, CATEGORIES.SOCIAL], category: 'alcohol' },
      { id: 'e2', name: 'Lobster Mac & Cheese', emoji: '🦞', tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food' },
      { id: 'e3', name: 'Sheet Cake "Congrats!"', emoji: '🎂', tags: [CATEGORIES.SOCIAL, CATEGORIES.COMFORT], category: 'dessert' },
      { id: 'e4', name: 'Tacos for Everyone', emoji: '🌮', tags: [CATEGORIES.SOCIAL, CATEGORIES.COMFORT], category: 'food' },
      { id: 'e5', name: 'Balloons & Streamers', emoji: '🎈', tags: [CATEGORIES.SOCIAL, CATEGORIES.PRACTICAL], category: 'household' },
      { id: 'e6', name: 'Wagyu Burger', emoji: '🍔', tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food' },
      { id: 'e7', name: 'Acai Margarita Mix', emoji: '🧉', tags: [CATEGORIES.ADVENTUROUS, CATEGORIES.SOCIAL], category: 'alcohol' },
      { id: 'e8', name: 'Sushi Boat for Two', emoji: '🛥️', tags: [CATEGORIES.BOUGIE, CATEGORIES.ADVENTUROUS], category: 'food' },
      { id: 'e9', name: 'Party Snack Mega Box', emoji: '📦', tags: [CATEGORIES.PRACTICAL, CATEGORIES.SOCIAL], category: 'grocery' },
    ],
  },
];

// Personality types based on dominant category
export const personalityTypes = {
  [CATEGORIES.COMFORT]: {
    title: 'The Cozy Commander',
    emoji: '🛋️',
    color: '#FF6B35',
    description: "You know what you like and you're not sorry about it. Your bag is a warm hug in delivery form. Comfort food is your love language, and honestly? Same.",
    badge: "Top 12% Comfort Orderer",
    shareText: "I'm a Cozy Commander! My DoorDash bag is basically a warm hug.",
    stats: { topItem: 'Pizza', avgOrderTime: '9:47 PM', spirit: 'Golden Retriever' },
  },
  [CATEGORIES.ADVENTUROUS]: {
    title: 'The Flavor Chaser',
    emoji: '🌶️',
    color: '#E63946',
    description: "You never order the same thing twice. Your taste buds have a passport, and they've been EVERYWHERE. If it's bold, spicy, or unexpected — it's in your bag.",
    badge: "Top 8% Adventurous Eater",
    shareText: "I'm a Flavor Chaser! My DoorDash bag has a passport.",
    stats: { topItem: 'Spicy Ramen', avgOrderTime: '7:23 PM', spirit: 'Red Fox' },
  },
  [CATEGORIES.PRACTICAL]: {
    title: 'The Strategic Snacker',
    emoji: '🧠',
    color: '#457B9D',
    description: "While everyone else panics, you've already ordered the ice, the plates, AND the napkins. You're the friend everyone needs but doesn't deserve. Respect.",
    badge: "Top 5% Most Prepared",
    shareText: "I'm a Strategic Snacker! I already ordered napkins before you asked.",
    stats: { topItem: 'Paper Plates', avgOrderTime: '3:15 PM', spirit: 'Owl' },
  },
  [CATEGORIES.BOUGIE]: {
    title: 'The Luxe Orderer',
    emoji: '✨',
    color: '#9B5DE5',
    description: "Charcuterie boards, craft cocktails, wagyu burgers — your bag has TASTE. You believe life's too short for mediocre delivery, and honestly you're absolutely right.",
    badge: "Top 3% Bougie Bag Builder",
    shareText: "I'm a Luxe Orderer! My DoorDash bag has exquisite taste.",
    stats: { topItem: 'Charcuterie', avgOrderTime: '6:30 PM', spirit: 'Persian Cat' },
  },
  [CATEGORIES.SOCIAL]: {
    title: 'The Party Starter',
    emoji: '🎊',
    color: '#FF006E',
    description: "Your bag isn't just for you — it's for the CULTURE. You're always ordering enough for the group, thinking of everyone's vibe. The group chat MVP.",
    badge: "Top 7% Social Orderer",
    shareText: "I'm a Party Starter! My DoorDash bag feeds the whole squad.",
    stats: { topItem: 'Party Pack', avgOrderTime: '8:00 PM', spirit: 'Dolphin' },
  },
  [CATEGORIES.HEALTH]: {
    title: 'The Glow Getter',
    emoji: '🥑',
    color: '#06D6A0',
    description: "Smoothie bowls, green juice, protein bars — your bag glows from the inside out. You're proof that healthy delivery exists and SLAPS. Keep shining.",
    badge: "Top 6% Wellness Warrior",
    shareText: "I'm a Glow Getter! My DoorDash bag is basically a spa day.",
    stats: { topItem: 'Açaí Bowl', avgOrderTime: '10:30 AM', spirit: 'Gazelle' },
  },
};

// Simulated "what other users picked" data for each scenario
export const communityData = [
  { scenarioId: 1, topPicks: ['Pizza Party Pack', 'Craft Beer 6-Pack', 'Wings & Dip Combo'], percent: 34 },
  { scenarioId: 2, topPicks: ['Ice Cream Pint', 'Spicy Ramen Bowl', 'Chocolate Chip Cookies'], percent: 41 },
  { scenarioId: 3, topPicks: ['Popcorn & M&Ms', 'Burrito Supreme', 'Fried Chicken Bucket'], percent: 29 },
  { scenarioId: 4, topPicks: ['Cold Brew & Pastries', 'Breakfast Burrito', 'Açaí Bowl'], percent: 37 },
  { scenarioId: 5, topPicks: ['Champagne Bottle', 'Tacos for Everyone', 'Sheet Cake "Congrats!"'], percent: 44 },
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

  return {
    primary: personalityTypes[dominant],
    secondary: personalityTypes[secondary],
    scores,
    dominant,
  };
}
