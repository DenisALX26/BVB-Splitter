import NavBar from "../components/NavBar";

function Header() {
  return (
    <>
      <header className="px-6 py-4 w-[100%] sticky top-0 max-w-[1440px] z-10 bg-white">
        <NavBar />
      </header>
    </>
  );
}

export default Header;
