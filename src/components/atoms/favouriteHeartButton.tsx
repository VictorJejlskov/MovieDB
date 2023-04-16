import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

interface FavouriteProps {
  movieId: number;
  isFavourite: boolean;
  onAddToFavourites: (id: string, isFavourite: boolean) => void;
}
const FavouriteHeartButton = (props: FavouriteProps) => {
  const { movieId: id, isFavourite, onAddToFavourites } = props;
  const [heartColor, setHeartColor] = useState(
    isFavourite ? "#af2b62" : "#ffffff"
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (isDisabled) return;
    setIsDisabled(true);
    try {
      onAddToFavourites(id.toString(), isFavourite);
      setHeartColor(isFavourite ? "#ffffff" : "#af2b62");
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => setIsDisabled(false), 5000); // enable after 1 second
  };
  return (
    <div className="">
      <HeartIcon
        width={35}
        color={heartColor}
        className={isDisabled ? "" : "cursor-pointer"}
        stroke="#ffffff"
        onClick={handleClick}
      />
    </div>
  );
};
export default FavouriteHeartButton;
