import styled from "styled-components/macro";

export const BannerPromo =  styled.p`
font-size: ${({mode})=>(mode=== "Promo"? "calc(10px + 2vw)":"calc(9px + 1vw)")};
color: #c0550e;
font-family: 'Playfair Display', serif;

@media (max-width: 700px){
    margin-top: 10px;
    text-align: center;
    font-size: ${({mode})=>(mode=== "Promo"? "calc(10px + 5vw)":"calc(9px + 2vw)")};

}
`
export const BannerPromoLink =  styled.a`
color: #c0550e;
text-decoration: underline;
cursor: pointer;
:hover{
    color: #eeb97d;
}
`