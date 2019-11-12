import React from 'react';
import './styles.scss';
import Logo from './../../assets/graphics/logo.png';

const Header = (props) => (<header>
  <div className="wrap">
    <div className="logo">
      <img src={Logo} alt="Logo"></img>
    </div>
    Test
  </div>
</header>);

export default Header;
