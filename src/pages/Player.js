import React from 'react';
import { Link } from 'react-router-dom';
import {Logo} from "../images/Netflix";
import {ConnectButton, Icon } from 'web3uikit';
import { useLocation } from 'react-router-dom';

const Player = () => {
  const {state: currentlyPlaying} = useLocation();
  return (
  <>
  
  <div className="logo">
    <Link to="/" ><Logo /></Link>
  </div>
  <div>
    <div className="connect">
      <Icon fill="#ffffff" svg="bell"  /> 
      <ConnectButton/>
    </div>
  </div>
  <div className="playerPage">
    <video autoPlay controls className="videoPlayer">
      <source src={currentlyPlaying} type="video/mp4"></source>
    </video> 
    <div className="backHome">
      <Link to="/">
      <Icon className="backButton" fill='rgba(255,255,255,0.25)' size={60} svg="arrowCircleLeft"/>
      </Link>
    </div>
  </div>
  
  </>
)
}

export default Player;
