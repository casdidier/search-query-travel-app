export async function getStopList() {
  const response = await fetch(`https://6130d11c8066ca0017fdaa97.mockapi.io/stops`);
  if (!response.ok) {
    throw new Error('Problem fetching data');
  }
  const res = await response.json();
  return res;
}
