import styled from 'styled-components'

export const ModalStyledWrapper = styled.div`
  .header {
    text-align: left;
    .name {
      font-size: 1.2rem;
      color: black;
      font-weight: bolder;
    }
    .brand {
      color: #696969;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .image {
      border: 1px solid grey;
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .table {
      width: 50%;
      margin: 0 1rem;
    }

    .cell {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1rem 0;

      .quantity {
        width: 10rem;
        &.controlled {
          display: flex;
          align-items: center;
          column-gap: 0.5rem;
        }
        input {
          max-width: 5rem;
          padding: 0.5rem;
          border: 1px solid grey;
          border-radius: 0.5rem;
        }
      }
    }
  }
`
