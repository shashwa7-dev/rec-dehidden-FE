import React from "react";
import opensealogo from '../static/media/opensealogo.svg'

function DisplayPanel({ plyr }) {
  return (
    <div className="nftdisplay">
      <div className="nftdisplay_container">
        <div className="nftdisplay_nft">
          <video src={plyr.vid_url} autoPlay loop muted playsInline></video>
        </div>
        <div className="nftname">{plyr.player_name}</div>
        <div className="nftnumber">#{plyr.plyr_id}</div>
        <div className="aboutbutton">
            <button className="button primary">
            <img src={opensealogo} alt='opensea-logo'/>
            <span> <a href='https://opensea.io/' target='_blank'>View NFT</a></span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayPanel;
