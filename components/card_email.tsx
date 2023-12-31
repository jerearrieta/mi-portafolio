import ButtonEmail from "./button-email";

const icons = [
  {
    array: [
      {
        name: "Send email",
        icon: "icons_email/send.svg",
      },
      {
        name: "Copy email",
        icon: "icons_email/copy.svg",
      },
    ],
  },
];

export default function CardEmail() {
  return (
    <section className="sm:mx-0 mx-5">
      <div className="flex gap-3">
        <div className="rounded-xl bg-indigo-100 dark:bg-gray-700 p-2 w-full">
          <p className="text-slate-600 dark:text-gray-300 pl-2">jerearrieta2254@gmail.com</p>
        </div>
        <div className="flex gap-3 ">
          {icons.map((icon, index) => (
            <ButtonEmail key={index} array={icon.array} />
          ))}
        </div>
      </div>
    </section>
  );
}
