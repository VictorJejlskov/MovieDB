import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface FavouriteProps {
  movieId: number;
  isFavourite: boolean;
  onAddToFavourites: (id: string) => void;
}
const FavouriteHeartButton = (props: FavouriteProps) => {
  const { movieId: id, isFavourite, onAddToFavourites } = props;
  const [heartColor, setHeartColor] = useState(
    isFavourite ? "#af2b62" : "#ffffff"
  );

  const handleClick = () => {
    onAddToFavourites(id.toString());
    setHeartColor(isFavourite ? "#ffffff" : "#af2b62");
  };
  return (
    <div className="">
      <HeartIcon
        width={35}
        className=""
        color={heartColor}
        stroke="#ffffff"
        onClick={handleClick}
      />
    </div>
  );
};
export default FavouriteHeartButton;
