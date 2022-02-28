const Footer = () => {
  return (
    <div className="fixed-bottom site-footer" style={{ zIndex: -5 }}>
      <nav
        className="navbar navbar-expand-lg text-center"
        style={{ backgroundColor: "#eeeeeecc" }}
      >
        <p className="m-0 mx-auto">
          <em className="opacity-50">
            Built by Blissblass on{" "}
            <a href="https://github.com/Blissblass">Github</a>
          </em>
        </p>
      </nav>
    </div>
  );
};

export default Footer;
