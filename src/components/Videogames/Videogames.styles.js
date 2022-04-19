import styled from 'styled-components';

export const Wrapper = styled.div`
        
        max-width: 1200px;
        display: grid;
        margin: auto;
        grid-template-columns: repeat(auto-fill,minmax(160px,1fr));
        grid-gap: 3.5rem;
        

`;




export const Container = styled.div`
        margin: 10px auto;
       /* display: flex;
       flex-direction: column;
       justify-content: center; */
       
`;
export const Error = styled.div`
        margin: 0 20px;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
`;
