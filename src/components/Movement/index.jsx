const Movement = ({ products }) => {
  return (
    <div className="card">
      <h1>Todas as movimentações</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {products.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Movement;
