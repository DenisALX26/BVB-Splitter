const linkList = [
  { name: "Calculator", link: "#calculator" },
  { name: "Cum Funcționează", link: "#how-it-works" },
  { name: "FAQ", link: "#faqs" },
  { name: "Github", link: "https://github.com/DenisALX26", newTab: true },
];

function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

function Footer() {
  return (
    <footer className="bg-primary px-20 py-4 w-full">
      <div className="px-20 flex flex-col gap-8 w-full">
        <div className="upper-part flex justify-between items-center">
          <div className="left-content w-[50%]">
            <p className="text-white text-center font-bold font-inter">
              BVB Splitter
            </p>
            <p className="text-white text-center font-inter">
              Aplicație pentru investitorii care vor să își aloce eficient
              portofoliul în funcție de indicele BET.
            </p>
          </div>
          <ul className="flex items-center justify-between gap-6">
            {linkList.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  className="text-white font-bold font-inter hover:underline"
                  target={link.newTab ? "_blank" : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lower-part">
          <p className="text-white text-center font-inter">
            ⚠️ Informațiile sunt orientative și nu reprezintă sfaturi
            financiare.
          </p>
          <p className="text-white text-center font-inter">
            © {getCurrentYear()} BVB Splitter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
