import React from "react";
import logo from '../../static/media/logo.svg' //img import
import config from "./config";

//handleCopy Mehtod
const handleCopy = (e, link) => {
    e.preventDefault(); //prevents refresh
    navigator.clipboard.writeText(link);  //copys text to clipboard
    if (window.innerWidth < 991) {
      document.querySelector(".rcb_copytext_mobile").style.display = "block";

      setTimeout(() => {
        document.querySelector(".rcb_copytext_mobile").style.display = "none";
      }, 1000);
    } else {
      document.querySelector('.btn-txt').innerText = "Copied!"

      setTimeout(() => {
        document.querySelector('.btn-txt').innerHTML = "Copy"
      }, 1000);
    }
  };

function MicroSiteNav({plyr}) {
  return (
    <div>
      <div className="rcb_microsite_nav">
        <div className="rcb_logo">
          <img src={logo} alt="Dehidden-logo" />
        </div>
      </div>
      <div className="rcb_right_nav">
        <div className="rcb_linkbar">
          <div className="rcb_linkbar_text">
          <span>https://verify.dehidden.com/rcb/</span>
          </div>
          <button className="rcb_button rcb_primary" onClick={(e) =>
              handleCopy(
                e,
                `${config.baseUrl}/rcb/${plyr.plyr_name_id}`
              )
            }>
          <span className='btn-txt'><i className="fa fa-copy"></i>Copy</span>
          </button>
        </div>
        <div
          className="rcb_mobile_copy rcb_primary"
          onClick={(e) =>
            handleCopy(e, `${config.baseUrl}/rcb/${plyr.plyr_name_id}`)
          }> <i className="fa fa-copy"></i> </div>
        <div className="rcb_copytext_mobile">Copied to Clipboard!</div>
      </div>
    </div>
  );
}

export default MicroSiteNav;
