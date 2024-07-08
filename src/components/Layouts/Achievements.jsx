export const Achievements = () => {
  const achievementsData = [
    ["/public/AchievementsCount1.png", "2,245,341", "Members"],
    ["/public/AchievementsCount2.png", "46,328", "Clubs"],
    ["/public/AchievementsCount3.png", "828,867", "Event Bookings"],
    ["/public/AchievementsCount4.png", "1,926,436", "Payments"],
  ];
  return (
    <>
      <div className="container">
        <div className="achievements">
          <div className="achievements-title">
            <h3>
              Helping a local <span>business reinvent itself</span>
            </h3>
            <p>We reached here with our hard work and dedication</p>
          </div>

          <div className="achievements-counts">
            {achievementsData &&
              achievementsData?.map((data) => (
                <div className="count" key={data[2]}>
                  <img src={data[0]} />
                  <div>
                    <h3>{data[1]}</h3>
                    <p>{data[2]}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
