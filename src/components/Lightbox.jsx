import close from "../images/icon-close.svg"
import next from "../images/icon-next.svg";
import previous from "../images/icon-previous.svg";

function Lightbox({products, slide0, nextSlide, previousSlide, setShowLightbox}){
    return (
        <article className=" box-border p-10 bg-black bg-opacity-75 fixed z-50 top-0 left-0 right-0 bottom-0">
          <button onClick={() => setShowLightbox(false)}>
          <img src={close} alt="" className=" w-7 absolute top-10 right-10 shadow"/>
          </button>
          <div className="flex items-center justify-center h-screen box-border">
            {products.map((item, index) => (
                <div
                key={index}
                className={`${slide0 === index + 1 ? "relative" : "hidden"} flex justify-center items-center`}
                >
                <img
                  src={item.mainImage}
                  alt=""
                  className=" rounded-2xl max-w-60"
                />
                <ul className="">
                  <li>
                    <button onClick={previousSlide}>
                      <img
                        className="bg-white rounded-full px-5 py-4 shadow absolute left-4 top-1/2"
                        src={previous}
                        alt=""
                      />
                    </button>
                  </li>
                  <li>
                    <button onClick={nextSlide}>
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
        </article>
    );
  }


  
export default Lightbox