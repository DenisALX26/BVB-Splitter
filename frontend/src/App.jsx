import "./App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Calculator from "./sections/Calculator";
import HowItWorks from "./sections/HowItWorks";
import Faqs from "./sections/Faqs";
import Footer from "./sections/Footer";
import Table from "./sections/Table";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [amount, setAmount] = useState(""),
    [distribution, setDistribution] = useState(null);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        toastClassName="rounded-xl font-montserrat text-[16px] font-semibold shadow-lg"
      />
      <div className="flex flex-col min-h-screen items-center gap-[96px] bg-white w-full justify-center mx-auto">
        <Header />
        <main className="px-[80px] w-100% flex flex-col gap-[96px] items-center">
          <Hero />
          <Calculator
            amount={amount}
            setAmount={setAmount}
            setDistribution={setDistribution}
          />
          {distribution && <Table distribution={distribution} />}
          <HowItWorks />
          <Faqs />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
