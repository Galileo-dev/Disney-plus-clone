import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";
import { RiMovie2Fill, RiTvFill } from "react-icons/ri";
let userName = null;

function Header() {
  return (
    <Nav>
      <Logo src="/Images/Axel_logo.svg" />

      {!userName ? (
        <Login to="/login">LOGIN</Login>
      ) : (
        <>
          <NavMenu>
            {/* Home */}
            <a>
              <AiFillHome size={20} />
              <span>HOME</span>
            </a>
            {/* // */}
            <a>
              <AiOutlineSearch size={20} />
              <span>SEARCH</span>
            </a>
            {/* // */}
            <a>
              <AiOutlinePlus size={20} />
              <span>WATCHLIST</span>
            </a>
            {/* // */}
            <a>
              <AiFillStar size={20} />
              <span>WATCHING</span>
            </a>

            <a>
              <RiMovie2Fill size={20} />
              <span>MOVIES</span>
            </a>

            <a>
              <RiTvFill size={20} />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <UserImg src="/Images/UnderNoCircumstancesShouldThisRunWithoutTheCoconut.webp" />
        </>
      )}
    </Nav>
  );
}

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    margin: 0 16px;
    cursor: pointer;

    span {
      font-size: 13px;
      letter-spacing: 1.42;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: #f9f9f9;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        border-radius: 1px;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(1);
        transition-timing-function: ease-in;
        transition: 0.5s;
      }
    }
  }
`;

const Logo = styled.img`
  width: 80px;
`;

const Login = styled(Link)`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  margin: 10px;
  margin-right: 0;
  transition: all 0.2s ease 0s;
  display: flex;
  margin-left: auto;

  &:hover {
    background-color: #f9f9f9;
    color: black;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
`;

export default Header;
