import './popup.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark,} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Popup({popupDisplay ,setPopupDisplay , setUserDisplay}) {

    window.onload = () => {
        setTimeout(() => {
            setPopupDisplay('flex');
        }, 3000);
    }

  return (
    <div style={{display:popupDisplay}} className='popup-container'>
        <div className='popup'>
            <p>Became a <span>KMM Member</span> <br /> and Get <span>50%</span> Discount !</p>

            <div className='img-discount'>
                <img src="/public/images/discount.jpeg" alt="" />
            </div>

           <button className='subscribe-btn' onClick={() => {
             setPopupDisplay('none');
             setUserDisplay('flex');
           }}>
            Subscribe Now
           </button>

            <button onClick={() => setPopupDisplay('none')} className="close-popup">
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    </div>
  )
}
