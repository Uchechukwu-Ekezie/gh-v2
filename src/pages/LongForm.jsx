import Header from "../components/Header";
import ReactPlayer from "react-player/vimeo";
import CasualButton from "../components/CasualButton";
import { VideoTestimonial_1, VideoTestimonial_4 } from "../constants";
import { OptinTestimonial_4 } from "../constants";
import Testimonials from "../components/Testimonials";
import FaqAccord from "../components/FaqAccord";

const LongForm = () => {
  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section one */}
        <div className="container bg-gradient-to-b from-colour3 via-gray-900 to-colour3 rounded-3xl py-4 border-4 border-white md:px-8">
          <Header
            styling="md:hidden max-w-[15vw] md:max-w-[10vw] ps-4 md:ps-6"
            logoStyle="/img/eandgtutorial_logo.png"
            link="/"
          />
          <div className="p-4 pb-10">
            <div>
              <div>
                <div>
                  <div className="min-h-fit bookcover w-full">
                    <Header
                      styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
                      logoStyle="/img/eandgtutorial_logo.png"
                      link="/"
                    />
                    <div className="md:p-6 text-white text-center leading-loose">
                      <p className="text-4xl font-black pb-4 md:py-4 overflow-hidden">
                        Here is a Sneak Peak of the No Stress Band 8 IELTS
                        Program
                      </p>
                    </div>
                    <div className="md:p-4">
                      <div className="flex justify-center items-center pt-10">
                        <div className="bg-black border-4 border-white rounded-2xl w-[100vw] md:w-[50vw]">
                          <div className="my-auto mx-auto">
                            <ReactPlayer
                              url="https://vimeo.com/795473781/83920d22af"
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
                    <div className="pt-10 flex justify-center items-center">
                      <CasualButton
                        textWord="Click Here to Join Now"
                        buttonColor="white"
                        textColor="colour3"
                        link="/Payment"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section One */}
      </div>

      <div className="bg-gray-100 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
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

      <div className="bg-colour3 w-full px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Three */}
        <div className="container rounded-3xl md:px-8">
          <div className="grid md:grid-cols-2 p-4 gap-4">
            <div>
              <div className="p-6 text-colour3 bg-gray-300 rounded-2xl text-center">
                <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-semibold">
                  The No Stress Band 8 IELTS Program
                </p>
                <p className="text-3xl overflow-hidden leading-relaxed pb-3 text-center font-semibold pt-10">
                  Price = <del>GHS 920</del>
                </p>
                <p className="text-4xl font-black py-4 overflow-hidden leading-relaxed pt-1">
                  Discounted Price = GHS 500
                </p>
                <div className="flex justify-center items-center pt-10">
                  <CasualButton
                    textWord="Click Here to Join Now"
                    buttonColor="colour3"
                    textColor="white"
                    link="/Payment"
                  />
                </div>
              </div>
            </div>
            <div className="md:px-4">
              <div>
                <div className="bg-gray-100 rounded-2xl p-8">
                  <div className="w-full my-auto mx-auto flex justify-center items-center">
                    <img
                      src="/img/testimonials/img13.png"
                      alt="E and G Tutorial Cover"
                      width={"100%"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section Three */}
      </div>

      <div className="bg-white w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Four */}
        <div className="container rounded-3xl md:px-8">
          <div className="p-4 gap-4">
            <div className="grid lg:grid-cols-3 mx-auto overflow-hidden px-6 pb-16">
              {OptinTestimonial_4.map((Testimonial, index) => (
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

            <div className="my-auto mx-auto bg-black md:mx-64">
              <ReactPlayer
                url="https://vimeo.com/739892634/2420f68dcc"
                playing="False"                      
                controls
                width="100%"
                onReady="False"
                autoplay="False"
              />
            </div>
          </div>
        </div>
        {/* End of Section Four */}
      </div>

      <div className="bg-colour3 w-full px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Five */}
        <div className="container rounded-3xl md:px-8">
          <div className="p-4 gap-4">
            <div className="text-colour3 bg-gray-300 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-bold">
                For the Reading section, I&apos;ll show you:
              </p>
              <ul className="list-disc overflow-hidden list-inside pl-4 text-lg">
                <li className="overflow-hidden p-2">
                  A proven formula which when applied correctly will help you to
                  easily get the correct answers in all the question types.
                </li>
                <li className="overflow-hidden p-2">
                  Especially if you&apos;re already having difficulty in
                  matching list of headings and True/False/Not given question
                  types
                </li>
                <li className="overflow-hidden p-2">
                  A demonstrative video on how to use my unique DEQF Method to
                  finish the Reading test in 50 mins with extra time to go
                  through your answers
                </li>
                <li className="overflow-hidden p-2">
                  You&apos;ll discover the 3 building blocks of IELTS questions,
                  that when applied you will always arrive at the correct
                  answers.
                </li>
                <li className="overflow-hidden p-2">
                  I&apos;ll also show you a short trick I personally discovered
                  that shows you instantly if the answer you picked is correct
                  or not.
                </li>
              </ul>
            </div>

            <div className="text-white bg-colour4 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-bold">
                For the Listening section, I&apos;ll show you:
              </p>
              <ul className="list-disc overflow-hidden list-inside pl-4 text-lg">
                <li className="overflow-hidden p-2">
                  A simple easy to use method you can learn to help you hear the
                  correct answers no matter the type of accent being used in the
                  listening test.
                </li>
                <li className="overflow-hidden p-2">
                  This trick alone will guarantee you band a 8.0 in the
                  listening test
                </li>
                <p className="text-gray-500 font-bold">I&apos;ll show you: </p>
                <li className="overflow-hidden p-2">
                  How to achieve maximum focus in listening even if you have a
                  short attention span or you&apos;re easily distracted.
                </li>
                <li className="overflow-hidden p-2">
                  I&apos;ll also share proven techniques you can use in
                  predicting what you are about to hear and you&apos;ll be
                  correct most of the time.
                </li>
                <li className="overflow-hidden p-2">
                  This is equivalent to knowing what the examiner is about to
                  ask before they even open their mouth.
                </li>
                <p className="text-gray-500 font-bold">I&apos;ll show you: </p>
                <li className="overflow-hidden p-2">
                  How to use the extra 10 minutes given to you to boost your
                  scores.
                </li>
                <li className="overflow-hidden p-2">
                  And trust me, when you&apos;re done with your exams
                  you&apos;ll wish everyone you know was aware of this.
                </li>
                <p className="text-gray-500 font-bold">
                  I&apos;ll also show you:
                </p>
                <li className="overflow-hidden p-2">
                  A sure way of ensuring you don&apos;t make spelling or
                  grammatical mistakes during the listening test.
                </li>
                <li className="overflow-hidden p-2">
                  I can&apos;t even emphasise how important this is as most of
                  your success is tied to it.
                </li>
                <li className="overflow-hidden p-2">
                  You&apos;ll also discover the pitfalls IELTS places in some
                  Listening question types and how to avoid them.
                </li>
                <li className="overflow-hidden p-2">
                  Yes, I can assure you these are real and not imagined.
                </li>
                <li className="overflow-hidden p-2">
                  The people who set these IELTS questions try to make you miss
                  them on purpose.
                </li>
                <li className="overflow-hidden p-2">
                  But I&apos;ll show you how to beat them at their game.
                </li>
              </ul>
            </div>

            <div className="text-colour3 bg-gray-300 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-bold">
                For the Speaking section, you&apos;ll:
              </p>
              <ul className="list-disc overflow-hidden list-inside pl-4 text-lg">
                <li className="overflow-hidden p-2">
                  Discover how to give well thought out answers to questions and
                  have a lively speaking session that the examiner will have no
                  other choice than to rate you high.
                </li>
                <li className="overflow-hidden p-2">
                  You&apos;ll also be uncovering the basic tips you ought to
                  know to smash a high score in your speaking.
                </li>
                <p className="text-gray-700 font-bold">
                  But that&apos;s not even all.
                </p>
                <li className="overflow-hidden p-2">
                  I&apos;ll also show you how to answer any question you know
                  nothing about during the speaking test and still achieve a
                  band score of 8.0
                </li>
              </ul>
            </div>

            <div className="text-white bg-colour4 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-bold">
                For General Writing:
              </p>
              <ul className="list-disc overflow-hidden list-inside pl-4 text-lg">
                <li className="overflow-hidden p-2">
                  You&apos;ll discover how to come up with a powerful logical
                  story that fits perfectly within the context of the letter.
                </li>
                <li className="overflow-hidden p-2">
                  This will make your letter so interesting to the examiner that
                  he/she will have no choice than to smile and give you at least
                  a band score of 7.5.
                </li>
                <li className="overflow-hidden p-2">
                  You&apos;ll also discover how to organise your letter to meet
                  the marking criteria of at least a band 7.5.
                </li>
                <li className="overflow-hidden p-2">
                  You&apos;ll discover certain words you should include in your
                  letter that tells the examiner you understand what the
                  question type demands of you and makes your work unique
                  thereby attracting a high band score.
                </li>
              </ul>
            </div>

            <div className="text-colour3 bg-gray-300 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-bold">
                For Academic Writing, I&apos;ll show you:
              </p>
              <ul className="list-disc overflow-hidden list-inside pl-4 text-lg">
                <li className="overflow-hidden p-2">
                  A step by step process of how to identify and analyze the main
                  features of a line graph, bar chart, pie chart, table, process
                  diagrams and maps you must include to meet the minimum band of
                  7.0.
                </li>
                <li className="overflow-hidden p-2">
                  You&apos;ll learn how to plan and organize your paragraph in
                  such a way that it meets the marking criteria.
                </li>
                <li className="overflow-hidden p-2">
                  The examiner will have no other choice than to give you at
                  least a band 7.5.
                </li>
                <p className="text-gray-700 font-bold">
                  But that&apos;s not where it ends.
                </p>
                <p className="text-gray-700 font-bold">You&apos;ll also:</p>
                <li className="overflow-hidden p-2">
                  Discover my unique 7 step process you can easily apply to
                  generate relevant essay ideas even if you have zero clue about
                  the essay topic.
                </li>
                <li className="overflow-hidden p-2">
                  I&apos;ll show you a 3-step formula you can use to understand
                  the topic of the essay you have been given so you don&apos;t
                  have to worry about writing off-point and lose marks on that
                  account.
                </li>
                <li className="overflow-hidden p-2">
                  You&apos;ll learn how to organize your paragraphs to ensure
                  you have a band 7.5 or more in the agree/disagree essay,
                  discuss both views essay, advantage and other essay types in
                  writing Task 2.
                </li>
                <li className="overflow-hidden p-2">
                  I&apos;ll show you the right methods to paraphrase and how you
                  can use it to score more points.
                </li>
              </ul>
            </div>

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

            {/* <div className="text-white bg-colour4 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <p className="text-2xl overflow-hidden leading-relaxed font-bold text-center pb-10">
                And when you get The No Stress Band 8 IELTS Program, as a BONUS
                You get:
              </p>
              <img
                src="/img/bonus/img_b1.jpg"
                alt="Bonus offer"
                width={"70%"}
                className="mx-auto flex justify-center items-center p-4"
              />
              <img
                src="/img/bonus/img_b2.jpg"
                alt="Bonus offer"
                width={"70%"}
                className="mx-auto flex justify-center items-center p-4"
              />
              <p className="txxt-white text-2xl overflow-hidden leading-relaxed font-bold text-center p-10">
                A Vocabulary Builder Blueprint containing simple to use words
                that will improve your band score in Writing.
              </p>
            </div>

            <div className="text-colour3 bg-gray-300 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <img
                src="/img/bonus/img_b4.jpg"
                alt="Bonus offer"
                width={"70%"}
                className="mx-auto flex justify-center items-center p-4"
              />

              <p className="text-2xl overflow-hidden leading-relaxed font-bold text-center p-10">
                This will help you implement the strategies you learnt during
                the course using the Study Plan.
              </p>
            </div>

            <div className="text-white bg-colour4 rounded-2xl md:mx-48 md:p-10 my-10 p-6">
              <p className="text-2xl overflow-hidden leading-relaxed font-bold text-center pb-10">
                And before I forget, You also get the IELTS Crash Course
                Booster.
              </p>
              <img
                src="/img/bonus/img_b3.jpg"
                alt="Bonus offer"
                width={"70%"}
                className="mx-auto flex justify-center items-center p-4"
              />
            </div>

            <div className="font-bold text-xl text-white ps-8 text-center">
              <p className="font-normal p-1">
                Also, you&apos;ll be added to my
              </p>
              <p className="text-3xl overflow-hidden p-1">
                Telegram Live Support Group
              </p>
              <p className="font-normal p-1">
                where I get to answer any questions you might have in real time.
              </p>
            </div> */}

            <div className="md:p-4">
              <div className="flex justify-center items-center pt-10">
                <div className="bg-black border-4 border-white rounded-2xl w-[100vw] md:w-[50vw]">
                  {VideoTestimonial_4.map((Testimonial, index) => (
                    <div
                      className="my-auto mx-auto"
                      id={Testimonial.id}
                      key={index}
                    >
                      <ReactPlayer
                        url={Testimonial.videoUrl}
                        playing="False"                     
                        controls
                        width="100%"
                        onReady="False"
                        autoplay="False"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Section Five */}
      </div>

      <div className="bg-white w-full px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section Three */}
        <div className="container rounded-3xl md:px-8">
          <div className="p-4 gap-4">
            <div>
              <div className="md:p-6 text-colour3 bg-gray-300 rounded-2xl text-center p-10">
                <p className="text-2xl overflow-hidden leading-relaxed pb-3 font-semibold">
                  The No Stress Band 8 IELTS Program
                </p>
                <p className="text-3xl overflow-hidden leading-relaxed pb-3 text-center font-semibold pt-10">
                  Price = <del>GHS 920</del>
                </p>
                <p className="text-4xl font-black py-4 overflow-hidden leading-relaxed pt-1">
                  Discounted Price = GHS 500
                </p>
                <div className="flex justify-center items-center pt-10">
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
        {/* End of Section Three */}
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

export default LongForm;
