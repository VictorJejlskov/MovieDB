import { useRouter } from "next/router";

interface TrailerProps {
  movieId: number;
}
const MovieTrailerButton = (props: TrailerProps) => {
  const router = useRouter();
  const { movieId: id } = props;
  return (
    <div>
      <button
        onClick={() => {
          router.push(`/trailer/${id}`);
        }}
      >
        Trailer!
      </button>
    </div>
  );
};
export default MovieTrailerButton;
