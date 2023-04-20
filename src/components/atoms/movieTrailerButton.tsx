import { useRouter } from "next/router";

interface TrailerProps {
  movieId: number;
}
const MovieTrailerButton = (props: TrailerProps) => {
  const router = useRouter();
  const { movieId: id } = props;
  return (
    <div className="">
      <button
        onClick={() => {
          void router.push(`/trailer/${id}`);
        }}
        className="w-full rounded-b-lg bg-accent-focus stroke-1 text-accent-content hover:bg-accent"
      >
        Trailer
      </button>
    </div>
  );
};
export default MovieTrailerButton;
