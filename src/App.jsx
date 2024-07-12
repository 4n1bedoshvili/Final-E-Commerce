import { useState } from "react";
import Data from "./data";
import "./App.css";
import minus from "./images/icon-minus.svg";
import plus from "./images/icon-plus.svg";
import next from "./images/icon-next.svg";
import previous from "./images/icon-previous.svg";
import Header from "./components/Header";
import Lightbox from "./components/Lightbox";
import cartIcon from "./images/icon-cart.svg";

function App() {
  const [products] = useState(Data);
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [slide, setSlide] = useState(1);
  const [showLightbox, setShowLightbox] = useState(false);
  const { mainImage } = products[value];

  const nextScroll = () => {
    if (slide !== products.length) {
      setSlide(slide + 1);
    } else if (slide === products.length) {
      setSlide(1);
    }
  };
  const previousScroll = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else if (slide === 1) {
      setSlide(products.length);
    }
  };

  const handleMinus = () => {
    setAmount(amount - 1);
    if (amount <= 0) setAmount(0);
  };

  return (
    <>
      <Header />
      {showLightbox && (
        <Lightbox
          products={products}
          slide0={slide}
          nextSlide={nextScroll}
          previousSlide={previousScroll}
          setShowLightbox={setShowLightbox}
        />
      )}
      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10 lg:place-items-center ">
        <article>
          <div className="lg:hidden">
            {products.map((item, index) => (
              <div
                key={item.id}
                className={slide === index + 1 ? "relative" : "hidden"}
              >
                <img
                  src={item.mainImage}
                  alt=""
                  className="w-full lg:rounded-2xl lg:w-85 cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                />
                <ul className="lg:hidden">
                  <li>
                    <button onClick={previousScroll}>
                      <img
                        className="bg-white rounded-full px-5 py-4 shadow absolute left-4 top-1/2"
                        src={previous}
                        alt=""
                      />
                    </button>
                  </li>
                  <li>
                    <button onClick={nextScroll}>
                      <img
                        className="bg-white rounded-full px-5 py-4 shadow absolute right-4 top-1/2"
                        src={next}
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <img
              src={mainImage}
              alt=""
              className="w-full lg:rounded-2xl lg:w-85 cursor-pointer"
              onClick={() => setShowLightbox(true)}
            />
          </div>

          <ul className="hidden lg:flex items-center justify-start gap-5 flex-wrap mt-5">
            {products.map((item, index) => (
              <li
                key={index}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-2 border-orange-400 opacity-80"
                } border-2 rounded-2xl overflow-hidden cursos-pointer `}
              >
                <img className="w-20 rounded-xl" src={item.thumbnail} alt="" />
              </li>
            ))}
          </ul>
        </article>
        <article className="px-8 pb-10">
          <h2 className="bg-slate-100 py-1 px-2 text-orange-400 uppercase tracking-wide text-smaller font-bold inline-block rounded shadow mb-10">
            Sneakers Company
          </h2>
          <h1 className="text-slate-900 mg-100 font-bold text-3xl lg:text-4xl">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-slate-600 mg-10 leading-relaxed ">
            {" "}
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-wrap items-center justify-between lg:flex-col lg:items-start lg:gap-2">
            <ul className="flex items-center gap-5">
              <li className="text-slate-900 font-bold text-2xl">$125.00</li>
              <li className="bg-orange-100 py-1 px-2 text-orange-400 tracking-wide text-smaller font-bold inline-block rounded shadow">
                50%
              </li>
            </ul>
            <p className="text-slate-600 text-sm">
              <s>$250.00</s>
            </p>
          </div>
          <div className="mt-10 lg:flex items-center justify-between gap-2">
            <ul className="flex items-center justify-between bg-slate-100 py-2 px-4 rounded shadow lg:flex-1">
              <li onClick={handleMinus} className="cursor-pointer">
                <img src={minus} alt="" />
              </li>
              <li>{amount}</li>
              <li
                onClick={() => setAmount(amount + 1)}
                className="cursor-pointer"
              >
                <img src={plus} alt="" />
              </li>
            </ul>
            <div className="lg:flex-1">
              <button className="flex justify-center w-full text-center items-center gap-4 bg-orange-500 py-2 px-4 text-white font-bold rounded-lg shadow mt-5 lg:mt-0 hover:bg-orange-600">
                <img src={cartIcon} alt="" /> Add to cart
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
