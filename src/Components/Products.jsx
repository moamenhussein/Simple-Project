import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
    <>
      <h1>Product Page</h1>
      {/* <Link to="/products/add" className="btn btn-success mt-3">
        Add New Product
      </Link> */}
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td className="description">
                  {product.description.slice(0, 40)}...
                </td>
                <td>{product.price}$</td>
                <td>
                  <Link to={`/products/${product.id}`} className="btn btn-info text-light me-2">View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Products;
