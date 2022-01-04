import MicroSiteNav from "./MicrositeNav"
import UtilitiesPanel from "./UtilitiesPanel"
import DisplayPanel from "./DisplayPanel"
import { useParams } from 'react-router-dom'
import {Navigate} from 'react-router-dom'
import RCB_PLYR_DATA from '../data/rcb_players.json'

function MicroSite(){
 
    const {plyrID} = useParams()
    const plyr =  RCB_PLYR_DATA.filter(player => player.plyr_id == plyrID || player.plyr_name_id == plyrID )

    return(
        <div className="microsite">
           {plyr && <MicroSiteNav plyr={plyr[0]}/>}
           <div className="microsite_page">
           {plyr && <DisplayPanel plyr={plyr[0]} />}
            <div className="mainpanel">
             {plyr && <UtilitiesPanel />}
            </div>
           </div>        
        </div>
    )
}

export default MicroSite