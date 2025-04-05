function Link({ content, href }) {
  return (
    <a
      className="font-montserrat text-[20px] text-black uppercase hover:text-myGreen cursor-pointer font-bold transition-colors duration-300 ease-in-out"
      href={href}
    >
      {content}
    </a>
  );
}

function NavBar() {
  const links = [
    {
      text: "calculator",
      href: "#calculator",
    },
    {
      text: "cum functioneaza",
      href: "#how-it-works",
    },
    {
      text: "faq",
      href: "#faqs",
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center px-[24px] bg-white">
        <div className="logo">
          <a href="">
            <img
              src="BVB_Splitter_Logo.svg"
              alt="BVB Splitter Logo"
              className="w-[90px]"
            />
          </a>
        </div>
        <div className="links flex gap-[40px] justify-center items-center">
          {links.map((link, index) => (
            <Link key={index} content={link.text} href={link.href} />
          ))}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
