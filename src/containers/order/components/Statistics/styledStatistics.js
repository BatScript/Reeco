import styled from 'styled-components'

export const StatisticsStyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.5rem;
    border: 1px solid grey;
    margin: 1rem;
    border-radius: 0.5rem;

    .section {
        width: 100%;
        padding: 1rem;
        .key {
            font-size: 10px;
        }
        .value{
            font-size: 16px;
            font-weight: bold;
        }
    }
`
