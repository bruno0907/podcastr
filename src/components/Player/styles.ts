import styled, { css } from 'styled-components';

interface IFooter{
  empty: boolean;
}

export const Container = styled.div`
  width: 26.5rem;
  min-height: 100vh;
  padding: 3rem 4rem;
  background: var(--purple-500);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;

    strong{
      font-family: var(--font-title);
      font-weight: 600;
    }
`

export const PlayerWithNoEpisode = styled.div`
  width: 100%;
  height: 20rem;
  border: dashed 3.5px var(--purple-300);
  border-radius: 1.5rem;
  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
  padding: 4rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PlayerWithEpisode = styled.div`
  text-align: center;
  margin-top: 2rem;

  img{
    border-radius: 1.5rem;    
    width: 18rem;
    height: 21rem;
  }  


  h4{
    display: block;
    margin-top: 2rem;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5rem;    
    color: var(--white);
  }

  p{
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5rem;
  }
`

export const Footer = styled.footer<IFooter>`
  align-self: stretch;

  ${({ empty }) => empty && css`opacity: 0.5;`}
`

export const PlayerProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

    span{
      display: inline-block;
      width: 4rem;
      text-align: center;
    }
`
export const ProgressSlider = styled.div`
  flex: 1;  
`

export const EmptySlider = styled.div`  
  width: 100%;
  height: 4px;
  background: var(--purple-300);
  border-radius: 2px;
`

export const PlayerControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.5rem;
  gap: 1.5rem;
`


export const Control = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
  transition: filter 150ms;

  :hover:not(:disabled){
    filter: brightness(0.7);
  }
  
  :disabled{
    cursor: default;
  }
  
` 

export const PlayControl = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--purple-400);
  transition: filter 150ms;

  :hover:not(:disabled){
    filter: brightness(0.95);
  }

  :disabled{
    cursor: default;
  }
  
`