import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Calculator from "./sections/Calculator";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center gap-[96px]">
        <Header />
        <main className="px-[80px] w-100% flex flex-col gap-[96px] items-center">
          <Hero />
          <Calculator />
        </main>
      </div>
    </>
  );
}

export default App;
