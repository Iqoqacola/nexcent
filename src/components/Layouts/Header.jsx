export const Header = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src="Logo.png" />
          </div>
          <div className="menu">
            <ul className="navbar">
              <li>Home</li>
              <li>Features</li>
              <li>Community</li>
              <li>Blog</li>
              <li>Pricing</li>
            </ul>
            <button>Register Now →</button>
          </div>
        </div>
      </div>
    </>
  );
};
