interface MovieImageProps {
  path: string | null;
}

const MovieImage = (props: MovieImageProps) => {
  const posterBasePath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2";
  const { path } = props;
  return (
    <div className="">
      <img
        src={posterBasePath + path}
        className="rounded-xl border-4 border-white"
      />
    </div>
  );
};

export default MovieImage;
