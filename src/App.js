import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavItem } from "react-bootstrap";

const App = () => {
  const [text, setText] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    setText(localStorage.getItem("inputValue"));
  }, []);

  return (
    <div className="container">
      <br />

      <h3>Pirkinių sąrašas </h3>
      <br />
      <ul>
        {products.map((data, index) => {
          return (
            <div className="item-container">
              <input type="checkbox" className="checkbox"></input>
              <li key={index}>{data}</li>
            </div>
          );
        })}
      </ul>
      <textarea value={text} rows="16" cols="34" onChange={handleChange} />
      <button
        className="saveBtn"
        onClick={() => {
          setProducts(text.trim().split("\n"));
        }}
      >
        Išsaugoti
      </button>
      <br />
    </div>
  );
};

export default App;
