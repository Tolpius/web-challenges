import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>
        {data.firstName} {data.lastName}
      </h1>
      <p>Twitter: {data.twitter}</p>
      <p>Location Hash: {data.geohash}</p>
      <p>Age: {data.age}</p>
      <p>Profession: {data.profession}</p>
      <p>Company: {data.company}</p>
      <p>Address: {data.address}</p>
    </div>
  );
}
