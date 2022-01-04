import MicroSiteNav from "./MicrositeNav"
import UtilitiesPanel from "./UtilitiesPanel"
import DisplayPanel from "./DisplayPanel"
import { useParams } from 'react-router-dom'
import RCB_PLYR_DATA from '../data/rcb_players.json'
import NotFound from "./404"

function MicroSite(){
 
    const {plyrID} = useParams()
    const plyr =  RCB_PLYR_DATA.filter(player => player.plyr_id == plyrID || player.plyr_name_id == plyrID )

    return(
        // validating plyr param before rendering it to dom
        plyr[0] ? (
        <div className="microsite">
           <MicroSiteNav plyr={plyr[0]}/>
           <div className="microsite_page">
           <DisplayPanel plyr={plyr[0]} />
            <div className="mainpanel">
             <UtilitiesPanel />
            </div>
           </div>        
        </div>) : <NotFound />
    )
}

export default MicroSite