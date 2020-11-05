import React from 'react';
import styled from 'styled-components';

const NavSearchStyled = styled.div``;

const Nav_search = () => {
  return (
    <NavSearchStyled>
      <form>
        <input type="text" />
        <button>Search</button>
      </form>
    </NavSearchStyled>
  );
};

export default Nav_search;
