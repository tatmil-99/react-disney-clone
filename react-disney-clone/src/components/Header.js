import React from 'react'
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { useDispatch , useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { 
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails, 
  setSignOutState,  
} from "../features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if(user) {
        setUser(user)
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    try {
      auth.signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      });
    } catch (error) {
      alert(error.message);
    }
  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  }

  return (
    <Nav>
      <Logo>
        <img src="./images/logo.svg" alt="Disney+"></img>
      </Logo>
      {!userName ? (
        <Login onClick={handleAuth}>LOGIN</Login> 
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="./images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a>
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="SERIES" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} alt={userName} />
        </>
      )}
    </Nav>
  )
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
    }

    &:hover  {
      opacity: 0.5;
    }
  }


  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 100%;

`;

export default Header
