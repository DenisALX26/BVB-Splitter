import Faq from "../components/FaqItem";

const faqs = [
  {
    question: "Ce este BVB Splitter?",
    answer:
      "BVB Splitter este o aplicație web care te ajută să investești eficient în companiile din indicele BET, replicând cât mai fidel structura acestuia. Introduci suma dorită, iar noi îți spunem cât să investești în fiecare companie.",
  },
  {
    question: "Ce este indicele BET?",
    answer:
      "BET este principalul indice al Bursei de Valori București. Acesta reflectă evoluția celor mai lichide 20 de companii listate și este folosit ca reper pentru investitorii care vor un portofoliu echilibrat, reprezentativ pentru piața românească.",
  },
  {
    question: "Cât de des sunt actualizate datele?",
    answer:
      "Aplicația este gândită să poată actualiza datele oricând rulează scraper-ul. În versiunea curentă, datele se pot actualiza manual, dar în viitor va exista o actualizare automată periodică.",
  },
  {
    question: "Este nevoie de cont sau autentificare?",
    answer:
      "Nu. Aplicația este complet deschisă și nu necesită cont. Poți folosi calculatorul oricând, gratuit și anonim.",
  },
  {
    question: "Pot folosi aplicația dacă am deja acțiuni cumpărate?",
    answer:
      "Da, dar calculatorul este conceput pentru a calcula distribuția inițială. Dacă ai deja un portofoliu, poți folosi rezultatele ca referință pentru ajustări, dar nu înlocuiește un instrument de rebalansare.",
  },
  {
    question: "Ce reprezintă „ponderea” unei companii?",
    answer:
      "Ponderea arată cât la sută din indicele BET este ocupat de o companie. Cu cât ponderea e mai mare, cu atât compania are o influență mai mare asupra performanței indicelui și, implicit, asupra portofoliului tău.",
  },
  {
    question: "Pot exporta rezultatele?",
    answer:
      "În versiunea actuală nu, dar este o funcționalitate planificată. Pe viitor vei putea salva rezultatele în format JSON sau CSV.",
  },
];

function Faqs() {
  return (
    <section className="container flex flex-col items-center justify-center gap-24 bg-white w-full max-w-[1440px]" id="faqs">
      <div className="title flex flex-col items-center justify-center gap-2 w-[25%]">
        <h6 className="text-[20px] font-bold font-montserrat text-black">
          FAQs
        </h6>
        <div className="line h-1 bg-hover-blue self-start w-[50%]"></div>
      </div>
      <div className="questions w-[50%] flex flex-col items-center justify-center gap-8">
        {faqs.map((question, index) => (
          <Faq
            key={index}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default Faqs;
