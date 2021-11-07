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

export async function getTripListBySearchQuery(searchQuery: string) {
  return fetchData(
    `https://6130d11c8066ca0017fdaa97.mockapi.io/trips?departureStop=${searchQuery}`,
  );
}

export async function bookTripByID(tripId: number) {
  const url = `https://6130d11c8066ca0017fdaa97.mockapi.io/book/${tripId}`;
  const response = await fetch(url, {
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  return response.json();
}
