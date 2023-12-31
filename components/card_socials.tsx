import Image from "next/image";

interface CardSocialProps {
  icons: Array<Socials>;
  name: string;
}

interface Socials {
  icon: string;
  name: string;
  url: string;
}

const CardSocials: React.FC<CardSocialProps> = ({ icons }) => {
  return (
    <>
      {icons.map((icon, i ) => (
        <div key={i} className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-4 w-5/12 sm:w-3/12 hover:border-gray-300 dark:hover:border-gray-500 hover:border-3 transition-all sm:mx-0 mx-5">
          <a href={icon.url} target="_blank">
            <div className="flex justify-center items-center gap-2 sm:gap-5 sm:font-bold">
              <Image alt="social-icon" src={icon.icon} width={35} height={35}  />
              <p className="text-slate-600 dark:text-white text-lg">{icon.name}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default CardSocials;
