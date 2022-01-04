import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found" style={{ height:'100vh', width:'100vw', display:'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', magin:'auto',fontSize:"3rem"}}>
      <h2>Sorry :(</h2>
      <p>Wrong Route!</p>
      <Link to="/rcb/1">
       <button style={{padding:"1rem", outline: 'none', borderRadius: '5px', fontSize:'1rem', fontWeight:'bold',  backgroundColor:'wheat'}}>Redirect to RCB home!</button> 
      </Link>
    </div>
  );
}
 
export default NotFound;