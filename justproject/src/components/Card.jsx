function Card({name, description, price}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  );
}

export default Card;