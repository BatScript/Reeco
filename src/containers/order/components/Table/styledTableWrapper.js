import styled from 'styled-components'

export const TableStyledWrapper = styled.div`
  margin: 0 1rem 3rem 1rem;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 0.5rem;

  .tableNav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      padding: 0.5rem;
      border-radius: 1rem;
      border: 1px solid grey;
    }

    .bordered {
      border-radius: 0.3rem;
      padding: 0.3rem;
      border: 1px solid black;
      background: transparent;
    }
  }

  .tableContent {
    padding: 1rem 0;
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    table {
      width: 100%;
      border-radius: 0%.5rem 0;

      .description {
        display: flex;
        align-items: center;
        column-gap: 1rem;
      }
    }
    th,
    td {
      padding: 8px;
      text-align: left;
    }

    th {
      &:first-child {
        border-top-left-radius: 0.5rem;
      }
      &:last-child {
        border-top-right-radius: 0.5rem;
      }
    }

    .tableHeader {
      background-color: #f2f2f2;
    }

    .approval {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
      column-gap: 0.5rem;

      .status {
        font-size: 0.8rem;
        background: green;
        padding: 0.3rem 0.5rem;
        border-radius: 1rem;
        color: white;
      }

      .missing {
        background: orange;
      }

      .missing-urgent {
        background: red;
      }

      .actionContainer {
        display: flex;
        align-items: center;
        column-gap: 0.5rem;
      }
    }
  }
`
