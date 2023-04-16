const MovieCardPlaceholder = () => {
  return (
    <div className="grid grid-cols-3 rounded-lg bg-base-800 ">
      <div className="col-span-1">
        <div className="relative mx-2 h-full">
          <div className="flex aspect-[2/3] -translate-y-3 items-center justify-center rounded border border-gray-200 bg-gray-500 shadow">
            <svg
              className="w-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="-mb-1 -translate-y-3">
            <div className="">
              <button className="w-full rounded-b-lg bg-base-600 text-accent">
                ...
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-2">
        <div className="relative grid h-full grid-rows-6 overflow-hidden pt-4">
          <div className="row-span-6 ">
            <div className="m-auto mb-4 h-[8%] w-[70%] rounded-full bg-gray-500 text-center"></div>
            <hr className="bg-base-850 my-3 h-px border-t-0  bg-gradient-to-r from-base-900 via-base-500 to-base-900 opacity-100" />
            <div className="mb-5 mt-8 h-4 rounded-full bg-gray-500"></div>
            <div className="mb-5 h-4 rounded-full bg-gray-500"></div>
            <div className="mb-5 h-4 rounded-full bg-gray-500"></div>
            <div className="mb-5 h-4 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCardPlaceholder;
