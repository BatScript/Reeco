import styled from 'styled-components'

export const OrderStyledWrapper = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  border-bottom: 1px solid grey;

  .rightSection {
    display: flex;
    align-items: flex-end;
    column-gap: 0.5rem;
    .bordered {
      border-radius: 0.3rem;
      padding: 0.3rem;
      border: 1px solid black;
      background: transparent;
    }
  }

  .leftSection {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    h1{
        margin: 0
    }
  }
`
