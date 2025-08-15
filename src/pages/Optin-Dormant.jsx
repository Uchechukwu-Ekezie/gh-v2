import Header from "../components/Header";
import NextSectionButton from "../components/NextSectionButton";
// import OptinForm from "../components/OptinForm";
import Testimonials from "../components/Testimonials";
import { OptinTestimonial_1 } from "../constants";
import { useEffect } from "react";

const Optin = () => {
  useEffect(() => {
    document.title = "IELTS cheat code webinar registration";
  }, []);
  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section one */}
        <div className="container bg-gradient-to-b from-colour3 via-gray-900 to-colour3 rounded-3xl py-4 border-4 border-white md:px-8">
          <Header
            styling="md:hidden max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
            logoStyle="/imgs/eandgtutorial_logo.png"
            link="/"
          />
          {/* <div className="grid md:grid-cols-2 p-4">
            <div className="order-last md:order-first ">
              <div>
                <div className="">
                  <div className="min-h-fit bookcover w-full">
                    <Header
                      styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
                      logoStyle="/imgs/eandgtutorial_logo.png"
                      link="/"
                    />
                    <img
                      src="/imgs/eandgtutorial_book.png"
                      alt="E and G Tutorial Book Cover"
                      className="shadow-2xl h-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-6 text-white">
                <p className="text-5xl font-black pb-4 md:py-4 overflow-hidden">
                  Smash a Band 8 in IELTS in One Sitting
                </p>
                <p className="text-5xl font-black pb-4 md:py-4 overflow-hidden">
                  Free Training Reveals: How to smash a band 8 in IELTS without
                  stress by practicing or just an hour per day
                </p>
                <p className="text-xl font-normal py-4">
                  How to smash a Band 8 in IELTS in One Sitting and Relocate to
                  the Country of Your Choice FAST Without Wasting Hundreds of
                  Thousands on Several Failed Attempts.
                </p>
                <p className="text-lg font-normal py-4">
                  This training is FREE but registration is compulsory!
                </p>
                <OptinForm buttonColor="white" textColor="colour3" />
              </div>
            </div>
          </div> */}
          <div>
            <div className="min-h-fit bookcover w-full">
              <Header
                styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
                logoStyle="/imgs/eandgtutorial_logo.png"
                link="/"
              />
            </div>

            <div className="p-6 text-white text-center justify-center items-center">
              <div className="lg:px-28">
                {/* <p className="text-3xl md:text-4xl font-black pb-4 md:pb-12 overflow-hidden">
                  IELTS cheat code webinar registration
                </p> */}
                <p className="text-3xl md:text-4xl font-black pb-4 md:pb-12 overflow-hidden">
                  Free Training Reveals: How to smash a band 8 in IELTS without
                  stress by practicing or just an hour per day
                </p>
                {/* <p className="text-xl font-normal py-4 lg:px-28">
                  How to smash a Band 8 in IELTS in One Sitting and Relocate to
                  the Country of Your Choice FAST Without Wasting Hundreds of
                  Thousands on Several Failed Attempts.
                </p> */}
              </div>
              <p className="text-lg font-normal py-4">
                This training is FREE but registration is compulsory!
              </p>
              {/* <OptinForm buttonColor="white" textColor="colour3" /> */}

              {/* Optin Form Below  */}
              <form
                action="https://app.birdsend.co/subscribe"
                method="post"
                bs-form
              >
                <input type="hidden" name="meta_id" value="44264"></input>
                <input type="hidden" name="meta_user_id" value="4893"></input>
                <div className="p-1 py-4">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                  ></input>
                </div>
                <div className="p-1 py-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                    required
                  ></input>
                </div>
                <div className="py-4">
                  <div className="p-1">
                    <button
                      type="submit"
                      className={
                        "bg-white text-colour3 p-4 hover:text-colour1 hover:bg-gray-300 text-lg font-semibold rounded-md"
                      }
                    >
                      Secure My Spot
                    </button>
                  </div>
                </div>
                <div id="bs-message"></div>
              </form>

              {/* Dormant Optin Form Below */}

              {/* <form
                action="https://app.birdsend.co/subscribe"
                method="post"
                bs-form
              >
                <input type="hidden" name="meta_id" value="44264"></input>
                <input type="hidden" name="meta_user_id" value="4893"></input>
                <div className="p-1">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                  ></input>
                </div>
                <div className="p-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                    required
                  ></input>
                </div>
                <div className="py-2">
                  <div className="p-1">
                    <button
                      type="submit"
                      className={
                        "bg-white text-colour3 p-4 hover:text-colour1 hover:bg-gray-300 text-lg font-semibold rounded-md"
                      }
                    >
                      Take Me To The Training
                    </button>
                  </div>
                </div>
                <div id="bs-message"></div>
              </form> */}
            </div>
          </div>
          <p>
            <NextSectionButton link="#section-2" />
          </p>
          <div id="section-2">
            <div className="container mx-auto pb-8">
              <div className="p-8">
                <div className="bg-white p-8 rounded-3xl">
                  {/* <p className="text-2xl md:text-3xl md:leading-[3rem] font-bold leading-loose text-gray-300 overflow-hidden">
                    Just 21 days ago, I hosted a
                    <span className="text-white px-2">
                      LIVE IELTS YOUTUBE TRAINING
                    </span>
                    for
                    <span className="text-white px-2">
                      764 IELTS TEST TAKERS
                    </span>
                    on how to smash a band 8 in one sitting in IELTS and make
                    your relocation goal a dream come true.
                  </p>

                  <p className="text-xl font-semibold leading-loose text-white py-8 tracking-wider">
                    The results have been amazing Just take a look at it
                    yourself.
                  </p> */}
                  <p className="text-lg md:text-xl  font-semibold leading-loose text-colour3 py-8 tracking-wider">
                    Just 21 days ago, I hosted a LIVE IELTS YOUTUBE TRAINING for
                    764 IELTS TEST TAKERS on how to smash a band 8 in one
                    sitting in IELTS and make your relocation goal a dream come
                    true. The results have been amazing Just take a look at it
                    yourself.
                  </p>
                </div>

                <div className="container mx-auto py-8">
                  {/* <div className="grid lg:grid-cols-3 mx-auto overflow-hidden">
                    {OptinTestimonial_1.map((Testimonial, index) => (
                      <>
                        <Testimonials
                          key={index}
                          id={Testimonial.id}
                          imageUrl={Testimonial.imageUrl}
                          company={Testimonial.company}
                          type={Testimonial.type}
                          link={Testimonial.link}
                        />
                      </>
                    ))}
                  </div> */}
                  <div className="grid lg:grid-cols-3 mx-auto overflow-hidden">
                    {OptinTestimonial_1.map((Testimonial, index) => (
                      <>
                        <Testimonials
                          key={index}
                          id={Testimonial.id}
                          imageUrl={Testimonial.imageUrl}
                          company={Testimonial.company}
                          type={Testimonial.type}
                          link={Testimonial.link}
                        />
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section One */}
      </div>

      <div className="bg-gradient-to-b from-white via-gray-200 to-gray-100 w-full mx-auto overflow-hidden">
        {/* Section Three */}
        <div id="section-2">
          <div className="container mx-auto pb-8">
            <div className="p-8 grid md:grid-cols-2 md:gap-8">
              <div className="py-8">
                <p className="text-2xl md:text-4xl md:leading-loose font-bold leading-loose text-colour3 overflow-hidden">
                  Now Here is THE GOOD NEWS!
                </p>

                <p className="text-xl leading-loose text-gray-800 py-4 tracking-wider">
                  I recorded the same training and inside it I revealed the
                  exact system I gave the last participants titled &quot;IELTS
                  Band 8 Secrets - How to smash a band 8 without stress and
                  without wasting TIME and MONEY on several failed
                  attempts&quot;
                </p>
              </div>

              <div>
                <p className="text-xl font-bold leading-loose text-gray-700 pt-8 tracking-wider">
                  This training is FREE but registration is compulsory!
                </p>
                {/* <OptinForm buttonColor="colour3" textColor="white" /> */}

                {/* Optin Form Below */}
                <form
                  action="https://app.birdsend.co/subscribe"
                  method="post"
                  bs-form
                >
                  <input type="hidden" name="meta_id" value="44264"></input>
                  <input type="hidden" name="meta_user_id" value="4893"></input>
                  <div className="p-1 py-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                    ></input>
                  </div>
                  <div className="p-1 py-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                      required
                    ></input>
                  </div>
                  <div className="py-4">
                    <div className="p-1">
                      <button
                        type="submit"
                        className={
                          "bg-colour3 text-white p-4 hover:text-gray-300 hover:bg-colour1 text-lg font-semibold rounded-md"
                        }
                      >
                        Secure My Spot
                      </button>
                    </div>
                  </div>
                  <div id="bs-message"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section Three */}
      </div>

      <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 w-full mx-auto overflow-hidden">
        {/* Section Four */}
        <div id="section-2">
          <div className="container mx-auto pb-8">
            <div className=" p-8">
              <div className="py-8">
                <p className="text-2xl md:text-4xl md:leading-[4rem] font-bold leading-loose text-gray-400 overflow-hidden">
                  This Training is for:
                </p>

                <div className="text-xl text-white md:p-8 tracking-wider">
                  <ul className="list-disc list-outside">
                    <li className="py-4">
                      <span className="pe-2">1.</span>You who are taking the
                      IELTS Test for the first time and you&apos;re confused
                      which test to take, how to prepare effectively, and you
                      want a no fail method that has worked for many others so
                      you can smash your exam in one sitting without delaying
                      your relocation plans.
                    </li>
                    <li className="py-4">
                      <span className="pe-2">2.</span>Nurses, Caregiver, Health
                      Professionals, looking to write IELTS to relocate to UK OR
                      CANADA.
                    </li>
                    <li className="py-4">
                      <span className="pe-2">3.</span>You who failed to meet the
                      required band score in your last IELTS attempt and want to
                      ace your next trial without any disappointment so you can
                      relocate easily and get the better life you&apos;ve
                      dreamed about.
                    </li>
                    <li className="py-4">
                      <span className="pe-2">4.</span>You whose IELTS test date
                      is fast approaching and you&apos;re feeling unprepared and
                      scared.
                    </li>
                    <li className="py-4">
                      <span className="pe-2">5.</span>You who are currently
                      struggling with IELTS Reading, Writing, Listening,
                      Speaking and needs a sure method to ace a high band score
                      without fail.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section Four */}
      </div>

      <div className="bg-gradient-to-b from-white via-gray-200 to-gray-100 w-full mx-auto overflow-hidden">
        {/* Section Five */}
        <div id="section-2">
          <div className="container mx-auto pb-8">
            <div className="p-8 grid md:grid-cols-2 md:gap-8">
              <div className="py-8 order-first md:order-last">
                <p className="text-2xl md:text-4xl md:leading-loose font-bold leading-loose text-colour3 overflow-hidden">
                  If you have any of these issues, then this training is for
                  you.
                </p>

                <p className="text-xl leading-loose text-gray-800 py-4 tracking-wider">
                  Put your name and best email address in the form below And
                  immediately you&apos;d get an email confirming your
                  registration for this training, alongside the date, time and
                  the link to join the LIVE training.
                </p>
              </div>

              <div>
                <p className="text-xl font-bold leading-loose text-gray-700 pt-8 tracking-wider">
                  This training is FREE but registration is compulsory!
                </p>
                {/* <OptinForm buttonColor="colour3" textColor="white" /> */}

                {/* Optin Form Below  */}
                <form
                  action="https://app.birdsend.co/subscribe"
                  method="post"
                  bs-form
                >
                  <input type="hidden" name="meta_id" value="44264"></input>
                  <input type="hidden" name="meta_user_id" value="4893"></input>
                  <div className="p-1 py-4">
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                    ></input>
                  </div>
                  <div className="p-1 py-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                      required
                    ></input>
                  </div>
                  <div className="py-4">
                    <div className="p-1">
                      <button
                        type="submit"
                        className={
                          "bg-colour3 text-white p-4 hover:text-gray-300 hover:bg-colour1 text-lg font-semibold rounded-md"
                        }
                      >
                        Secure My Spot
                      </button>
                    </div>
                  </div>
                  <div id="bs-message"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section Five */}
      </div>
    </>
  );
};

export default Optin;
