import { useEffect } from "react";
import Header from "../components/Header";

const Disclaimer = () => {
  useEffect(() => {
    document.title = "Disclaimer";
  }, []);
  return (
    <>
      <div className="bg-gray-200 w-full min-h-screen px-4 py-10 md:p-12 mx-auto overflow-hidden">
        {/* Section one */}
        <div className="container bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 rounded-3xl py-4 border-4 border-white md:px-8">
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

            <p className="text-3xl md:text-4xl font-black pb-4 md:pb-12 overflow-hidden text-center text-white mx-10">
              Website Disclaimer
            </p>
            <p className="text-3xl md:text-4xl font-black pb-4 md:pb-12 overflow-hidden text-center text-red-500 mx-10">
              Consent
            </p>

            <div className="px-6 text-white">
              <div className="lg:px-28">
                <div className="container rounded-3xl md:px-8">
                  <p className="overflow-hidden py-4 leading-8">
                    By using askmrgeoffrey.com/, you hereby consent to our
                    disclaimer and agree to its terms.askmrgeoffrey.com/ will
                    not be liable for any damages experienced in connection with
                    the use of our website. If you do not agree to our
                    Disclaimer STOP now and do not access or use this website.
                    <b className="px-2">
                      Educational and Informational Purposes.
                    </b>
                  </p>
                  <p className="overflow-hidden py-4 leading-8">
                    The information contained on this website is intended for
                    educational and informational purposes only. It is not
                    intended to be a substitute of either the written law or
                    regulations.
                    <b className="px-2">Not Legal or Financial Advice.</b>
                  </p>
                  <p className="overflow-hidden py-4 leading-8">
                    The authors of askmrgeoffrey.com/ are not legal or financial
                    advisors and therefore the information found on this website
                    is not intended to be used in place of professional legal
                    and/or financial advice. We have taken care to ensure the
                    information contained on this website is correct however, we
                    are not responsible for any errors or omissions.
                    <b className="px-2">External Links.</b>
                  </p>
                  <p className="overflow-hidden py-4 leading-8">
                    Some links on this website connect to external websites
                    which are maintained by third parties. askmrgeoffrey.com/ is
                    not responsible for any of the information provided by a
                    third party website. You are subject to the terms and
                    conditions, disclaimer, and privacy policy of the third
                    party websites when you leave our website.
                    <b className="px-2">Personal Responsibility.</b>
                  </p>
                  <p className="overflow-hidden py-4 leading-8">
                    You acknowledge you are using our website voluntarily and
                    that any choices, actions and results now and in the future
                    are solely your responsibility.askmrgeoffrey.com/ will not
                    be liable to you or any other party for any decision made or
                    action taken in reliance on the information given by our
                    service
                    <b className="px-2">Contact & Credit.</b>
                  </p>
                  <p className="overflow-hidden py-4 leading-8">
                    By using our website you are agreeing to the above
                    disclaimer. Should you have any queries regarding anything
                    in this disclaimer please contact us at: askmrgeoffrey.com/
                  </p>
                  <p className="overflow-hidden py-4 leading-8">
                    The experiences and successes shown on this page are not a
                    promise or a guarantee. <br />
                    <br />
                    They merely serve as an illustration or reference as to the
                    potential of what you can achieve when you&apos;re serious
                    with what we&apos;re about to show you and take consistent
                    action with it. <br />
                    <br />
                    As you can see from the results, earnings are different
                    among different people. <br />
                    <br />
                    So note that what is achieved by one person is not
                    guaranteed for another. Each person will see different
                    results. <br />
                    <br />
                    Your success and the results you&apos;ll achieve will depend
                    on you and your effort and willingness to work. <br />
                    <br />
                    And while there may be opportunities, every business has
                    some risk involved. <br />
                    <br />
                    So we beg you to act reasonably by doing research and giving
                    due consideration to the opportunities and risks involved
                    before joining.
                    <br />
                    <br />
                    <i>Cheers!</i>
                    <br />
                    Also this site is not a part of Google or Meta or Amazon. It
                    is not endorsed by any of them in any way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
