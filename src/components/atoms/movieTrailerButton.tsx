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
          router.push(`/trailer/${id}`);
        }}
        className="w-full rounded-b-lg bg-base-600 text-accent"
      >
        Trailer
      </button>
    </div>
  );
};
export default MovieTrailerButton;
