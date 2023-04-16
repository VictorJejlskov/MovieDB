import { HeartIcon } from "@heroicons/react/24/solid";

interface FavouriteProps {
  movieId: number;
  isFavourite: boolean;
  onAddToFavourites: (id: string) => void;
}
const FavouriteHeartButton = (props: FavouriteProps) => {
  const handleClick = () => {
    onAddToFavourites(id.toString());
  };
  const { movieId: id, isFavourite, onAddToFavourites } = props;
  return (
    <div className="">
      <HeartIcon
        width={25}
        className=""
        color={isFavourite ? "#af2b62" : "#ffffff"}
        stroke="#ffffff"
        onClick={handleClick}
      />
    </div>
  );
};
export default FavouriteHeartButton;
