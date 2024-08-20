/* eslint-disable react/prop-types */
import "./cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faCirclePlus,
  faCircleMinus,
  faShoppingCart,
  faTrashAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Cart({
  display,
  setDisplay,
  productsData,
  setProductsData,
}) {
  if (!Array.isArray(productsData)) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const updatDataProducts = productsData.filter((pr) => pr.quantite > 0);

    // Check if the filtered data is different from the current data
    if (JSON.stringify(updatDataProducts) !== JSON.stringify(productsData)) {
      setProductsData(updatDataProducts);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [payDisplay, setPayDisplay] = useState({
    d: "none",
    im: null,
    t: null,
    p: null,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form, setForm] = useState({
    cardNum: "",
    exp: "",
    cvc: "",
    country: "",
  });

  // Validation functions
  const validateCardNum = (num) => /^\d{4} \d{4} \d{4} \d{4}$/.test(num);
  const validateExp = (exp) => /^\d{2}\/\d{2}$/.test(exp);
  const validateCvc = (cvc) => /^\d{3}$/.test(cvc);
  const validateCountry = (country) => country.trim().length > 3; // Add more validation if needed

  const isFormValid = () => {
    return (
      validateCardNum(form.cardNum) &&
      validateExp(form.exp) &&
      validateCvc(form.cvc) &&
      validateCountry(form.country)
    );
  };

  return (
    <div style={{ display: display }} className="cart-container">
      <div className="cart">
        {productsData.length > 0 ? (
          productsData.map((product) => (
            <div className="prod" key={product.id}>
              <div className="info">
                <div className="img-container">
                  <img src={product.img} alt="" />
                </div>
                <div className="spns">
                  <span className="title">{product.title}</span>
                  <span className="price">
                    ${(product.price * product.quantite).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="buy">
                <div className="minus-plus-quantite">
                  <button
                    onClick={() => {
                      const updatedProducts = productsData.map((p) =>
                        p.id === product.id
                          ? { ...p, quantite: p.quantite - 1 }
                          : p
                      );
                      setProductsData(updatedProducts);
                    }}
                  >
                    <FontAwesomeIcon fontSize={"18px"} icon={faCircleMinus} />
                  </button>
                  <span className="quantite">{product.quantite}</span>
                  <button
                    onClick={() => {
                      const updatedProducts = productsData.map((p) =>
                        p.id === product.id
                          ? { ...p, quantite: p.quantite + 1 }
                          : p
                      );
                      setProductsData(updatedProducts);
                    }}
                  >
                    <FontAwesomeIcon fontSize={"18px"} icon={faCirclePlus} />
                  </button>
                </div>

                <div className="buy-or-delete">
                  <button
                    onClick={() => {
                      const updatDataProducts = productsData.filter((pr) => {
                        return pr.id !== product.id;
                      });

                      setProductsData(updatDataProducts);
                    }}
                  >
                    <FontAwesomeIcon fontSize={"15px"} icon={faTrashAlt} />
                  </button>

                  {/* ================================================================================================================================== */}

                  <div
                    className="pay-container"
                    style={{ display: payDisplay.d }}
                  >
                    <div className="pay">
                      <div className="p-info">
                        <div className="img-container">
                          <img src={payDisplay.im} alt="" />
                        </div>

                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          <span className="p-title">{payDisplay.t}</span>
                          <span className="p-price">${payDisplay.p}</span>
                        </div>
                      </div>

                      <form className="form" action="">
                        <label className="card-number">
                          <span className="lbl">Card Number</span>
                          <div className="wrapper-inp">
                            <input
                              onChange={(e) => {
                                setForm({ ...form, cardNum: e.target.value });
                              }}
                              value={form.cardNum}
                              name="card-number"
                              required
                              type="text"
                              placeholder="1234 1234 1234 1234"
                              pattern="\d{4} \d{4} \d{4} \d{4}"
                              aria-label="Card Number"
                              autoComplete="off"
                            />
                            <div>
                              <img src="./images/visa.png" alt="Visa" />
                              <img
                                src="./images/master-card.png"
                                alt="MasterCard"
                              />
                            </div>
                          </div>
                        </label>

                        <div className="evc">
                          <label className="exp-cvc">
                            <span className="lbl">Expiration</span>
                            <input
                              onChange={(e) => {
                                setForm({ ...form, exp: e.target.value });
                              }}
                              value={form.exp}
                              name="expiration"
                              required
                              type="text"
                              placeholder="MM/YY"
                              pattern="\d{2}/\d{2}"
                              aria-label="Expiration Date"
                              autoComplete="off"
                            />
                          </label>

                          <label className="exp-cvc">
                            <span className="lbl">CVC</span>
                            <div className="cvc-wrapper-inp">
                              <input
                                onChange={(e) => {
                                  setForm({ ...form, cvc: e.target.value });
                                }}
                                value={form.cvc}
                                name="cvc"
                                className="cvc"
                                required
                                type="text"
                                placeholder="000"
                                pattern="\d{3}"
                                aria-label="CVC"
                                autoComplete="off"
                              />
                              <span>
                                <FontAwesomeIcon icon={faCreditCard} />
                              </span>
                            </div>
                          </label>
                        </div>

                        <label className="exp-cvc">
                          <span className="lbl">Country</span>
                          <input
                            value={form.country}
                            name="country"
                            required
                            placeholder="Your Country"
                            onChange={(e) => {
                              setForm({ ...form, country: e.target.value });
                            }}
                            className="country"
                            type="text"
                            autoComplete="off"
                          />
                        </label>

                        <button
                          disabled={!isFormValid()}
                          onClick={(e) => {
                            e.preventDefault();
                            setTimeout(() => {
                              location.reload();
                            }, 1000);
                          }}
                          className="buy"
                        >
                          Buy
                        </button>
                      </form>

                      <button
                        onClick={() =>
                          setPayDisplay({
                            d: "none",
                            im: null,
                            t: null,
                            p: null,
                          })
                        }
                        className="close-pay-btn"
                      >
                        <FontAwesomeIcon icon={faXmark} />
                      </button>
                    </div>
                  </div>

                  {/* ================================================================================================================================== */}

                  <button
                    onClick={() =>
                      setPayDisplay({
                        d: "flex",
                        im: product.img,
                        t: product.title,
                        p: (product.price * product.quantite).toFixed(2),
                      })
                    }
                  >
                    <FontAwesomeIcon fontSize={"15px"} icon={faShoppingCart} />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#000", textAlign: "center" }}>
            Your cart is empty !
          </p>
        )}

        <button onClick={() => setDisplay("none")} className="close-btn">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
