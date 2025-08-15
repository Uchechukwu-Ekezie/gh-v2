import PropTypes from "prop-types";

const CasualButton = ({ buttonColor, textColor, textWord, link }) => {
  return (
    <>
      <div>
        <div>
          <a href={link}>
            <button
              className={`bg-${buttonColor} text-${textColor} p-4 hover:text-colour1 hover:bg-gray-300 text-lg font-semibold rounded-md`}
            >
              {textWord}
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

CasualButton.propTypes = {
  textWord: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CasualButton;
