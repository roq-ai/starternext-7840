const mapping: Record<string, string> = {
  categories: 'category',
  organizations: 'organization',
  outfits: 'outfit',
  'outfit-products': 'outfit_product',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
