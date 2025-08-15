import { BiSolidChevronsDown } from "react-icons/bi";
import PropTypes from "prop-types";

const NextSectionButton = ({ link }) => {
  return (
    <>
      <p className="text-white text-4xl flex justify-center content-center p-6">
        <a href={link}>
          <span className="flex items-center">
            <BiSolidChevronsDown />
          </span>
        </a>
      </p>
    </>
  );
};

NextSectionButton.propTypes = {
  link: PropTypes.string,
};

export default NextSectionButton;
