// import logo from "./logo.svg";
// import Header from "./components/Header";
import Button from "./components/Button";
import "./App.css";

function App() {
  const onClick = () => {
    console.log("helloworld");
  };
  return (
    <header className="container">
      <Button text="hello" color="green" onClick1={onClick}></Button>
    </header>
  );
}

export default App;
