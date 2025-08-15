import Testimonials from "../components/Testimonials";
import { OptinTestimonial_1New, OptinTestimonial_2New } from "../constants";
import CasualButton from "../components/CasualButton";
import { useEffect } from "react";

const OptinNew = () => {
  useEffect(() => {
    document.title = "IELTS cheat code webinar registration";
  }, []);
  return (
    <>
      <div className="w-full bg-colour4 text-white text-center flex flex-col gap-4 justify-center items-center py-12 px-10">
        <p className="text-3xl md:text-4xl font-bold overflow-hidden">
          Here&apos;s Why Most People FAIL the IELTS Test...
        </p>
        <p className="text-lg md:text-xl overflow-hidden">
          And It Has Nothing to Do With Their English Skills.
        </p>
        {/* <button className="bg-sky-800 hover:bg-sky-950 mt-12 p-4 text-lg font-semibold tracking-wide rounded-xl hover:shadow-2xl hover:shadow-slate-900">
          REGISTER TO JOIN
        </button> */}
        <p className="text-base md:text-lg overflow-hidden font-bold tracking-wide">
        REGISTER NOW TO JOIN THIS EXCLUSIVE MASTERCLASS
        </p>
        {/* Optin form below */}
        { <form
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
        </form> }
        
      </div>
      <div className="w-full text-slate-900 text-lg flex flex-col gap-8 px-10 md:px-80 py-12 font-normal">
        <p>
          Just 49 days ago, I hosted a closed WhatsApp group with 319 IELTS Test
          Takers who were tired of repeatedly failing to achieve their desired
          band score. They were stuck, frustrated, and wondering why their hard
          work wasn&apos;t paying off.
        </p>
        <p>
          In our 1-Hour Masterclass, I revealed{" "}
          <b>contrarian IELTS techniques</b> that go <b>against the grain</b> of
          traditional advice and have consistently led my test takers to achieve{" "}
          <b>high band scores</b> in a <b>single attempt</b>.
        </p>
        <p>And guess what? The results have been astounding!</p>
      </div>
      <div className="bg-gradient-to-b to-slate-200 from-white py-14 px-10 md:px-64">
        <p className="font-bold text-2xl text-center">
          Hear what past participants are saying...
        </p>
        <div className="container mx-auto py-8">
          <div className="grid lg:grid-cols-2 mx-auto overflow-hidden">
            {OptinTestimonial_1New.map((Testimonial, index) => (
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
      <div className="w-full text-slate-900 text-lg flex flex-col gap-8 px-10 md:px-80 py-12 font-normal">
        <p>
          But here&apos;s the thing – most people won&apos;t get to experience
          this…
        </p>
        <p>The Reality?</p>
        <p>
          If you keep preparing the same way, you&apos;ll likely remain stuck –
          scoring below your potential, wasting money on repeated tests, and
          delaying your relocation dreams.
        </p>
        <p>
          The worst part? You&apos;ll keep wondering why nothing seems to work.
        </p>
        <p>
          In just a few days, I&apos;m running an <b>exclusive Masterclass</b>{" "}
          that&apos;s unlike any other IELTS preparation session you&apos;ve
          seen.
        </p>
        <p>
          I&apos;ll be sharing <b>bold, unconventional methods</b> that go{" "}
          <b>against the grain</b> of traditional advice.
        </p>
        <p>
          If you&apos;re tired of the same old advice that keeps you stuck,
          tired of following the same old and outdated strategies and{" "}
          <b>still not seeing results</b>, it&apos;s time to learn{" "}
          <b>what really works</b>.
        </p>
        <p>DON&apos;T MISS THIS EXCLUSIVE MASTERCLASS</p>
        <p>It will open your eyes to the mistakes you&apos;ve been making.</p>
      </div>
      <div className="w-full py-12 bg-colour4 text-white text-center flex flex-col gap-4 justify-center items-center">
        {/* <button className="bg-sky-800 hover:bg-sky-950 p-4 text-lg font-semibold tracking-wide rounded-xl hover:shadow-2xl hover:shadow-slate-900">
          REGISTER NOW TO JOIN
        </button> */}
        <p className="text-lg overflow-hidden font-bold tracking-wide">
        REGISTER NOW TO JOIN THIS EXCLUSIVE MASTERCLASS
        </p>
        {/* Optin form below */}
        {<form
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
        </form> }
        
      </div>
      <div className="bg-gradient-to-b to-slate-200 from-white py-8 px-10 md:px-64">
        <p className="font-bold text-2xl text-center">More Testimonies...</p>
        <div className="container mx-auto py-8">
          <div className="grid lg:grid-cols-2 mx-auto overflow-hidden">
            {OptinTestimonial_2New.map((Testimonial, index) => (
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
      <div className="w-full py-12 bg-colour4 text-white text-center flex flex-col gap-4 justify-center items-center">
        {/* <button className="bg-sky-800 hover:bg-sky-950 p-4 text-lg font-semibold tracking-wide rounded-xl hover:shadow-2xl hover:shadow-slate-900">
          REGISTER NOW TO JOIN
        </button> */}
        <p className="text-lg overflow-hidden font-bold tracking-wide">
        REGISTER NOW TO JOIN THIS EXCLUSIVE MASTERCLASS
        </p>
        {/* Optin Form Below  */}
      
        { <form
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
        </form> }
        
      </div>
    </>
  );
};

export default OptinNew;
