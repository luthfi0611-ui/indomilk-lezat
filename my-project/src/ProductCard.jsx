import React from "react";

export default function ProductCard({ image, title, desc, price, onAdd }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{desc}</p>
      <span>{price}</span>
      <button onClick={onAdd}>Tambah</button>
    </div>
  );
}
