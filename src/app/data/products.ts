export interface Product {
  id: string;
  name: string;
  nameJapanese: string;
  price: number;
  description: string;
  image: string;
  ingredients: string[];
  story: string;
  allergens: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Matcha Supreme',
    nameJapanese: '抹茶',
    price: 8.99,
    description: 'Premium ceremonial grade matcha from Uji, Kyoto. Smooth, creamy, and perfectly balanced.',
    image: 'https://images.unsplash.com/photo-1695191499096-8a7ffe8d5b8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGljZSUyMGNyZWFtfGVufDF8fHx8MTc4MTI0MTU4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Ceremonial matcha powder', 'Fresh cream', 'Sugar', 'Milk'],
    story: 'Sourced from the historic tea gardens of Uji, our matcha is stone-ground and mixed within 24 hours to preserve its vibrant color and rich umami flavor.',
    allergens: ['Dairy']
  },
  {
    id: '2',
    name: 'Sakura Blossom',
    nameJapanese: '桜',
    price: 9.49,
    description: 'Delicate cherry blossom petals infused in a light, floral ice cream. A taste of spring.',
    image: 'https://images.unsplash.com/photo-1765123952142-1e7c895f3e83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWt1cmElMjBjaGVycnklMjBibG9zc29tJTIwZGVzc2VydHxlbnwxfHx8fDE3ODEyNDE1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Pickled sakura petals', 'Fresh cream', 'Sugar', 'Sakura extract'],
    story: 'Inspired by hanami season, we carefully preserve cherry blossoms at their peak bloom to capture the ephemeral beauty and subtle sweetness of spring in Japan.',
    allergens: ['Dairy']
  },
  {
    id: '3',
    name: 'Black Sesame',
    nameJapanese: '黒ごま',
    price: 8.49,
    description: 'Rich, nutty black sesame with a deep, toasted flavor. A Japanese classic.',
    image: 'https://images.unsplash.com/photo-1616863858589-9e04f2728c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGJsYWNrJTIwc2VzYW1lJTIwaWNlJTIwY3JlYW18ZW58MXx8fHwxNzgxMjQxNTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Roasted black sesame seeds', 'Fresh cream', 'Organic cane sugar', 'Sea salt'],
    story: 'We stone-grind premium black sesame seeds in-house daily, releasing their natural oils and creating an intensely aromatic paste that forms the heart of this beloved flavor.',
    allergens: ['Dairy', 'Sesame']
  },
  {
    id: '4',
    name: 'Yuzu Citrus',
    nameJapanese: '柚子',
    price: 9.99,
    description: 'Bright and refreshing Japanese citrus with a perfect balance of tart and sweet.',
    image: 'https://images.unsplash.com/photo-1515754164677-ec9796621bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5dXp1JTIwY2l0cnVzJTIwZGVzc2VydHxlbnwxfHx8fDE3ODEyNDE1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Fresh yuzu juice', 'Yuzu zest', 'Fresh cream', 'Honey'],
    story: 'Yuzu is harvested from small farms in Kochi Prefecture during winter when its aromatic oils are most concentrated, creating a vibrant, sunshine-bright ice cream.',
    allergens: ['Dairy']
  },
  {
    id: '5',
    name: 'Red Bean Azuki',
    nameJapanese: '小豆',
    price: 7.99,
    description: 'Sweet azuki red beans in a creamy base. Traditional comfort in every scoop.',
    image: 'https://images.unsplash.com/photo-1692263579137-31c58dd2b4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBiZWFuJTIwYXp1a2klMjBkZXNzZXJ0fGVufDF8fHx8MTc4MTI0MTU4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Hokkaido azuki beans', 'Fresh cream', 'Organic sugar', 'Mochi pieces'],
    story: 'Using azuki beans from Hokkaido, we simmer them with care to achieve the perfect texture - tender yet intact - honoring the centuries-old tradition of Japanese sweets.',
    allergens: ['Dairy']
  },
  {
    id: '6',
    name: 'Hojicha Roasted Tea',
    nameJapanese: 'ほうじ茶',
    price: 8.79,
    description: 'Smoky, caramelized roasted green tea. Sophisticated and comforting.',
    image: 'https://images.unsplash.com/photo-1552014631-125e3a6b9594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2ppY2hhJTIwcm9hc3RlZCUyMHRlYXxlbnwxfHx8fDE3ODEyNDE1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Roasted hojicha leaves', 'Fresh cream', 'Brown sugar', 'Vanilla extract'],
    story: 'We roast premium green tea leaves at high heat to develop deep caramel notes, then steep them in fresh cream for hours to create this aromatic, coffee-like flavor.',
    allergens: ['Dairy']
  },
  {
    id: '7',
    name: 'Purple Sweet Potato',
    nameJapanese: '紫芋',
    price: 8.29,
    description: 'Vibrant purple ube with natural sweetness and earthy undertones.',
    image: 'https://images.unsplash.com/photo-1584699006710-3ad3b82fce7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1YmUlMjBwdXJwbGUlMjBzd2VldCUyMHBvdGF0b3xlbnwxfHx8fDE3ODEyNDE1ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Purple sweet potato', 'Coconut cream', 'Organic sugar', 'Sea salt'],
    story: 'Our purple sweet potatoes are slow-roasted to concentrate their natural sugars, then blended into a velvety puree that gives this ice cream its stunning color and rich taste.',
    allergens: ['Coconut']
  },
  {
    id: '8',
    name: 'Mochi Vanilla',
    nameJapanese: 'もちバニラ',
    price: 9.29,
    description: 'Creamy vanilla ice cream with chewy mochi pieces. The perfect fusion.',
    image: 'https://images.unsplash.com/photo-1706350091276-ba994c35cd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoaSUyMGljZSUyMGNyZWFtJTIwamFwYW5lc2V8ZW58MXx8fHwxNzgxMjQxNTkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ingredients: ['Madagascar vanilla bean', 'Fresh cream', 'Mochi (rice cake)', 'Sugar'],
    story: 'We fold in handmade mochi pieces that remain perfectly chewy even when frozen, creating a delightful textural contrast with our silky vanilla base.',
    allergens: ['Dairy']
  }
];
