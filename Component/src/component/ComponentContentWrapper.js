import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Route, Routes } from "react-router-dom";
import componentItmes from "../api/componentItmes";

// nav
const ComponentNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 30px 0 30px 30px;
  border-radius: 16px 0 0 16px;
  gap: 8px;
  background: #493971;
  color: #fff;
  @media only screen and (max-width: 1000px) {
    padding: 24px 0 24px 16px;
  }
`;
const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px 16px 20px 24px;
  width: 100%;
  margin-top: 4%;
  z-index: 1;
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props.$active ? "#000" : "#fff")};
  background: ${(props) => (props.$active ? "#fff" : "#493971")};
  border-radius: ${(props) => (props.$active ? "26px 0 0 26px" : "20px")};
  @media only screen and (max-width: 1000px) {
    .list-title {
      display: none;
    }
  }
`;
const LimeDeco = styled.span`
  position: absolute;
  right: 0;
  width: 100%;
  height: 10px;
  background: #fff;
  &:first-child {
    top: -14px;
    width: 100%;
    height: 14px;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom-right-radius: 20px;
      background: rgb(73, 57, 113);
    }
  }
  &:last-child {
    bottom: -14px;
    width: 100%;
    height: 14px;
    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-top-right-radius: 20px;
      background: rgb(73, 57, 113);
    }
  }
`;
// list
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px 40px;
  background: #f9f9f9;
  border-radius: 0 16px 16px 0;
  gap: 40px;
  overflow-y: auto;
`;
const GridContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  height: 100%;
`;
const ListItem = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
`;

export default function ListNav({ NavList }) {
  const [navIdx, setNavIdx] = useState(0);
  const [componentName, setcomponentNames] = useState(0);
  const [componentItmeList, setComponentItmeList] = useState(null);
  const handleNav = (index) => {
    setNavIdx(index);
  };

  useEffect(() => {
    //init
    if (componentItmes) {
      setcomponentNames(componentItmes[0].componentNames);
      setComponentItmeList(componentItmes[0].items);
    }
    console.log(componentItmeList);
  }, []);

  useEffect(() => {
    setcomponentNames(componentItmes[navIdx].componentNames);
    setComponentItmeList(componentItmes[navIdx].items);
  }, [navIdx]);

  // const navigate = useNavigate();
  const changePath = (title) => {
    // navigate(`/details/${title}`);
  };

  return (
    <>
      {/* navigation*/}
      <ComponentNav>
        <h1>LOGO</h1>
        <ul>
          {NavList.map((list, i) => {
            return (
              <>
                <NavItem
                  key={i}
                  className={navIdx === i ? "active" : ""}
                  $active={navIdx === i}
                  onClick={() => {
                    handleNav(i);
                  }}
                >
                  {navIdx === i && <LimeDeco />}
                  <FontAwesomeIcon icon={faHouse} />
                  <span className="list-title">{list.title}</span>
                  {navIdx === i && <LimeDeco />}
                </NavItem>
              </>
            );
          })}
        </ul>
      </ComponentNav>
      {/* items */}
      <Wrapper>
        <h2>{componentName}</h2>
        <GridContainer>
          {componentItmeList?.map((item, i) => {
            return (
              <ListItem key={i} onClick={() => changePath(item.title)}>
                {item.title}
              </ListItem>
            );
          })}
        </GridContainer>
      </Wrapper>
    </>
  );
}
