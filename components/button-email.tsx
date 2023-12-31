import { useState } from "react";
import Image from "next/image";

interface IconsSvg {
  array: Array<Icons>;
}

interface Icons {
  icon: string;
  name: string;
}

const ButtonEmail: React.FC<IconsSvg> = ({ array }) => {
  const [toolTipVisible, setToolTipVisible] = useState<string | null>(null);
  const [emailCopied, setEmailCopied] = useState<boolean>(false);
  const emailAddress = 'jerearrieta2254@gmail.com';

  const handleCopyClick = (email: string) => {
    navigator.clipboard.writeText(email).then(() => {
      setToolTipVisible(null);
      setEmailCopied(true);
      setTimeout(() => {
        setToolTipVisible(null);
        setEmailCopied(false);
      }, 1500);
    })
  }

  const handleRedirectClick = () => {
    const emailLink = `mailto:${emailAddress}?subject=&body=`;
    window.open(emailLink, '_blank');
  };
  
  return (
    <>
      {array.map((icon) => (
        <button
          key={icon.name}
          className="rounded-xl bg-indigo-500 dark:bg-indigo-500 w-12 sm:w-16 flex items-center justify-center"
          onMouseEnter={() => {
            if(emailCopied === true) setToolTipVisible(null)
            else setToolTipVisible(icon.name)
          }
          } 
          onMouseLeave={() => setToolTipVisible(null)}
          onClick={() => {
            if(icon.name === 'Copy email') handleCopyClick('jerearrieta2254@gmail.com')
            else handleRedirectClick()
          }
          }
        >
          <Image 
            src={icon.icon} 
            width={30} 
            height={30} 
            alt="Icon-email" 
            />
          {toolTipVisible === icon.name && (
            <div className="absolute transform bg-indigo-100 text-indigo-500 dark:bg-white dark:text-black p-1 text-sm rounded mb-20">
              <span className="">{icon.name}</span>
            </div>
          )}
          {icon.name === 'Copy email' && emailCopied && (
             <div className="absolute transform bg-white text-black p-1 text-sm rounded mb-20">
             <span className="">Copied!</span>
           </div>
          )}
        </button>
      ))}
    </>
  );
};

export default ButtonEmail;
