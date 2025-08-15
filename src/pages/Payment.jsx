import Header from "../components/Header";

const Payment = () => {
  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section one */}
        <div className="container bg-gradient-to-b from-colour3 via-gray-900 to-colour3 rounded-3xl py-4 border-4 border-white md:px-8">
          <Header
            styling="md:hidden max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
            logoStyle="/img/eandgtutorial_logo.png"
            link="/pp"
          />

          <div>
            <div className="min-h-fit bookcover w-full">
              <Header
                styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
                logoStyle="/img/eandgtutorial_logo.png"
                link="/pp"
              />
            </div>

            <p className="text-3xl md:text-4xl font-black pb-4 md:pb-12 overflow-hidden text-center text-white mx-10">
              To get the video course, pay the sum of{" "}
              <span className="text-red-400">GHc 500</span> to the Momo account
              below.
            </p>

            <div className="p-6 text-white text-center justify-center items-center">
              <div className="lg:px-28">
                <div className="container rounded-3xl md:px-8">
                  <div className="p-4 gap-4 bg-gray-300 rounded-2xl">
                    {/* <div className="md:px-4">
                      <div className="flex justify-center items-center">
                        <img
                          src="/imgs/testimonial/img13.png"
                          alt="E and G Tutorial Cover"
                        />
                      </div>
                    </div> */}

                    <div>
                      <div className="p-6 text-colour3 rounded-2xl text-center">
                        <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-black">
                          MTN Mobile Money: 0245171554
                        </p>
                        <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-black">
                          Name: Emmanuel Udeaku Ibiam
                        </p>
                        
                        <p className="text-lg overflow-hidden leading-relaxed pb-3 font-semibold">
                        Once payment is made, send PROOF OF PAYMENT, NAME and CORRECT EMAIL ADDRESS to <span className="text-red-500 px-2 text-bold text-xl">ghana@eandgtutorial.com <br/>OR<br/>WhatsApp +234 816 321 9024</span>

                                                </p>
                                                <hr className="border-2 border-colour1" />
                        <p className="text-lg overflow-hidden leading-relaxed pb-3 font-semibold">
                          <br />For Instant access, 
                          click the “Payment” button below.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-8">
                  <div className="p-1">
                    <a href="https://selar.co/30oh41?currency=GHS">
                      <button
                        type="submit"
                        className={
                          "bg-white text-colour3 p-4 hover:text-colour1 hover:bg-gray-300 text-lg font-semibold rounded-md"
                        }
                      >
                        Click here to make payment and gain instant access
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
