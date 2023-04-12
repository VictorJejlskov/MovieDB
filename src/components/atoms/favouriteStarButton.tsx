interface FavouriteProps {
  movieId: number;
}
const FavouriteStarButton = (props: FavouriteProps) => {
  const { movieId: id } = props;
  return <div>{id}</div>;
};
export default FavouriteStarButton;
