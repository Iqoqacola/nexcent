import { Clients } from "../Layouts/Clients";
import { Community } from "../Layouts/Community";
import { Header } from "../Layouts/Header";
import { Hero } from "../Layouts/Hero";
import { Unlock } from "../Layouts/Unlock";
import { Achievements } from "../Layouts/Achievements";
import { Calender } from "../Layouts/Calender";
import { Customers } from "../Layouts/Customers";
import { CommunityUpdates } from "../Layouts/CommunityUpdates";

function App() {
  return (
    <>
      {/* HOME  */}
      <Header></Header>
      <Hero></Hero>
      <Clients></Clients>
      <Community></Community>

      {/* BODY  */}
      <Unlock></Unlock>
      <Achievements></Achievements>
      <Calender></Calender>
      <Customers></Customers>
      <CommunityUpdates></CommunityUpdates>
      {/* FOOTER */}
    </>
  );
}
export default App;
