import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebaritem">
          <span className="sidebarTitle">About Me</span>
      <img className="sidebarImg"
       src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      alt="" 
      />
      <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </p>
      </div>
      
      <div className="sidebarItem">
          <span className="sidebarTitle">Categories</span>
          <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sports</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
</ul>
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">Follow Us</span>
          <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          <i className="sidebarIcon fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
          </div>
      </div>
    </div>
  )
}
