import styled from 'styled-components';

export const Container = styled.div`

`;

export const Title = styled.h2`
  margin: 3rem 0 1.5rem;
`

export const EpisodesList = styled.table`
  width: 100%;

  th, td{
    padding: 0.75rem 1rem;
    border-bottom: solid 1px var(--gray-100);
  }

  th{
    color: var(--gray-200);
    text-transform: uppercase;
    font-family: var(--font-title);
    font-size: 0.75rem;
    font-weight: 500;
  }

  td{
    font-size: 0.875rem;

    img{
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.5rem;
      flex-shrink: 0;
    }

    a{
      color: var(--gray-800);
      font-family: var(--font-title);
      font-weight: 600;
      line-height: 1.4rem;
      font-size: 1rem;

      :hover{
        text-decoration: underline;
      }
    }

    button{
      width: 2rem;
      height: 2rem;
      background: var(--white);
      border: solid 1px var(--gray-100);
      border-radius: 0.5rem;
      font-size: 0;
      transition: filter 150ms;

      img{
        width: 1.25rem;
        height: 1.25rem;
      }

      :hover{
        filter: brightness(0.95);
      }
    }
  }
`