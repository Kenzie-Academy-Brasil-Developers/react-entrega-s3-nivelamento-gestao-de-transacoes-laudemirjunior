import { useState } from "react";

const Input = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const objeto = { name, quantity, price };

  const handleClick = (obj) => {
    setProducts([...products, obj]);
  };
  console.log(objeto);

  return (
    <div className="input">
      <h1>Adicione uma entrada ou saída</h1>
      <div>
        <label>Nome</label>
        <input
          placeholder="Adicione o nome"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <div>
        <label>Quantida</label>
        <input
          placeholder="Adicione a quantidade"
          value={quantity}
          onChange={(evt) => setQuantity(evt.target.value)}
        />
      </div>
      <div>
        <label>Preço</label>
        <input
          placeholder="Adicione o preço"
          value={price}
          onChange={(evt) => setPrice(evt.target.value)}
        />
      </div>
      <div>
        <button type="submit" onClick={() => handleClick(objeto)}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Input;
