import React from 'react';
import styled from 'styled-components/macro';

const SidebarStyled = styled.div`
  height: 100%;
  width: 15%;
  min-width: 200px;
  background-color: blue;
`

export default function Sidebar() {
  return (
    <SidebarStyled>bar</SidebarStyled>
  );
}
