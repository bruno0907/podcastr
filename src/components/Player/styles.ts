import styled, { css } from 'styled-components';

interface IFooter{
  empty: boolean;
}

export const Container = styled.div`
  width: 26.5rem;
  height: 100vh;
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

export const Player = styled.div`
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
  position: relative;
`

export const EmptySlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4px;
  background: var(--purple-300);
  border-radius: 2px;
`

export const CurrentProgressSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 40%;
  height: 4px;
  background: var(--purple-800);
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
` 

export const PlayControl = styled.button`
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--purple-400);
`