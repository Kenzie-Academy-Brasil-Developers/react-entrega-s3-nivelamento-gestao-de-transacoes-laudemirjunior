import { useState } from "react";

const Display = ({ products }) => {
  const [change, setChange] = useState(true);
  const positivos = products.filter((item) => item.quantity > 0);
  const negativos = products.filter((item) => item.quantity < 0);

  const handleClick = () => {
    setChange(!change);
  };

  return (
    <div className="card">
      <h1>{change ? "Saídas" : "Entradas"}</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {change
          ? negativos.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })
          : positivos.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              );
            })}
      </table>
      <button onClick={() => handleClick()}>
        {change ? "Mostrar entradas" : "Mostrar saídas"}
      </button>
    </div>
  );
};

export default Display;
