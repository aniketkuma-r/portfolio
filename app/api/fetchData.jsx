import "server-only";

export default async function fetchData(routename) {
  const endpoint = `${process.env.STRAPI_URL}/api/${routename}`;
  const res = await fetch(endpoint, { next: { revalidate: 3600 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
// parallel data fetching
export async function handleParallelDataFetching(props) {
  const requestArray = props.map((item) => fetchData(item));

  return Promise.all(requestArray);
}
