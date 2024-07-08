export const Clients = () => {
  const clientsLogo = [
    "/public/LogoClient1.png",
    "/public/LogoClient2.png",
    "/public/LogoClient3.png",
    "/public/LogoClient4.png",
    "/public/LogoClient5.png",
    "/public/LogoClient6.png",
  ];
  return (
    <>
      <div className="container">
        <div className="clients">
          <h3>Our Clients</h3>
          <p>We have been working with some Fortune 500+ clients</p>
          <div className="clients-logo">
            {clientsLogo &&
              clientsLogo?.map((client) => <img src={client} key={client} />)}
          </div>
        </div>
      </div>
    </>
  );
};
