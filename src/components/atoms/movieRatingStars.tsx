interface RatingInterface {
  rating: number;
}
const MovieRatingStars = (props: RatingInterface) => {
  const { rating: rating } = props;
  const getClassLeft = (val: number) => {
    if (rating >= val)
      return "bg-warning mask mask-half-1 mask-star-2 cursor-default";
    return "bg-neutral-focus mask mask-half-1 mask-star-2 cursor-default";
  };
  const getClassRight = (val: number) => {
    if (rating >= val)
      return "bg-warning mask mask-half-2 mask-star-2 cursor-default";
    return "bg-neutral-focus mask mask-half-2 mask-star-2 cursor-default";
  };

  return (
    <div className="rating rating-half rating-lg w-[40%]">
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(0.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(0.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(1.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(1.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(2.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(2.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(3.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(3.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(4.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(4.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(5.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(5.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(6.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(6.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(7.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(7.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(8.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(8.75)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassLeft(9.25)}
        disabled={true}
      />
      <input
        type="radio"
        name="rating-10"
        className={getClassRight(9.75)}
        disabled={true}
      />
    </div>
  );
};

export default MovieRatingStars;
