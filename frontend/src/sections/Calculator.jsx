import QueryIcon from "../assets/calculator_section_icon.svg";

function Calculator() {
  return (
    <>
      <section
        className="container flex flex-col gap-8 justify-center items-center px-[80px] pb-4 max-w-[1440px] bg-white"
        id="calculator"
      >
        <img src={QueryIcon} alt="query stats icon" />
        <h2 className="font-bold text-[49px] text-black uppercase font-montserrat">
          CALCULATOR
        </h2>
        <h4 className="text-[31px] font-bold text-center font-montserrat w-[95%]">
          Introdu suma pe care vrei să o investești și primește distribuția
          exactă pentru fiecare companie din indicele BET. Calculele sunt făcute
          automat, pe baza celor mai recente date oficiale de pe site-ul BVB.
        </h4>
        <input
          type="number"
          name=""
          id="calculator_input"
          placeholder="Min: 1000 RON"
          className="w-[35%] border-b-1 no-arrows focus:outline-none font-montserrat font-bold text-[25px] text-black75"
        />
        <div className="bg-gradient-to-r from-secondary to-primary rounded-full p-[1px] hover:from-myGreen hover:to-myGreen transition-colors duration-300 ease-in-out">
          <button className="px-8 py-4 rounded-full cursor-pointer font-montserrat font-bold text-[25px] text-third bg-white hover:bg-myGreen transition-colors duration-300 ease-in-out hover:text-white shadow-xl">
            Calculează Distribuția
          </button>
        </div>
      </section>
    </>
  );
}

export default Calculator;
