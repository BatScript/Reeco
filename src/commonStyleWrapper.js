import styled from 'styled-components'

export const CommonStyledWrapper = styled.div`
  .bordered {
    border-radius: 0.3rem;
    padding: 0.3rem;
    border: 1px solid black;
    background: transparent;
  }
  .filled {
    border-radius: 0.3rem;
    padding: 0.3rem;
    border: 1px solid black;
    background: #333;
    color: white;
  }

  .shell {
    border: 1px solid grey;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
  }
`
