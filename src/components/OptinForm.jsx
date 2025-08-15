import PropTypes from "prop-types";

const OptinForm = ({ buttonColor, textColor }) => {
  return (
    <>
      <div>
        <div>
          <form>
            <div className="py-2">
              <div className="p-1 text-lg font-semibold">
                <label htmlFor="name" className="text-left">
                  Name
                </label>
              </div>
              <div className="p-1">
                <input
                  name="name"
                  type="text"
                  placeholder="Samuel Doghor"
                  className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                ></input>
              </div>
            </div>
            <div className="py-2">
              <div className="p-1 text-lg font-semibold">
                <label htmlFor="email" className="text-left">
                  Email Address
                </label>
              </div>
              <div className="p-1">
                <input
                  name="email"
                  type="email"
                  placeholder="example@provider.com"
                  className="h-12 w-80 p-2 rounded-md border-4 border-gray-700"
                ></input>
              </div>
            </div>
            <div className="py-2">
              <div className="p-1">
                <button
                  className={`bg-${buttonColor} text-${textColor} p-4 hover:text-colour1 hover:bg-gray-300 text-lg font-semibold rounded-md`}
                >
                  Take me to the training
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

OptinForm.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default OptinForm;
