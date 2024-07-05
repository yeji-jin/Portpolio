import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ComponentNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 30px 0 30px 30px;
  border-radius: 16px 0 0 16px;
  gap: 8px;
  background: #493971;
  color: #fff;
`;
const NavList = [
  {
    title: 'nav-1',
    href: '/nav'
  },
  {
    title: 'nav-2',
    href: '/nav'
  },
  {
    title: 'nav-3',
    href: '/nav'
  },
  {
    title: 'nav-4',
    href: '/nav'
  }
];
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
  color: ${(props) => (props.$active ? '#000' : '#fff')};
  background: ${(props) => (props.$active ? '#fff' : '#493971')};
  border-radius: ${(props) => (props.$active ? '26px 0 0 26px' : '20px')};
  /* border-radius: 24px; */
  /* &:after {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    width: 92%;
    height: 100%;
    border-radius: 24px;
    background-color: ${(props) => (props.$active ? '#fff' : '#493971')};
  } */
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
      content: '';
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
      content: '';
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
export default function ListNav() {
  const [navIdx, setNavIdx] = useState(0);
  const handleNav = (index) => {
    setNavIdx(index);
  };

  useEffect(() => {
    setNavIdx(0);
  }, []);

  return (
    <ComponentNav>
      <h1>LOGO</h1>
      <ul>
        {NavList.map((list, i) => {
          return (
            <>
              <NavItem
                key={list.title}
                className={navIdx === i ? 'active' : ''}
                $active={navIdx === i}
                onClick={() => {
                  handleNav(i);
                }}
              >
                {navIdx === i && <LimeDeco />}
                <FontAwesomeIcon icon={faHouse} />
                {list.title}
                {navIdx === i && <LimeDeco />}
              </NavItem>
            </>
          );
        })}
      </ul>
    </ComponentNav>
  );
}
