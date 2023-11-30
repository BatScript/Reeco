import styled from 'styled-components'

export const NavbarStyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333; /* Set your desired background color */
  padding: 10px;
  color: #fff;

  .brandText {
    font-size: 1.5rem; /* Set your desired font size */
    font-weight: bold;
    margin: 0;
  }

  ul {
    list-style: none;
    display: flex;
    column-gap: 10px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }

  .leftSection {
    display: flex;
    align-items: center;
  }

  .rightSection {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;

    .invisible {
      background: transparent;
      border: none;
      padding: 0.75rem;
      cursor: pointer;
      color: #fff;
    }
  }
`
