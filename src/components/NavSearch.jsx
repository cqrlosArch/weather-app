import React, { useState } from 'react';
import styled from 'styled-components';

const NavSearchStyled = styled.div`
  width: 100%;
  height: 100vh;
  top: 0;
  z-index: 10;
  position: absolute;
  background-color: #1e213a;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transform: ${({ visible }) =>
    visible ? 'translate(0)' : 'translate(-110%)'};
  transition: transform 0.3s ease-in-out;
  .icon-close {
    align-self: flex-end;
    margin-bottom: 2rem;
    cursor: pointer;
  }
  .form_search {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form_input {
    outline: none;
    border: none;
    width: 168px;
    height: 38px;
    border: 1px solid #e7e7eb;
    background-color: inherit;
    padding: 0.5rem;
    padding-left: 3rem;
    color: #616475;
    position: relative;
    &:focus {
      color: #fff;
    }
  }
  .icon {
    position: absolute;
    left: 30px;
    color: #616475;
  }
  .form_button {
    outline: none;
    border: none;
    width: 66px;
    height: 38px;
    background: #3c47e9;
    font-size: 14px;
    color: #e7e7eb;
    cursor: pointer;
  }
`;

//TODO hacer el ciere del menu en css

const NavSearch = ({ visible, closeMenu, handleSearch }) => {
  const [search, setSearch] = useState('');

  const sendSearch = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch('');
    closeMenu();
  };
  return (
    <NavSearchStyled visible={visible}>
      <span class="material-icons icon-close" onClick={closeMenu}>
        close
      </span>
      <form className="form_search">
        <input
          type="text"
          className="form_input"
          placeholder={'search location'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span class="material-icons icon">search</span>
        <button className="form_button" onClick={(e) => sendSearch(e)}>
          Search
        </button>
      </form>
    </NavSearchStyled>
  );
};

export default NavSearch;
