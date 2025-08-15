import { useEffect } from "react";
import Header from "../components/Header";
import NextSectionButton from "../components/NextSectionButton";
// import OptinForm from "../components/OptinForm";
import Testimonials from "../components/Testimonials";
import { OptinTestimonial_1 } from "../constants";

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
            logoStyle="/img/eandgtutorial_logo.png"
            link="/"
          />

          <div>
            <div className="min-h-fit bookcover w-full">
              <Header
                styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
                logoStyle="/img/eandgtutorial_logo.png"
                link="/"
              />
            </div>

            <p className="text-3xl md:text-4xl font-black pb-4 md:pb-12 overflow-hidden text-center text-white">
              IELTS cheat code webinar registration
            </p>

            <div className="p-6 text-white text-center justify-center items-center">
              <div className="lg:px-28">
                <p className="text-xl pb-4 md:pb-12 overflow-hidden text-left italic">
                  Leaked Video from IELTS Examiner....
                </p>
                <p className="text-3xl md:text-4xl font-black pb-4 md:pb-12 overflow-hidden">
                  <span className="text-red-500">Reveals:</span> IELTS CHEAT
                  CODE
                </p>
                <div className="md:px-4">
                  <div>
                    <div className="rounded-2xl p-8">
                      <div className="w-full my-auto mx-auto justify-center items-center hidden md:flex">
                        <img
                          src="/img/coverage.jpg"
                          alt="E and G Tutorial Cover"
                          width={"80%"}
                        />
                      </div>
                      <div className="w-full my-auto mx-auto flex justify-center items-center md:hidden">
                        <img
                          src="/img/coverage.jpg"
                          alt="E and G Tutorial Cover"
                          width={"100%"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container rounded-3xl md:px-8">
                  <div className="p-4 gap-4 bg-gray-300 rounded-2xl">
                    <div>
                      <div className="p-6 text-colour3 rounded-2xl text-center">
                        <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-semibold">
                          Insider intel from an ex IELTS examiner on how the
                          IELTS examining body and the British Council wants you
                          to answer your test question. All you have to do is
                          copy and paste answers to gurantee a high band score.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg md:text-xl  font-semibold leading-loose text-white py-8 tracking-wider"></p>
              </div>
              <p className="text-lg font-normal py-4">
                This training is FREE but registration is compulsory!
              </p>
              {/* <OptinForm buttonColor="white" textColor="colour3" /> */}

              {/* Optin form below */}
              <form
                action="https://systeme.io/embedded/22346771/subscription"
                method="post"
                bs-form
                className="text-gray-950"
              >
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
                      class="btn"
                      className={
                        "bg-white text-colour3 p-4 hover:text-colour1 hover:bg-gray-300 text-lg font-semibold rounded-md"
                      }
                    >
                      Click Here to Secure Your Spot
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p>
            <NextSectionButton link="#section-2" />
          </p>
          <div id="section-2">
            <div className="container mx-auto pb-8">
              <div className="p-8">
                <div className="bg-white p-8 rounded-3xl">
                  <p className="text-lg md:text-xl font-semibold leading-loose text-colour3 py-8 tracking-wider">
                    <p className="text-2xl font-extrabold text-center pb-3">
                      In this training, I will show you;
                    </p>
                    <ul className="list-disc list-inside md:px-16">
                      <li className="py-2">
                        How to create an IELTS plan that gurantees you a band
                        8.0 without stress.
                      </li>
                      <li className="py-2">
                        How to know the proper IELTS preparation channels that
                        suit your schedule and lifestyle.
                      </li>
                      <li className="py-2">
                        The 3 unique strategies I use to deliver outstanding
                        results for my students, that they have no other choice
                        but to hit a band 8.0
                      </li>
                    </ul>
                  </p>
                </div>

                <p>
                  <NextSectionButton link="#section-2" />
                </p>

                <div className="container mx-auto py-8">
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

      <div className="bg-gradient-to-b from-gray-300 via-gray-200 to-gray-300 w-full mx-auto overflow-hidden">
        {/* Section Four */}
        <div id="section-2">
          <div className="container mx-auto pb-8">
            <div className=" p-8">
              <div className="py-8">
                <p className="text-2xl md:text-4xl md:leading-[4rem] font-bold leading-loose text-colour1 overflow-hidden">
                  This Training is for:
                </p>

                <div className="text-xl text-colour md:p-8 tracking-wider">
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

                {/* Optin form below */}
                <form
                  action="https://systeme.io/embedded/22346771/subscription"
                  method="post"
                  bs-form
                  className="text-gray-950"
                >
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
                        class="btn"
                        className={
                          "bg-white text-colour3 p-4 hover:text-colour1 hover:bg-gray-300 text-lg font-semibold rounded-md"
                        }
                      >
                        Click Here to Secure Your Spot
                      </button>
                    </div>
                  </div>
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
