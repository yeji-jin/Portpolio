import "./App.css";

import { Reset } from "styled-reset";
import styled from "styled-components";
import ComponentContentWrapper from "./component/ComponentContentWrapper";

const ComponentMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 5%;
  box-shadow: 0 0.5px 0 1px rgba(255, 255, 255, 0.23) inset,
    0 1px 0 0 rgba(255, 255, 255, 0.66) inset, 0 4px 16px rgba(0, 0, 0, 0.12);
`;

//NavList
const NavList = [
  {
    title: "nav-1",
    href: "/nav",
  },
  {
    title: "nav-2",
    href: "/nav",
  },
  {
    title: "nav-3",
    href: "/nav",
  },
  {
    title: "nav-4",
    href: "/nav",
  },
];

function App() {
  return (
    <>
      <Reset />
      <ComponentMain>
        <ComponentContentWrapper NavList={NavList} />
      </ComponentMain>
    </>
  );
}

export default App;
