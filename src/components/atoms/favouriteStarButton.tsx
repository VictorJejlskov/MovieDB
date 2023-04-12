import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconBold } from "@heroicons/react/24/solid";

interface FavouriteProps {
  movieId: number;
}
const FavouriteStarButton = (props: FavouriteProps) => {
  const { movieId: id } = props;
  return (
    <div>
      <div>
        <StarIcon width={50} />
        <StarIconBold width={50} />
      </div>
    </div>
  );
};
export default FavouriteStarButton;
