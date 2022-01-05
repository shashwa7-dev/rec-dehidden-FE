import React from "react";
import MicroSitePhygitals from "./components/PhygyFE/Microsite";
import MicroSiteRCB from "./components/RcbFE/Microsite";
import NotFound from "./components/404";
import { Route, Routes} from 'react-router-dom'

/*
Incase hosting of fleek.co
> IPFS gateways url are formatted in the following manner ipfs.io/ipfs/$hash. As such, the SPA might think that the root of the application is ipfs.io instead of ipfs.io/ipfs/$hash. For this reason, we recommend apps use hash routing to minimize such errors when using an IPFS gateway.

> Adding a hash router in React: https://reactrouter.com/web/api/HashRouter
> basename attribute is basically is prefixer for our has routes
*/

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Routes>
        <Route path="/phygitals/kit/" element={<MicroSitePhygitals />}/>
        <Route path="/rcb/:plyrID" element={<MicroSiteRCB/>}/>
        <Route path="*" element ={<NotFound />}/>
      </Routes>
    </div>
  );
  }
}

export default App;
