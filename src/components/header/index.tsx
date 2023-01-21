import {Head, ImageStyle, Title} from './style';
import React from 'react';
import Profile from '../../assets/profilePicture.jpg';
const Header = () => (
  <Head>
    <Title>CryptoTracker Pro</Title>
    <ImageStyle source={Profile} />
  </Head>
);
export default Header;