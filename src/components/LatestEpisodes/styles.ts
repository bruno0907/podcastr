import styled from 'styled-components';

export const Container = styled.div`

  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

export const Title = styled.h2`
  margin: 3rem 0 1.5rem;
`

export const Episode = styled.li`
  width: 100%;
  background: var(--white);
  border: solid 1px var(--gray-100);
  padding: 1.25rem;
  border-radius: 1.5rem;
  position: relative;

  display: flex;
  align-items: center;

  div{
    flex-shrink: 0;
  
    img{
      width: 6rem;
      height: 6rem;
      border-radius: 1rem;    
    }
  }

`

export const EpisodeDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;  

  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis; 

  a{    
    display: block;
    color: var(--gray-800);
    font-family: var(--font-title);  
    font-weight: 600;
    line-height: 1.4rem;    

    :hover{
      text-decoration: underline;      
    }    
  }

  p{
    font-size: 0.875rem;
    margin-top: 0.5rem;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  }

  div{
    span{
      display: inline-block;
      margin-top: 0.5rem;
      font-size: 0.875rem;

      :last-child{
        margin-left: 0.5rem;
        padding-left: 0.5rem;
        position: relative;

        :before{
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #DDD;
          position: absolute;
          left: -1px;
          top: 46%;        
        }
      }
    }
  }
`

export const EpisodePlayButton = styled.button`
  position: absolute;
  right: 2rem;
  bottom: 2rem;

  width: 2.5rem;
  height: 2.5rem;

  background: var(--white);
  border: solid 1px var(--gray-100);
  border-radius: 0.675rem;
  font-size: 0;
  transition: filter 150ms;

  img{
    width: 1.5rem;
    height: 1.5rem;
  }

  :hover{
    filter: brightness(0.95);
  }
`