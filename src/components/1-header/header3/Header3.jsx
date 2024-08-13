import "./header3.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight , faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

import { categoriesWithIcons } from "../../3-main/Products";



// eslint-disable-next-line react/prop-types
export default function Header3({setActive}) {
  
  const [disp , setDisp] = useState('none')

  const r = useRef(null);

  useEffect(() => {
    document.addEventListener('click' , (e) => {
      if (r.current !== e.target){
        setDisp('none')
      }
    })
  }, [])

  return (
    <div className="container h3">
      <button ref={r} onClick={() => {
        setDisp(disp === 'none' ? 'block' : 'none')
      }}>

        <span className="left">

          <span>
            <FontAwesomeIcon icon={faWindows} />
          </span>
          
          <span>Categories</span>

        </span>

        <span className="right">
          <FontAwesomeIcon style={{fontSize:'13px'}} icon={ disp === 'none' ? faChevronRight : faChevronDown} />
        </span>

        <ul style={{display:disp}} className="list">
             {categoriesWithIcons.map((item) => {
                return (
                  <li key={item.title}>
                    <a onClick={() => setActive(() => item.title)}  href="#products">
                      <span>
                        <FontAwesomeIcon icon={item.ic} />
                        {item.title}
                      </span>
                      <FontAwesomeIcon style={{fontSize:'11px'}} icon={faChevronRight} />
                    </a>
                    
                  </li>
               )
             })}
        </ul>

      </button>
    </div>
  );
}
