import CasualButton from "../components/CasualButton";
import Header from "../components/Header";

const Faq = () => {
  return (
    <><div>
        <div className="bg-gray-200 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
          {/* Section one */}
          <div className="container bg-white rounded-3xl py-4 border-4 border-white md:px-8 text-center">
            <Header
              styling="md:hidden max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
              logoStyle="/img/eandgtutorial_logo_2.png"
              link="/article"
            />
            <div className="p-4">
              <div className="order-last md:order-first ">
                <div>
                  <div className="">
                    <div className="min-h-fit bookcover w-full">
                      <Header
                        styling="hidden md:block max-w-[30vw] md:max-w-[10vw] ps-4 md:ps-6"
                        logoStyle="/img/eandgtutorial_logo_2.png"
                        link="/article"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="md:p-6 text-colour3">
                  <p className="text-5xl font-black pb-4 md:py-4 overflow-hidden md:px-24">
                    ALL YOU NEED TO KNOW ABOUT IELTS IS ON THIS PAGE.
                    <p className="overflow-hidden py-2">(Read it Carefully)</p>
                  </p>
                  <div className="text-xl font-semibold py-8 md:px-24 text-left">
                    <p className="p-4 bg-gray-200 my-8 rounded-3xl">
                      <p className="font-black py-2">What is IELTS?</p>
                      <p className="py-2">
                        IELTS stands for International English Language Testing
                        System.
                      </p>
                    </p>
                    <p className="p-4 my-8">
                      <p className="font-black py-2">Who can take IELTS?</p>
                      <p className="py-2">
                        Anyone can take the tests. Age is not a barrier as long
                        as you have completed secondary school.
                      </p>
                    </p>

                    <p className="p-4 bg-gray-200 my-8 rounded-3xl">
                      <p className="font-black py-2">Is IELTS Mandatory ?</p>
                      <p className="py-2">
                        No, it is not mandatory for everyone. It is a
                        requirement for certain situations. For example, if you
                        want to go to school and the school requires it, or if
                        you want to go abroad and the visa institutions require
                        it.
                      </p>
                    </p>
                    <p className="p-4 my-8">
                      <p className="font-black py-2">
                        The Type of IELTS to take?
                      </p>
                      <p className="py-2">
                        Many people ask me these questions:
                        <br />- Should I take General or Academic?
                        <br />- Is it the regular IELTS or the UKVI?
                      </p>
                    </p>

                    <p className="p-4 bg-gray-200 my-8 rounded-3xl">
                      <p className="font-black py-2">What is UKVI?</p>
                      <p className="py-2">
                        Let&apos;s first consider the different types of IELTS
                        tests available:
                        <br />
                        <br />
                        1. General IELTS Training is for immigration purposes.
                        If you are applying for Canada PR or low-level jobs
                        below a degree level, you should take this test.
                        <br />
                        <br />
                        2. Academic IELTS is for those who are going abroad for
                        studies or high-skilled jobs like doctors, nurses, and
                        accountants. If you have a work visa, you need to take
                        this type.
                        <br />
                        <br />
                        It&apos;s important to note that immigrate to a country
                        via the general training IELTS, there may be jobs there
                        that require you to take the Academic IELTS to upskill.
                        This is why some people prefer to take both types and
                        have both certificates.
                        <br />
                        <br />
                        Now, let&apos;s talk about IELTS UK Visas and
                        Immigration (UKVI). If you are specifically applying to
                        work or immigrate to the UK, you should take the UKVI
                        version. There are two types under this category:
                        <br />
                        <br />
                        1. General IELTS UKVI is for immigration or training
                        below a degree level in the UK, such as healthcare
                        assistants.
                        <br />
                        <br />
                        2. Academic IELTS UKVI is for studying in the UK or
                        professional registration, such as nursing, medicine, or
                        pharmacy.
                        <br />
                        <br />
                        Additionally, there is another type called IELTS Life
                        Skills (A1, A2, or B1), which is for people who want to
                        join a relative, spouse, or partner who is a permanent
                        resident in the UK, apply for permanent residency, or
                        become a British citizen.
                        <br />
                        <br />
                        To summarize:
                        <br />- For work: Academic IELTS
                        <br />- For immigration: General IELTS
                        <br />- For the UK specifically: UKVI versions
                        <br />- For joining a relative or partner in the UK:
                        IELTS Life Skills
                        <br />
                        <br />
                        However, it&apos;s always recommended to check with the
                        institutions, programs, or immigration authorities to be
                        sure of the specific type of IELTS you need to take.
                      </p>
                    </p>
                    <p className="p-4 my-8">
                      <p className="font-black py-2">
                        Is the standard IELTS training the same as IELTS for
                        UKVI?
                      </p>
                      <p className="py-2">
                        The exam structure for both IELTS and IELTS UKVI is the
                        same. The only difference is the cost of registering for
                        the exam, with IELTS UKVI being slightly more expensive.
                      </p>
                    </p>

                    <p className="p-4 bg-gray-200 my-8 rounded-3xl">
                      <p className="font-black py-2">
                        IDP vs. British Council: Which one is easier?
                      </p>
                      <p className="py-2">
                        Some people believe that the IELTS organized by IDP is
                        easier than the one organized by the British Council,
                        claiming it&apos;s easier to achieve a band 7 with IDP.
                        However, both IDP and the British Council are the same
                        company, and there are no differences in the IELTS exams
                        they conduct. They both coordinate the exam alongside
                        Cambridge and use the same marking scheme.
                        <br />
                        <br />
                        When choosing between IDP and the British Council,
                        consider the following factors:
                        <br />
                        <br />
                        1. Proximity of the test center to you. <br />
                        <br />
                        2. Test centers often use headphones for listening;
                        check if this is the case at your preferred location.
                        <br />
                        <br />
                        3. Test dates that are convenient for you; IDP and the
                        British Council have varying test dates, so choose one
                        that suits your schedule best. <br />
                        <br />
                        Now that you know what should inform your decision, you
                        can make a choice.
                      </p>
                    </p>
                    <p className="p-4 my-8">
                      <p className="font-black py-2">
                        IELTS Computer-Based Test (CBT) or Paper - Based Test,
                        Which should you choose
                      </p>
                      <p className="py-2">
                        IELTS Computer-Based Test (CBT) or Paper-Based Test
                        (PBT): Which one should you choose? <br />
                        <br />
                        The decision between CBT and PBT is yours to make based
                        on the information provided here. <br />
                        <br />
                        CBT and PBT have the same marking scheme; the difference
                        lies in using a computer for one and paper for the
                        other. <br />
                        <br />
                        For CBT, you need to be moderately fast with the
                        keyboard. Here&apos;s a brief overview of each module in
                        CBT: <br />
                        <br />- Listening: You listen and type your answers,
                        with some question types requiring you to drag or select
                        boxes. <br />
                        <br />- Reading: Questions are next to the passage,
                        making it easier to scan. You can also highlight text.
                        <br />
                        <br />- Writing: You can copy, cut, paste, and edit.
                        Handwriting is not an issue, and the screen shows the
                        word count. <br />
                        <br />- Speaking: It is a one-on-one interview, either
                        physical or via video. <br />
                        <br />
                        If you type fast and have poor handwriting, CBT may be a
                        good fit for you.
                      </p>
                    </p>

                    <p className="p-4 bg-gray-200 my-8 rounded-3xl">
                      <p className="font-black py-2">
                        How do I register for IELTS?
                      </p>
                      <p className="py-2">
                        You can register, pay and select your preferred test
                        centre for IELTS on either the British Council&apos;s
                        website or IDP&apos;s website, depending on your
                        preference.
                      </p>
                    </p>
                    <p className="p-4 mt-8">
                      <p className="font-black py-2">
                        What advice do you have for first-time test takers to
                        pass IELTS?
                      </p>
                      <p className="py-2">
                        Here are some recommendations: <br />
                        <br /> 1. Know the specific type of test you need to
                        take. <br />
                        <br />
                        2. Prepare adequately for the exam using a guide or
                        study materials. <br />
                        <br />
                        3. Once you feel ready, book your test. <br />
                        <br /> 4. Make sure you attend  &quot; the IELTS Cheat Code &quot; webinar.
                      </p>
                    </p>
                  </div>

                  <div>
                    <p className="p-4 mb-8 text-xl">
                      <p className="font-black py-2">
                        PS: To ensure you don't forget, I can personally remind you through my Whatsapp Channel when the webinar starts. If you would like this, Click the   
                        <span className="px-2 text-red-800">
                          &quot;Join the Whatsapp Channel&quot;
                        </span>
                        button below.
                      </p>
                    </p>
                  </div>
                </div>

                <CasualButton
                  textWord="Click Here to join the Whatsapp Channel"
                  buttonColor="colour3"
                  textColor="white"
                  link="https://whatsapp.com/channel/0029Vb0t8Id65yD4HIaWmu2i"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of Section One */}
      </div></>
  )
}

export default Faq