function Link({ content }) {
  return (
    <p className="font-montserrat text-[20px] text-black uppercase hover:text-myGreen cursor-pointer font-bold transition-colors duration-300 ease-in-out">
      {content}
    </p>
  );
}

function NavBar() {
  const linksText = ["calculator", "cum functioneaza", "faq"];

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
          {linksText.map((link, index) => (
            <Link key={index} content={link} />
          ))}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
