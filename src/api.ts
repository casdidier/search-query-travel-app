export async function fetchData(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Problem fetching data');
  }
  return response.json();
}

export async function getStopList() {
  return fetchData(`https://6130d11c8066ca0017fdaa97.mockapi.io/stops`);
}

export async function getTripList() {
  return fetchData(`https://6130d11c8066ca0017fdaa97.mockapi.io/trips`);
}
