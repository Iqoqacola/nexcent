export const Clients = () => {
  const clientsLogo = [
    "LogoClient1.png",
    "LogoClient2.png",
    "LogoClient3.png",
    "LogoClient4.png",
    "LogoClient5.png",
    "LogoClient6.png",
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
