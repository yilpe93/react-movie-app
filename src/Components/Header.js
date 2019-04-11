import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 10px;
  color: white;
  background: rgba(20, 20, 20, 0.6);
  z-index: 10;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  text-align: center;
  border-bottom: 5px solid
    ${props => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

// const HeaderComponent = props => (
//   <Header>
//     {console.log(props)}
//     <List>
//       <Item current={true}>
//         <SLink to="/">Movies</SLink>
//       </Item>
//       <Item current={false}>
//         <SLink to="/tv">TV</SLink>
//       </Item>
//       <Item current={true}>
//         <SLink to="/search">Search</SLink>
//       </Item>
//     </List>
//   </Header>
// );

// export default withRouter(HeaderComponent);
