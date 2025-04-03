function StepItem({ step, title, description}) {
  return (
    <div className="flex flex-col gap-6 justify-center w-full">
      <span className="rounded-full bg-secondary text-[48px] w-fit py-5 px-8 text-center leading-none font-bold text-white">
        {step}
      </span>
      <div className="flex flex-col gap-2">
        <p className="text-black text-[20px] font-bold font-montserrat">{title}</p>
        <p className="text-black50 text-[16px] font-inter">{description}</p>
      </div>
    </div>
  );
}

export default StepItem;
