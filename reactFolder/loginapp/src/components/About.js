import Contact from "./Contact";
import "./About.css"
const About = () => {
  return (
    <fieldset>
      <legend align="center">AboutUs</legend>
      <div className="demo">
        Tell It.. Tell the world about a website. Tell the world about a
        business. Tell the world about a place. Tell the world about anything!
        Tell It.. Tell the world about a website. Tell the world about a
        business. Tell the world about a place. Tell the world about anything!Tell It.. Tell the world about a website. Tell the world about a
        business. Tell the world about a place. Tell the world about anything!
      </div>
      <div className="demo1">
        <label>Name</label>
        <span>________________</span>
        <label>Email Address</label>
        <span>________________</span>
      </div>
      <Contact></Contact>
    </fieldset>
  );
};
export default About;
