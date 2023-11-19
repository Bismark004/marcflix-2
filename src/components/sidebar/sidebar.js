import React, { useState } from 'react';
import '../sidebar/sidebar.css';
import Logo from '../../Images/Icons/tv.png';
import Left from '../../Images/Icons/bxs-chevron-left-circle.png';
import SearchIcon from '../../Images/Icons/Search.png';

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <header>
        <div className="logo-text">
          <div className="logo-icon">
            <img src={Logo} alt='logo' />
          </div>
          <div className="logo-text text">
            <h1>Marcflix</h1>
          </div>
        </div>
        <img src={Left} alt='left' className='toggler' onClick={toggleSidebar}/>
      
      </header>

      <div className="menu-bar">
        <div className="search-box" >
          <img src={SearchIcon} alt='search' className='icon'/>
          <input type='text' placeholder='search...'/>
        </div>
      </div>
     
    </div>
  );
}

export default Sidebar;
