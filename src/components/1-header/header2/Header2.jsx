/* eslint-disable react/prop-types */
import "./header2.css";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { categories } from "../../3-main/Products";

// eslint-disable-next-line react/prop-types
export default function Header2({ setActive, setDisplay, productsData, setUserDisplay, search, setSearch }) {
  const [disp, setDisp] = useState('none');
  const r = useRef(null);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (r.current && !r.current.contains(e.target) && !categoriesRef.current.contains(e.target)) {
        setDisp('none');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [cat, setCat] = useState('All Categories');

  return (
    <div className="container h2">
      <div className="left">
        <div style={{ position: 'relative' }}>
          <div className="input-wrapper">
            <a href="#products" className="search-btn">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <input
              value={search}
              name="search"
              onChange={(e) => setSearch(e.target.value)}
              className="search"
              type="text"
              placeholder="Searching For ..."
            />
            <button
              ref={r}
              onClick={() => setDisp(disp === 'none' ? 'block' : 'none')}
              className="categories"
              aria-haspopup="true"
              aria-expanded={disp === 'block'}
            >
              {cat}
              <FontAwesomeIcon style={{ fontSize: '13px' }} icon={faChevronDown} />
            </button>
          </div>
          <ul
            ref={categoriesRef}
            style={{ display: disp }}
            className="categories-list"
          >
            {categories.map((item) => (
              <li
                onClick={() => {
                  setCat(item);
                  setActive(item);
                }}
                key={item}
              >
                <a href="#products">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="right">
        <button onClick={() => setUserDisplay('flex')} className="user">
          <FontAwesomeIcon style={{ color: '#939BAD', fontSize: '20px' }} icon={faUser} />
        </button>
        <button onClick={() => setDisplay('flex')} className="shop">
          <FontAwesomeIcon style={{ color: '#939BAD', fontSize: '26px' }} icon={faBagShopping} />
          {productsData.length > 0 && <span className="badge">{productsData.length}</span>}
        </button>
      </div>
    </div>
  );
}
