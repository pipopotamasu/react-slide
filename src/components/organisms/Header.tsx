import React from 'react';
import styled from 'styled-components/macro';

const HeaderStyled = styled.header`
  height: 3vh;
  width: 100%;
  background-color: red;
`

export default function Header() {
  return (
    <HeaderStyled>foo</HeaderStyled>
  );
}
