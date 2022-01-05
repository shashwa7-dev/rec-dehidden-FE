import React from "react";
//IMG imports
import eiffil from '../../static/media/eiffil.png' 
import goggles from '../../static/media/goggles.png'
import teddy  from '../../static/media/teddy.png'
import saturn from '../../static/media/saturn.png'

function RenderUtilityItem({data}){

   if(data.id === 2){
     return(
        <a key={data.id} onClick={(e) => alert('You must download our AR app!')}>
        <div className="rcb_utility">
          <div className="rcb_utility_icon">
            <img src={data.img_src} alt="" />
          </div>
          <div className="rcb_utility_text">
            <div className="rcb_utility_heading">{data.head}</div>
            <div className="rcb_utility_subheading">
              {data.sub_head}
            </div>
          </div>
        </div>
        </a>
     )
   }else{
    return(
        <a href={data.url} key={data.id}  rel='noopener' rel="noreferrer">
        <div className="rcb_utility">
          <div className="rcb_utility_icon">
            <img src={data.img_src} alt="" />
          </div>
          <div className="rcb_utility_text">
            <div className="rcb_utility_heading">{data.head}</div>
            <div className="rcb_utility_subheading">
              {data.sub_head}
            </div>
          </div>
        </div>
      </a>
    )
    }
}
function UtilitiesPanel() {
   let items = [
    {  
    id:1,      
    img_src:eiffil,
    head:'View on IPFS',
    sub_head:'Your NFT data stored safely forever',
    url:''
   },
   {
    id:2,
    img_src:goggles,
    head:'View AR experience',
    sub_head:'See how your NFT looks in augmented reality',
    url:''
   },
   {
    id:3,
    img_src: teddy ,
    head:'Download 3D Model',
    sub_head:'Instantly get acccess to the blend file',
    url:''
   },
   {
    id: 4,
    img_src: saturn,
    head:'Join the community',
    sub_head:'Unlock Community access with your NFT',
    url:''
 }
]
  return (
    <div className="rcb_utilities">
      <div className="rcb_utilities_container">
       {items.map(item => <RenderUtilityItem data={item} />)}
      </div>
    </div>
  );
}

export default UtilitiesPanel;
