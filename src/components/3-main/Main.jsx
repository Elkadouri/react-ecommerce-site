import "./main.css";
import { categories } from "./Products";
import { products } from "./Products";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faStar, faStarHalfAlt, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Main({
  // eslint-disable-next-line react/prop-types
  active,setActive, setDisplay, productsData,setProductsData, search,setSearch}) {
  const [idDisplay, setIdDisplay] = useState({
    id: null,
    display: "none",
    index: 0,
    index1: 1,
    index2: 2,
  });

  const getStarIcon = (rating, index) => {
    if (rating >= index + 1) {
      return faStar;
    } else if (rating >= index + 0.5) {
      return faStarHalfAlt;
    } else {
      return null;
    }
  };

  // Filter products based on active category and search query
  const filteredProducts = products.filter((product) => {
    return (
      (active === "All Categories" || product.category === active) &&
      // eslint-disable-next-line react/prop-types
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <main className="container main">
      {/* Category Buttons */}
      <ul className="categories-btn">
        {categories.map((item) => (
          <li key={item}>
            <button
              onClick={() => {
                setActive(item);
                setSearch(() => '')
              }}
              className={active === item ? "active" : ""}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      {/* Product List */}
      <ul id="products" className="products">
        {filteredProducts.map((product) => (
          <li key={product.id} className="card">
            <div className="image">
              <img src={product.images[0]} alt={product.title} />
            </div>
            <span className="title">{product.title}</span>
            <span className="price">${product.price}</span>
            <ul className="rating">
              {[...Array(5)].map((_, index) => (
                <li key={index}>
                  <FontAwesomeIcon
                    className={`rate ${
                      getStarIcon(product.rating, index) ? "filled" : "empty"
                    }`}
                    icon={getStarIcon(product.rating, index) || faStar}
                  />
                </li>
              ))}
            </ul>
            <button
              onClick={() =>
                setIdDisplay({
                  id: product.id,
                  display: "flex",
                  index: idDisplay.index,
                  index1: idDisplay.index1,
                  index2: idDisplay.index2,
                })
              }
              className="shop-btn"
            >
              Add To Cart
              <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
            </button>
          </li>
        ))}
      </ul>

      {/* Modal for Product Details */}
      <div style={{ display: idDisplay.display }} className="modal">
        {products.map((product) => {
          if (product.id === idDisplay.id) {
            return (
              <div key={product.id} className="paper-container">
                <div className="paper">
                  <div className="main-img">
                    <img src={product.images[idDisplay.index]} alt="" />
                  </div>
                  <div className="info">
                    <div className="text">
                      <span className="title">{product.title}</span>
                      <span className="description">{product.description}</span>
                      <span className="price">${product.price}</span>
                      <ul className="rating">
                        {[...Array(5)].map((_, index) => {
                          const icon = getStarIcon(product.rating, index);
                          return (
                            <li key={index}>
                              {icon && (
                                <FontAwesomeIcon
                                  className="rate filled"
                                  icon={icon}
                                />
                              )}
                              {!icon && (
                                <FontAwesomeIcon
                                  className="rate empty"
                                  icon={faStar}
                                />
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="tumbnail-imgs">
                      <div>
                        <img
                          onClick={() =>
                            setIdDisplay({
                              ...idDisplay,
                              index: idDisplay.index1,
                              index1: idDisplay.index1 === 1 ? 0 : 1,
                            })
                          }
                          src={product.images[idDisplay.index1]}
                          alt=""
                        />
                      </div>
                      <div>
                        <img
                          onClick={() =>
                            setIdDisplay({
                              ...idDisplay,
                              index: idDisplay.index2,
                              index2: idDisplay.index2 === 2 ? 0 : 2,
                            })
                          }
                          src={product.images[idDisplay.index2]}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const existingProducts = JSON.parse(
                      localStorage.getItem("products") ?? []
                    );

                    const newProduct = {
                      id: product.id,
                      title: product.title,
                      price: product.price,
                      img: product.images[0],
                      quantite: 1,
                    };

                    let exist;
                    existingProducts.map((prod) => {
                      if (newProduct.id === prod.id) {
                        exist = true;
                      }
                    });

                    if (!exist) {
                      existingProducts.push(newProduct);
                    }

                    setProductsData(existingProducts);
                    localStorage.setItem(
                      "products",
                      JSON.stringify(productsData)
                    );

                    setDisplay("flex");
                  }}
                  className="btn-shop"
                >
                  Add To Cart
                  <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                </button>
                <button
                  onClick={() =>
                    setIdDisplay({
                      id: null,
                      display: "none",
                      index: 0,
                      index1: 1,
                      index2: 2,
                    })
                  }
                  className="close-btn"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            );
          }
        })}
      </div>
    </main>
  );
}
