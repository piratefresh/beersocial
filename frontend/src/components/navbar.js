import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import AvatarImage from "./AvatarImage";

const Navigation = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.yellow};
  width: 100%;
  max-width: 180px;
  height: 100vh;
  padding: 0 3em;
  li {
    list-style: none;
    text-decoration: none;
    margin: 1em 0;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

function NavBar() {
  return (
    <Navigation>
      <ul>
        <li style={{fontSize: "28px"}}>
          <Link to="/">Beer Social</Link>
        </li>
        <li>
          <Link to="/">
            <AvatarImage src="https://images.unsplash.com/photo-1541661538396-53ba2d051eed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80" />
          </Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/beers/">Beers</Link>
        </li>
        <li>
          <Link to="/users/">Users</Link>
        </li>
      </ul>
    </Navigation>
  );
}

export default NavBar;
