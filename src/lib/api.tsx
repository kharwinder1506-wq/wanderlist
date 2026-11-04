export type City = {
  id: number;
  name: string;
  country: string;
  region?: string;
  population: number;
};

export async function getCities(): Promise<City[]> {
  const response = await fetch(
    'https://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=10'
  );

  if (!response.ok) {
    throw new Error('Failed to load cities');
  }

  const body = await response.json();
  return body.data;
}