export const CommunityUpdates = () => {
  const CommunityUpdatesData = [
    [
      "CommunityUpdatesImage1.png",
      "Creating Streamlined Safeguarding Processes with OneRen",
    ],
    [
      "CommunityUpdatesImage2.png",
      "What are your safeguarding responsibilities and how can you manage them?",
    ],
    [
      "CommunityUpdatesImage3.png",
      "Revamping the Membership Model with Triathlon Australia",
    ],
  ];
  return (
    <>
      <div className="container">
        <div className="community-updates">
          <h3>Caring is the new marketing</h3>
          <p>
            The Nextcent blog is the best place to read about the latest
            membership insights, trends and more. See who's joining the
            community, read about how our community are increasing their
            membership income and lot's more.​
          </p>
          <div className="community-updates-frame">
            {CommunityUpdatesData &&
              CommunityUpdatesData.map((data) => (
                <div key={data[0]}>
                  <img src={data[0]} />
                  <div className="community-updates-card">
                    <h4>{data[1]}</h4>
                    <h5>Readmore →</h5>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
