import MicroSiteNav from "./MicrositeNav"
import UtilitiesPanel from "./UtilitiesPanel"
import DisplayPanel from "./DisplayPanel"
import { useParams } from 'react-router-dom'
import RCB_PLYR_DATA from '../../data/rcb_players.json'
import NotFound from "../404"
import './rcb_FE.css'
function MicroSiteRCB(){
 
    const {plyrID} = useParams()
    const plyr =  RCB_PLYR_DATA.filter(player => player.plyr_id == plyrID || player.plyr_name_id == plyrID )

    return(
        // validating plyr param before rendering it to dom
        //if ply is invalid or doesn't exists it will be redicted to Not found page!
        plyr[0] ? (
        <div className="rcbBody">
        <div className="rcb_microsite">
           <MicroSiteNav plyr={plyr[0]}/>
           <div className="rcb_microsite_page">
           <DisplayPanel plyr={plyr[0]} />
            <div className="rcb_mainpanel">
             <UtilitiesPanel />
            </div>
           </div>        
        </div>
        </div>) : <NotFound />
    )
}

export default MicroSiteRCB