import About from "./About";
import "./Home.css"
const Home = () => {
  return (
    <div>
      <h1 style={headingStyle}>Welcome to the website</h1>
      <About></About>
    </div>
  );
};

const headingStyle = {
  textWeight: "bolder",
  fontSize: "3rem",
  textAlign: "center",
  textDecoration: "underline",
};

export default Home;
