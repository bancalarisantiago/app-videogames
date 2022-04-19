import styled from 'styled-components';

export const Wrapper = styled.div`
        margin: 5px auto;
        flex-direction: column;
        font-family: 'Readex Pro';
        font-weight: 500;
        
`
export const WrapperBox = styled.div`
       margin: 10px auto;
       overflow: hidden;
        text-overflow: ellipsis;
`

export const BtnWrapper = styled.div`
        display: flex;
        justify-content: center;
        button{
                margin: 0 10px;
        }
`
export const CheckList = styled.ul`
        display: grid;
        color: white;
        width: 782px;
        grid-template-columns: repeat(auto-fill,minmax(88px,1fr));
        align-items: start;
        grid-gap: 0.7rem;
`

export const InputCheck = styled.input`
     display: flex;
     align-items: center;
     text-overflow: ellipsis;
`

export const LabelCheck = styled.label`
     display: flex;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 100px;
    overflow: hidden;
`
export const BtnIco = styled.button`
        background: #2d5ff5;
        padding: 0.3em 0.7em;
        border: none;
        border-radius: 10px;
        transition: all 0.2s;
        box-shadow: 0px 0px 8px -3px rgba(255, 255, 255,0.6);
      :hover {
                background: #5171d1;
                text-decoration: none;
      } 
      img{
        max-width: 20px;
        margin-top: 2px;
      }
`

export const Btn = styled.button`
        font-family: inherit;
        font-size: 17px;
        background: #2d5ff5;
        color: white;
        padding: 0.3em 0.7em;
        border: none;
        border-radius: 10px;
        transition: all 0.2s;
        box-shadow: 0px 0px 8px -3px rgba(255, 255, 255,0.6);
      :hover {
                /* background: #111216;
                background-image: linear-gradient(to bottom, #3a769b, #2a4f66); */
                background: #5171d1;
                text-decoration: none;
      }

`





        
