import CasualButton from "../components/CasualButton";
import Header from "../components/Header";
import { useEffect } from "react";

const Successful = () => {
  useEffect(() => {
    document.title = "Webinar Spot Secured";
  }, []);
  return (
    <>
      <div>
        <div className="bg-gray-200 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
          {/* Section one */}
          <div className="container bg-gradient-to-b from-colour3 via-gray-900 to-colour3 rounded-3xl py-4 border-4 border-white md:px-8 text-center">
            <Header
              styling="md:hidden max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
              logoStyle="/img/eandgtutorial_logo.png"
              link="/success"
            />
            <div className="p-4">
              <div className="order-last md:order-first ">
                <div>
                  <div className="">
                    <div className="min-h-fit bookcover w-full">
                      <Header
                        styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
                        logoStyle="/img/eandgtutorial_logo.png"
                        link="/success"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="md:p-6 text-white">
                  <p className="text-5xl font-black pb-4 md:py-4 overflow-hidden">
                    Congratulations You&apos;ve Secured Your Spot
                  </p>

                  <div className="text-2xl font-normal py-4 md:px-36">
                    <p className="py-4">
                      In addition to this free webinar, I also share helpful
                      IELTS tips via email. So in 5 minutes check your email to
                      know more about me and start getting these IELTS tips
                      right inside your inbox.
                    </p>
                    <p className="py-4">
                      Just before you go and to make sure you don&apos;t miss
                      this webinar. I will recommend you join my Whatsapp Channel where the date and time of this webinar will be shared alongside other helpful tips.
                    </p>
                    <p className="py-4">
                      Click the &quot; Join the Whatsapp Channel&quot; button
                      below.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pb-8">
                <CasualButton
                  textWord="Click Here to Join the Whatsapp Channel"
                  textColor="colour3"
                  buttonColor="white"
                  link="https://whatsapp.com/channel/0029Vb0t8Id65yD4HIaWmu2i"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of Section One */}
      </div>
    </>
  );
};

export default Successful;
