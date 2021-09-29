import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Movement from "./components/Movement";
import Display from "./components/Display";

function App() {
  const [products, setProducts] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  return (
    <div className="App">
      <Input products={products} setProducts={setProducts} />
      <Display products={products} />
      <Movement products={products} />
    </div>
  );
}

export default App;
