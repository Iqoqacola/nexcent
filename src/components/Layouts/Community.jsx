export const Community = () => {
  const communityIcon = [
    [
      "/public/IconCommunity1.png",
      "Membership Organisations",
      "Our membership management software provides full automation of membership renewals and payments",
    ],
    [
      "/public/IconCommunity2.png",
      "National Associations",
      "Our membership management software provides full automation of membership renewals and payments",
    ],
    [
      "/public/IconCommunity3.png",
      "Clubs And Groups",
      "Our membership management software provides full automation of membership renewals and payments",
    ],
  ];
  return (
    <>
      <div className="container">
        <div className="community">
          <div className="community-text">
            <h3>
              Manage your entire community <br /> in a single system
            </h3>
            <p>Who is Nextcent suitable for?</p>
          </div>
          <div className="community-frame">
            {communityIcon &&
              communityIcon.map((data) => (
                <div key={data[0]}>
                  <div>
                    <img src={data[0]} />
                    <h3>{data[1]}</h3>
                  </div>

                  <p>{data[2]}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
