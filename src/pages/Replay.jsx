import Header from "../components/Header";
import NextSectionButton from "../components/NextSectionButton";
import {
  OptinTestimonial_2,
  VideoTestimonial_1,
  VideoTestimonial_2,
  OptinTestimonial_3,
  VideoTestimonial_3,
} from "../constants";
import Testimonials from "../components/Testimonials";
import ReactPlayer from "react-player";
import CasualButton from "../components/CasualButton";
import FaqAccord from "../components/FaqAccord";
import { useEffect } from "react";

const Replay = () => {
  useEffect(() => {
    document.title = 
      "IELTS Cheat Code Webinar Replay.";
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-colour3 via-gray-900 to-colour3 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section one */}
        <div className="container bg-gradient-to-b from-colour3 via-gray-900 to-colour3 rounded-3xl md:px-8">
          <Header
            styling="md:hidden max-w-[15vw] ps-2 md:ps-6"
            logoStyle="/img/eandgtutorial_logo.png"
            link="/replay"
          />
          <Header
            styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-2 md:ps-6"
            logoStyle="/img/eandgtutorial_logo.png"
            link="/replay"
          />
          <div className="grid md:grid-cols-3 p-4 gap-4">
            <div>
              <div className="md:p-6 text-white">
                <p className="text-xl md:text-2xl font-black pb-4 overflow-hidden leading-relaxed">
                  The <span className="text-red-500">No-Fail</span> System of
                  Smashing a Band 8 in IELTS Without Stress by just Practicing
                  for just an Hour per Day
                </p>
                <p className="text-l font-semibold py-4 text-red-400">
                  Warning: This video will be pulled down anytime after grace
                  period has elapsed
                </p>
              </div>
            </div>
            <div className="md:px-4 col-span-2">
              <div>
                <div className="">
                  <div className="min-h-fit w-full my-auto mx-auto">
                    <p className="text-xl py-4 text-white font-bold">
                      WATCH NOW
                    </p>
                    <ReactPlayer
                      
                      url="https://youtu.be/x1_RWRtyj4Q"
                      playing="False"                      
                      controls
                      width="100%"
                      onReady="False"
                      autoplay="False"
                    />
                    <div className="pt-10 flex justify-center items-center">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10">
            <p>
              <NextSectionButton link="#section-2" />
            </p>
          </div>
        </div>
        {/* End of Section One */}
      </div>

      <div className="bg-gray-200 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Two */}
        <div className="container rounded-3xl py-4 md:px-8" id="section-2">
          <div>
            <p className="text-center font-bold text-2xl text-colour3">
              Hear from Others who have taken this same training in the past
            </p>
          </div>
          <div className="grid md:grid-cols-2 p-4 gap-10 pt-12">
            {VideoTestimonial_1.map((Testimonial, index) => (
              <div id={Testimonial.id} key={index}>
                <div>
                  <div className="">
                    <div className="min-h-fit w-full my-auto mx-auto">
                      <ReactPlayer
                        url={Testimonial.videoUrl}
                        playing="False"                      
                      controls
                        width="100%"
                        onReady="False"
                        autoplay="False"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of Section Two */}
      </div>

      <div className="bg-colour3 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Three */}
        <div className="container rounded-3xl py-4 md:px-8" id="section-2">
          <div className="container mx-auto py-8">
            <div className="grid lg:grid-cols-3 mx-auto overflow-hidden px-6">
              {OptinTestimonial_2.map((Testimonial, index) => (
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

            <div className="pt-10 flex justify-center items-center">
              <CasualButton
                textWord="Click Here to Join Now"
                buttonColor="white"
                textColor="colour3"
                link="/Payment"
              />
            </div>

            <div className="text-center font-bold text-2xl text-white pt-24">
              More Testimonials
            </div>

            <div className="grid md:grid-cols-2 p-4 gap-10 py-12">
              {VideoTestimonial_2.map((Testimonial, index) => (
                <div id={Testimonial.id} key={index} className="p-4">
                  <div>
                    <div className="bg-black border-4 border-white rounded-2xl">
                      <div className="min-h-fit w-full my-auto mx-auto">
                        <ReactPlayer
                          url={Testimonial.videoUrl}
                          playing="False"                      
                          controls
                          width="100%"
                          onReady="False"
                          autoplay="False"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-white pt-24">
              <p className="text-4xl font-black py-4 overflow-hidden leading-relaxed text-center md:px-48">
                Here is a Sneak Peak of the No Stress Band 8 IELTS Program
              </p>
              <NextSectionButton link="#section-4" />
            </div>
          </div>
        </div>
        {/* End of Section Three */}
      </div>

      <div
        className="bg-gray-200 w-full  px-4 py-10 md:p-12 mx-auto overflow-hidden"
        id="section-4"
      >
        {/* Section Four */}
        <div className="container rounded-3xl py-4 md:px-8">
          <div className="md:p-4 gap-10 md:py-12">
            <div className="md:p-4">
              <div className="flex justify-center items-center">
                <div className="bg-black border-4 border-white rounded-2xl w-[100vw] md:w-[50vw]">
                  <div className="my-auto mx-auto">
                    <ReactPlayer
                      url="https://vimeo.com/795473781/83920d22af?share=copy"
                      playing="False"                    
                      controls
                      width="100%"
                      onReady="False"
                      autoplay="False"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section Four */}
      </div>

      <div className="bg-colour3 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Five */}
        <div className="container rounded-3xl py-4 px-8" id="section-2">
          <div className="container mx-auto py-8">
            <div className="grid lg:grid-cols-3 mx-auto overflow-hidden">
              {OptinTestimonial_3.map((Testimonial, index) => (
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

            <div className="grid md:grid-cols-2 md:p-4 gap-10 pt-4 pb-12">
              {VideoTestimonial_3.map((Testimonial, index) => (
                <div id={Testimonial.id} key={index} className="md:p-4">
                  <div>
                    <div className="bg-black border-4 border-white rounded-2xl">
                      <div className="min-h-fit w-full my-auto mx-auto">
                        <ReactPlayer
                          url={Testimonial.videoUrl}
                          playing="False"                   
                          controls
                          width="100%"
                          onReady="False"
                          autoplay="False"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center pt-16">
              <CasualButton
                textWord="Click Here to Join Now"
                buttonColor="white"
                textColor="colour3"
                link="/Payment"
              />
            </div>
          </div>
        </div>
        {/* End of Section Five */}
      </div>

      <div className="bg-white w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Six */}
        <div className="container rounded-3xl md:px-8">
          <div className="grid md:grid-cols-2 p-4 gap-4">
            <div>
              <div className="p-6 text-colour3 bg-gray-300 rounded-2xl">
                <p className="text-2xl overflow-hidden leading-relaxed pb-3">
                  Remember when you get
                </p>
                <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-semibold">
                  The No Stress Band 8 IELTS Program
                </p>
                <p className="text-2xl overflow-hidden leading-relaxed pb-3">
                  that as a <b>Bonus</b> you also get:
                </p>
                <ul className="list-disc overflow-hidden list-inside pl-4 font-bold text-lg">
                  <li className="overflow-hidden p-2">A 50 days Study Plan.</li>
                  <li className="overflow-hidden p-2">
                    Vocabulary Builder Blueprint.
                  </li>
                  <li className="overflow-hidden p-2">
                    IELTS Crash Course Booster.
                  </li>
                  <li className="overflow-hidden p-2">
                    Special 72 Practice Tests.
                  </li>
                  <li className="overflow-hidden p-2">
                    Telegram Live Support Group.
                  </li>
                  <li className="overflow-hidden p-2">
                  Speaking Questions and Answers Guide
                  </li>
                  <li className="overflow-hidden p-2">
                  How to Score a Band 9 using the Practice test article. 

                  </li>
                  <li className="overflow-hidden p-2">
                  50+ Sample Essay Questions and Answers for Writing Task 2
                  </li>
                  <li className="overflow-hidden p-2">
                  50+ Sample Questions and Answers for Academic Writing Task 1
                  </li>
                  <li className="overflow-hidden p-2">
                    And all of this for just a token sum of
                  </li>
                </ul>
                <del className="text-4xl font-black py-4 overflow-hidden leading-relaxed">
                  GHS 920
                </del>
                <p className="text-4xl font-black py-4 overflow-hidden leading-relaxed text-red-700">
                  GHS 500
                </p>
              </div>
            </div>
            <div className="md:px-4">
              <div>
                <div className="bg-gray-100 rounded-2xl p-8">
                  <div className="min-h-fit w-full my-auto mx-auto">
                    <img
                      src="/img/testimonials/img13.png"
                      alt="E and G Tutorial Cover"
                      width={"100%"}
                    />
                    <p className="text-xl text-center py-4 text-colour3 font-bold">
                      <span className="pe-2 text-gray-700 text-lg">
                        Click on the button below now to get
                      </span>
                      The No Stress Band 8 IELTS Program
                      <span className="px-2 text-gray-700 text-lg">
                        and the accompanying bonuses for just
                      </span>
                      <span className="text-red-700">GHS 500.</span>
                    </p>
                    <div className="flex justify-center items-center">
                      <CasualButton
                        textWord="Click Here to Join Now"
                        buttonColor="colour3"
                        textColor="white"
                        link="/Payment"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section Six */}
      </div>

      <div className="bg-colour3 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section FAQ */}
        <div className="container rounded-3xl md:px-60 text-white mx-auto">
          <p className="text-4xl text-center font-black py-4 overflow-hidden leading-relaxed">
            Frequently Asked Questions
          </p>
          <FaqAccord />
          <div className="pt-10 flex justify-center items-center">
            <CasualButton
              textWord="Click Here to Join Now"
              buttonColor="white"
              textColor="colour3"
              link="/Payment"
            />
          </div>
        </div>
        {/* End of Section FAQ */}
      </div>
    </>
  );
};

export default Replay;
