import styled from "styled-components/macro";

export const PromoWrapper = styled.div`
width:100%;
margin-top:30px;
margin-bottom: 30px;
padding:1.5rem;
background-color: #c0550e;
color: #FFF;
font-family: 'Playfair Display', serif;
text-align: ${props=>props.align||"center"};
`

export const PromoBigImage = styled.img`
width: 100%;
object-fit: cover;
max-height: 550px;
`
export const MainPromoCardText = styled.p`
font-size: ${({ size }) => (size === "Promo" ? "calc(15px + 1.5vw)" : "16px")};
margin-left:${props => props.pad && "2rem"};
@media (max-width: 700px){
    margin-top: 10px;
    font-size: ${({size})=>(size=== "Promo"? "calc(10px + 4vw)":"calc(8px + 1.5vw)")};
}

`
export const ShopButton = styled.button`
outline: none;
padding: 10px 20px;
border-radius:5px;
color:#c0550e;
border:1px solid #c0550e;
background-color: white;
font-family: 'Open Sans', sans-serif;
:hover{
    background-color:#c0550e;
    color:white;
    border-color: #FFF;

}
`


export const PromoSplitContainer = styled.div`
width: 100%;
display: flex;
column-gap: 15px;
overflow-x: auto;
overflow-x: overlay;
background-color: #c0550e;
padding:0 2rem 20px 2rem;
font-family: 'Open Sans', sans-serif;


::-webkit-scrollbar{
    display:none;
}
:hover{

::-webkit-scrollbar {
display:block;
height:8px;
}
 
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
}}
`

export const PromoCard = styled.div`
width:25%; 
min-width:145px; 
display:block;
cursor: pointer;

@media (max-width: 750px){
    min-width: 220px;
}
`
export const PromoPill = styled.div`
border-radius: 20px;
box-sizing: border-box;
display: inline-flex;
font-size: 16px;
padding: 5px 15px;
color:#c96103;
background-color: #FFF;
margin-top: 10px;
`
export const PromoDiscountText = styled.p`
font-size: calc(15px + 0.290625rem);
margin-top: 5px;


@media (max-width: 750px){
   font-size: 16px;
}

`

export const CardImage = styled.img`
border-radius: 0;
 object-fit: cover; 
 max-height:70vh;
 min-height: 400px;
`