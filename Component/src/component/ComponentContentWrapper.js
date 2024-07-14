import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import componentItmes from "../api/componentItmes";
import mainComponentItems from "../api/mainComponentItems";
import MainHome from "./MainHome";
import ComponentDetail from "./ComponentDetail";

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
  padding: 40px;
  background: #f9f9f9;
  border-radius: 0 16px 16px 0;
  gap: 40px;
  overflow: hidden;
`;
const GridContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 1%;
  height: 100%;
  overflow: auto;
`;
const ContentTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
`;
const ListItem = styled.div`
  display: flex;
  justify-content: center;
  min-height: 260px;
  box-shadow: 0 3px 15px rgba(51, 51, 51, 0.2);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
const Home = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2vh;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#493971" : "#fff")};
  background: ${(props) => (props.$active ? "#fff" : "transparent")};
`;
const Blind = styled.span`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

export default function ListNav({ NavList }) {
  const [navIdx, setNavIdx] = useState(0);
  const [componentName, setcomponentNames] = useState("home");
  const [componentItmeList, setComponentItmeList] = useState(null);
  const navigate = useNavigate();
  const handleNav = (index) => {
    navigate("/detail");
    setNavIdx(index);
  };

  useEffect(() => {
    //init
    if (mainComponentItems && navIdx === "home") {
      setcomponentNames(mainComponentItems[0].componentNames);
      setComponentItmeList(mainComponentItems[0].items);
    }
    if (componentItmes) {
      setcomponentNames(componentItmes[0].componentNames);
      setComponentItmeList(componentItmes[0].items);
    }
    console.log(componentItmeList);
  }, []);

  useEffect(() => {
    if (navIdx === "home") {
      setcomponentNames(mainComponentItems[0].componentNames);
      setComponentItmeList(mainComponentItems[0].items);
    } else {
      setcomponentNames(componentItmes[navIdx].componentNames);
      setComponentItmeList(componentItmes[navIdx].items);
    }
  }, [navIdx]);

  const changePath = (title) => {
    navigate(`/detail/${title}`);
  };
  const onClickHome = () => {
    setNavIdx("home");
    navigate("/");
  };

  return (
    <>
      {/* navigation*/}
      <ComponentNav>
        <Home $active={navIdx === "home"} onClick={() => onClickHome()}>
          <FontAwesomeIcon icon={faHouse} />
          <Blind>HOME</Blind>
        </Home>
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
                  {/* <FontAwesomeIcon icon={faHouse} /> */}
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
        <Routes>
          {/* <Route path="/" element={<MainHome />}></Route> */}
          <Route
            path="/"
            element={
              <>
                <ContentTitle>
                  {componentName}
                  {navIdx}
                </ContentTitle>
                <GridContainer>
                  {componentItmeList?.map((item, i) => (
                    <ListItem key={i} onClick={() => changePath(item.title)}>
                      {item.title}
                    </ListItem>
                  ))}
                </GridContainer>
              </>
            }
          ></Route>
          <Route
            path="/detail"
            element={
              <>
                <ContentTitle>
                  {componentName}
                  {navIdx}
                </ContentTitle>
                <GridContainer>
                  {componentItmeList?.map((item, i) => (
                    <ListItem key={i} onClick={() => changePath(item.title)}>
                      {item.title}
                    </ListItem>
                  ))}
                </GridContainer>
              </>
            }
          />
          <Route path="/detail/:id" element={<ComponentDetail />} />
        </Routes>
      </Wrapper>
    </>
  );
}
