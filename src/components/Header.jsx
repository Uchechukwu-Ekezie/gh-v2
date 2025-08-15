import PropTypes from "prop-types";

const Header = ({ styling, logoStyle, link }) => {
  return (
    <>
      <div>
        <a href={link}>
          <img src={logoStyle} alt=" E & G Tutorial Logo" className={styling} />
        </a>
      </div>
    </>
  );
};

Header.propTypes = {
  styling: PropTypes.string.isRequired,
  logoStyle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Header;
