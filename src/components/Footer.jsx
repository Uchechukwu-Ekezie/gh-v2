const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-colour4 p-8 text-white text-center overflow-hidden">
        <div className="overflow-hidden py-2">
          Copyright © {currentYear} | E&G Tutorial - All Rights Reserved |
          <a href="/terms"> Terms and Condition</a> |
          <a href="/privacy">Privacy Policy</a> |
          <a href="/disclaimer">Disclaimer</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
