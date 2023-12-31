export default function Email() {
  return (
    <section className="w-full">
      <header className="font-bold text-2xl text-indigo-500 dark:text-white flex items-center gap-3 mt-10 mb-7 sm:mx-0 mx-5">
        <h2>
          Email
        </h2>
        <div>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width='30'
            height='30'
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="dark:stroke-white stroke-indigo-500"
              ></path>{" "}
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke-width="2"
                stroke-linecap="round"
                className="dark:stroke-white stroke-indigo-500"
              ></rect>{" "}
            </g>
          </svg>
        </div>
      </header>
    </section>
  );
}
