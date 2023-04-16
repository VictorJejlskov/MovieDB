const MovieCardPlaceholder = () => {
  return (
    <div className="grid grid-cols-3 rounded-lg bg-base-800">
      <div className="col-span-1">
        <div className="relative mx-2">
          <div className="">
            <img
              src={"./placeholderposter.jpg"}
              className="w-full -translate-y-3 rounded-t-xl border-4 border-white"
              alt="Poster Image"
            />
          </div>
          <div className="-mb-1 -translate-y-3"></div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="relative grid h-full grid-rows-6 overflow-hidden pt-4">
          <div className="row-span-6 ">
            <p className="text-bold line-clamp-1 text-center text-xl font-extrabold">
              Lorem Ipsum
            </p>
            <hr className="bg-base-850 my-3 h-px border-t-0  bg-gradient-to-r from-base-900 via-base-500 to-base-900 opacity-100" />
            <p className="line-clamp-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          <div className="">
            <div className="absolute bottom-1 flex place-items-center">
              <div className="">
                <div className="pl-2 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardPlaceholder;
