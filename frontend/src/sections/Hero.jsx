import ButtonArrow from "../assets/arrow_downward_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";

function Hero() {
  return (
    <>
      <section className="container px-[80px] pb-4 flex flex-col gap-[56px] justify-center items-center max-w-[1440px] bg-white">
        <div className="container px-[80px] pb-4 flex flex-col gap-[56px] justify-center items-center w-full bg-white">
          <h1 className="text-black text-[61px] font-bold text-center font-montserrat">
            Portofoliul tău, optimizat după indicele BET
          </h1>
          <h3 className="text-[40px] font-light text-center font-montserrat">
            Calculează în câteva secunde cât ar trebui să investești în fiecare
            companie din indicele BET, în funcție de ponderile oficiale.
          </h3>
          <button
            onClick={() => {
              const section = document.getElementById("calculator");
              section.scrollIntoView({ behavior: "smooth" });
            }}
            className="py-4 px-8 cursor-pointer bg-gradient-to-r from-primary to-myGreen text-white rounded-full hover:from-hover-blue hover:to-hover-blue transition-colors duration-300 ease-in-out flex gap-2 shadow-xl"
          >
            <span className="uppercase text-[25px] font-montserrat font-bold">
              Calculează
            </span>
            <img src={ButtonArrow} alt="arrow icon" className="w-8" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Hero;
