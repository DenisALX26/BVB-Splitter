import StepItem from "../components/StepItem";
import FirstStepIcon from "../assets/how_it_works/step_1_icon.svg";
import SecondStepIcon from "../assets/how_it_works/step_2_icon.svg";
import ThirdStepIcon from "../assets/how_it_works/step_3_icon.svg";

const steps = [
  {
    number: 1,
    title: "Preluăm datele din sursa oficială",
    description:
      "Aplicația folosește un web scraper care accesează site-ul BVB și extrage automat cele mai recente ponderi ale companiilor din indicele BET.",
    reverse: false,
  },
  {
    number: 2,
    title: "Introduci suma pe care vrei să o investești",
    description:
      "Poate fi oricare: 1.000 lei, 10.000 lei sau mai mult. Nu contează. Spune-ne cât vrei să investești și aplicația face calculele.",
    reverse: true,
  },
  {
    number: 3,
    title: "Primești alocarea exactă",
    description:
      "Vei vedea suma recomandată pentru fiecare companie, astfel încât portofoliul tău să respecte cât mai fidel structura indicelui BET.",
    reverse: false,
  },
];

function HowItWorks() {
  return (
    <>
      <section className="contaier bg-white flex flex-col gap-24 items-center justify-center px-20 pb-4 w-full" id="how-it-works">
        <h5 className="text-[25px] font-bold text-black font-montserrat">
          Cum Functionează?
        </h5>
        <div className="steps grid grid-cols-3 grid-rows-1 gap-y-18 items-center w-full">
          <img src={FirstStepIcon} alt="icon" className="justify-self-end" />
          <div className="row-span-3 flex justify-center items-center w-full h-full">
            <div className="divider bg-primary w-2 h-full rounded-full"></div>
          </div>
          <StepItem
            step={steps[0].number}
            title={steps[0].title}
            description={steps[0].description}
            reverse={steps[0].reverse}
            className="col-start-3 row-start-1 justify-self-start"
          />
          <img
            src={SecondStepIcon}
            alt="icon"
            className="col-start-3 row-start-2  justify-self-start"
          />
          <img
            src={ThirdStepIcon}
            alt="icon"
            className="col-start-1 row-start-3 justify-self-end"
          />

          <StepItem
            step={steps[1].number}
            title={steps[1].title}
            description={steps[1].description}
            reverse={steps[1].reverse}
            className="col-start-1 row-start-2 justify-self-end"
          />
          <StepItem
            step={steps[2].number}
            title={steps[2].title}
            description={steps[2].description}
            reverse={steps[2].reverse}
            className="col-start-3 row-start-3 justify-self-start"
          />
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
