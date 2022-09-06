import "./Header.css";

const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}>Hello {title}</h1>
      <h2 className="h2class">H2 heading</h2>
      <p id="pid">My name is a react app</p>
    </header>
  );
};

const headingStyle = {
  color: "darkcyan",
  backgroundColor: "lightblue",
  textAlign: "center",
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
