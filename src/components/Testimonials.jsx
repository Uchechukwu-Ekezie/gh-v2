import PropTypes from "prop-types";

const Testimonials = ({ id, imageUrl }) => {
  return (
    <>
      <div>
        <a className="overflow-hidden">
          <div
            key={id}
            className="min-h-[40vh] md:min-h-[80vh] box-border border-4 border-white lg:mx-8 flex flex-col justify-end my-10 rounded-3xl shadow-lg shadow-black"
            style={{
              backgroundImage: ` url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </a>
      </div>
    </>
  );
};

Testimonials.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Testimonials;
