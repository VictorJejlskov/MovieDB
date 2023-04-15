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
    <div className="pointer-event-none rating rating-half rating-lg w-[40%]">
      <input type="radio" name="rating-10" className={getClassLeft(0.25)} />
      <input type="radio" name="rating-10" className={getClassRight(0.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(1.25)} />
      <input type="radio" name="rating-10" className={getClassRight(1.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(2.25)} />
      <input type="radio" name="rating-10" className={getClassRight(2.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(3.25)} />
      <input type="radio" name="rating-10" className={getClassRight(3.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(4.25)} />
      <input type="radio" name="rating-10" className={getClassRight(4.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(5.25)} />
      <input type="radio" name="rating-10" className={getClassRight(5.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(6.25)} />
      <input type="radio" name="rating-10" className={getClassRight(6.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(7.25)} />
      <input type="radio" name="rating-10" className={getClassRight(7.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(8.25)} />
      <input type="radio" name="rating-10" className={getClassRight(8.75)} />
      <input type="radio" name="rating-10" className={getClassLeft(9.25)} />
      <input type="radio" name="rating-10" className={getClassRight(9.75)} />
    </div>
  );
};

export default MovieRatingStars;
