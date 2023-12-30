import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-5 ">
      <div>
        <Image
          className="rounded-full border-8 shadow-md border-white dark:border-slate-900"
          src='/images/profile.png'
          width={180}
          height={180}
          alt="Profile"
        />
      </div>
      <div>
        <div className="flex flex-col items-center sm:items-start gap-2">
          <h1 className="text-slate-600 dark:text-white text-3xl font-bold">
            Jeremias Arrieta
          </h1>
          <p className="text-slate-600 dark:text-white text-lg">
            I am passionate about web development.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 mt-3">
          <a href="pdf/cv.pdf" download='Cv - Jeremias Arrieta'>
            <button className="flex items-center text-sm gap-1 py-2 px-4 rounded-lg font-semibold bg-indigo-100 dark:bg-indigo-500 text-indigo-500 dark:text-indigo-100 hover:bg-opacity-80">
              <div className="">
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="dark:fill-white fill-indigo-500 stroke-none"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <circle cx="12" cy="6" r="4"></circle>{" "}
                    <path
                      d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div>Resume</div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
