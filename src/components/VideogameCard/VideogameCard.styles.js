import styled from 'styled-components';


export const Wrapper = styled.div`

    height: 350px;
    font-size: 0.8rem;
    width: 220px;
    margin: auto;
    background-color: #161A1D;
    font-weight: 700;
    color:white;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    animation: scale-in-center 0.8s cubic-bezier(.26,.07,.66,.13) both;

    h3{
        font-weight: 500;
    }
     :hover {
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
     }   

     @keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);

    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
    
    

`
export const Title = styled.div`
        text-align: center;
        margin: auto;
        max-width: 200px;
`

export const Details = styled.div`
    margin-top: -8px;
    padding:2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    


`
export const Rating = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: -8px;
   p {
       margin-left: 0 1px;
       padding: 4px;
       
   }
   span {
      //max-width: 100px; 
       color: #f1c40f;
       font-weight: 500;
       margin: auto
   }


`
export const Genres = styled.div`
    max-width: 200px;
    max-height: 100px;
    flex-wrap: wrap;
    display: flex;
    flex: wrap;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    font-weight: 400;
    span {
      //max-width: 100px; 
      padding: 2.5px;
      margin: 0 2px;
   }
    

`
export const Image = styled.img`

     height: 60%;
     display: absolute;
     max-width: 170px;
     transition: all 0.3s;
     object-fit: cover;
     border-radius: 20px;
     animation: animateThumb 0.5s, transform 0.3s;
     box-shadow: 0.5px 0.5px 8px 2px rgba(0, 0, 0, 0.4);
     :hover {
        transform: scale(1.05);
        opacity: 0.8;
        box-shadow: 0.5px 0.5px 10px 2px rgba(0, 0, 0, 0.5);
         
     }   
    
    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1
        }

    }


`