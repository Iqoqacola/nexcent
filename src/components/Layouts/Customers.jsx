export const Customers = () => {
  const CustomerClientsLogo = [
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
        <div className="customers">
          <img src="Customers.png" />
          <div className="customers-text">
            <p className="p-1">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h5>Tim Smith</h5>
            <p className="p-2">British Dragon Boat Racing Association</p>
            <div className="customers-clients">
              {CustomerClientsLogo &&
                CustomerClientsLogo.map((data) => (
                  <img src={data} key={data} />
                ))}
              <h5>Meet all customers →</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
