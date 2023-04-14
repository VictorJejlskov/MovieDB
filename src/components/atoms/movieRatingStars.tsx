interface RatingInterface {
  rating: number;
}
const MovieRatingStars = (props: RatingInterface) => {
  const { rating: rating } = props;
  const getClassLeft = (val: number) => {
    if (rating >= val) return "bg-warning mask mask-half-1 mask-star-2";
    return "bg-gray-400 mask mask-half-1 mask-star-2";
  };
  const getClassRight = (val: number) => {
    if (rating >= val) return "bg-warning mask mask-half-2 mask-star-2";
    return "bg-gray-400 mask mask-half-2 mask-star-2";
  };

  return (
    <div className="pointer-event-none rating rating-half rating-lg">
      <input type="radio" name="rating-10" className={getClassLeft(0.5)} />
      <input type="radio" name="rating-10" className={getClassRight(1)} />
      <input type="radio" name="rating-10" className={getClassLeft(1.5)} />
      <input type="radio" name="rating-10" className={getClassRight(2)} />
      <input type="radio" name="rating-10" className={getClassLeft(2.5)} />
      <input type="radio" name="rating-10" className={getClassRight(3)} />
      <input type="radio" name="rating-10" className={getClassLeft(3.5)} />
      <input type="radio" name="rating-10" className={getClassRight(4)} />
      <input type="radio" name="rating-10" className={getClassLeft(4.5)} />
      <input type="radio" name="rating-10" className={getClassRight(5)} />
      <input type="radio" name="rating-10" className={getClassLeft(5.5)} />
      <input type="radio" name="rating-10" className={getClassRight(6)} />
      <input type="radio" name="rating-10" className={getClassLeft(6.5)} />
      <input type="radio" name="rating-10" className={getClassRight(7)} />
      <input type="radio" name="rating-10" className={getClassLeft(7.5)} />
      <input type="radio" name="rating-10" className={getClassRight(8)} />
      <input type="radio" name="rating-10" className={getClassLeft(8.5)} />
      <input type="radio" name="rating-10" className={getClassRight(9)} />
      <input type="radio" name="rating-10" className={getClassLeft(9.5)} />
      <input type="radio" name="rating-10" className={getClassRight(10)} />
    </div>
  );
};

export default MovieRatingStars;
