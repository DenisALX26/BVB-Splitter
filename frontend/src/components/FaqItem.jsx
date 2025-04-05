import PlusIcon from "../assets/faqs/plus_icon.svg";
import MinusIcon from "../assets/faqs/minus_icon.svg";

import { useState, useRef, useEffect } from "react";

function Faq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showGap, setShowGap] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  useEffect(() => {
    let timer;
    if (isOpen) {
      setHeight(`${contentRef.current.scrollHeight}px`);
      timer = setTimeout(() => {
        setShowGap(true);
      });
    } else {
      setHeight("0px");
      timer = setTimeout(() => {
        setShowGap(false);
      }, 475);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  return (
    <div
      className={`bg-white ${
        showGap ? "py-4" : "pt-4"
      } flex items-start justify-center gap-6 w-full flex-col border-b-[1px] border-black25`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-start cursor-pointer w-fit px-4 gap-6"
      >
        <img
          src={isOpen ? MinusIcon : PlusIcon}
          alt="toggle icon"
          className={`${isOpen ? "m-1" : "m-0"}`}
        />
        <p className="font-bold text-[16px] font-montserrat">{question}</p>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="accordion-answer transition-all duration-500 ease-in-out w-full overflow-hidden pl-36 pr-6 gap-4 flex items-start justify-center"
      >
        <div className="line w-2 self-stretch rounded-full bg-myGreen"></div>
        <p className="text-[13px] font-inter text-black75">{answer}</p>
      </div>
    </div>
  );
}

export default Faq;
