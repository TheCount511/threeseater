import { type } from "@testing-library/user-event/dist/type"
import styled from "styled-components/macro"


export const SubscribeFormDiv = styled.div`
max-width: 1500px; 
margin: 0 auto; 
padding: 30px; 
display:flex; 
justify-content:space-between; 
align-items:center;

@media (max-width: 800px){
    flex-direction: column;
    text-align: center;
    gap:20px

}
`
export const SubscribeBannerText = styled.span`
font-size:30px;
`

export const SubscribeForm = styled.form`
box-sizing:border-box;
`
export const EmailInputContainer = styled.div`
width:400px; 
height:50px; 
box-sizing:border-box; 
padding-bottom:5px; 
border-bottom:1px solid;
`
export const EmailInput = styled.input.attrs({type:'email'})`
width: 90%;
height: 100%; 
 line-height: 90%; 
 box-sizing: border-box; 
 border: none; 
 outline: none;
`
export const SubmitEmail = styled.button`
border: none;
height: 100%; 
width: 10%
`

export const FooterContainer = styled.div`
background-color: #f4e8df; 
padding: 2rem; 
display: flex; 
flex-wrap:wrap;
align-content: center;
justify-content: space-between;
gap: 10px;
ul{
    list-style-type: none;
    padding-left: 0;
}

`
export const FooterLogo = styled.div`
max-width: 430px;
text-align: justify;
min-width: 400px;

h4{
font-family: Sacramento, cursive;
font-size:46px;
}
`
export const FooterSocialBanner = styled.div`
display:flex;
margin-bottom: 20px;
 gap:20px;
`
export const FooterLinks = styled.ul`
list-style-type: none;
`


