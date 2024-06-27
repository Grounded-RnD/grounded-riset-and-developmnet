export async function getData(slug: string) {
  const res = await fetch(`/api/data/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log(data);

  return data;
}
