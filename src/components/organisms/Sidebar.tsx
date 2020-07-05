import React from 'react';
import styled from 'styled-components/macro';

const SidebarStyled = styled.div`
  height: 97vh;
  width: 15%;
  background-color: blue;
`

export default function Sidebar() {
  return (
    <SidebarStyled>bar</SidebarStyled>
  );
}
