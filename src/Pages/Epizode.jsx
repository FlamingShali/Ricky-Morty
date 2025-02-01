import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const Epizode = () => {
  const [page, setPage] = useState(1);
  const episodeQuery = useQuery({
    queryKey: ["episodes"],
    queryFn: async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      const data = await response.json();
      return data;
    },
  });
  if (episodeQuery.isLoading) return <h1>Loading....</h1>;
  if (episodeQuery.isError) return <h1>Error loading data!!!</h1>;
  const { data } = episodeQuery;
  const { results } = data;
  const episodes = results
  console.log(results[0])
  return (
    <div>
      <h1>Home</h1>
      {episodes.map((ep) => (
        <p key={ep.id}>{ep.name}</p>
      ))}
    </div>
  );
};

export default Epizode;
