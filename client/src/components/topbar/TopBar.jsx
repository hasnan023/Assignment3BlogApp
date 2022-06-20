import { Link } from "react-router-dom";
import "./topbar.css"

export default function topbar(){
    const user = false;
    return (
        <div className="top">
          <div className="topLeft">
          <i className="topIcon fa-brands fa-facebook-square"></i>
          <i className="topIcon fa-brands fa-instagram-square"></i>
          <i className="topIcon fa-brands fa-twitter-square"></i>
          <i className="topIcon fa-brands fa-pinterest-square"></i>
          </div>
          <div className="topCenter">
              <ul className="topList"> 
                  <li className="topListItem">
                      <Link className="link" to="/Home">Home</Link></li>
                  <li className="topListItem">
                  <Link className="link" to="/About">About</Link></li>
                    <li className="topListItem">  
                    <Link className="link" to="/Contact">Contact</Link>  
                    </li>  
                  <li className="topListItem">
                  <Link className="link" to="/write">Write</Link>
                  </li>
                  <li className="topListItem">
                      {user && "Logout"}
                  </li>
              </ul>
          </div>
          <div className="topRight">
              {
                  user ? (
                    <img 
                    className="topImg"
                    src="https://images.pexels.com/photos/7569012/pexels-photo-7569012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="alternatetext"
                    />
                  ) : (
                      <ul className="topList">
                          <li className="topListItem">
                              <Link className="link" to="/login">login</Link>
                          </li>
                          <li>
                          <Link className="link" style={{marginLeft : '.7rem'}} to="/Register">Register</Link>
                          </li>
                      </ul>
                  )
              }
           
           <i className="topSearchIcon fa-brands fa-searchengin"></i>
           </div>
        </div>
    )
}