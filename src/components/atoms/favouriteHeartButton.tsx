import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

interface FavouriteProps {
  movieId: number;
  isFavourite: boolean;
  onAddToFavourites: (id: string, isFavourite: boolean) => Promise<void>;
}
const FavouriteHeartButton = (props: FavouriteProps) => {
  const { movieId: id, isFavourite, onAddToFavourites } = props;
  const [heartColor, setHeartColor] = useState(
    isFavourite ? "#af2b62" : "#ffffff"
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = async () => {
    if (isDisabled) return;
    setIsDisabled(true);
    try {
      setHeartColor(isFavourite ? "#ffffff" : "#af2b62");
      await onAddToFavourites(id.toString(), isFavourite);
    } catch (error) {
      // Handle the error here
    }
    setIsDisabled(false);
  };
  return (
    <div className="">
      <HeartIcon
        width={35}
        color={heartColor}
        className={isDisabled ? "" : "cursor-pointer"}
        stroke="#ffffff"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onClick={handleClick}
      />
    </div>
  );
};
export default FavouriteHeartButton;
