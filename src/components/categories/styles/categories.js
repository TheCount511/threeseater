import styled from "styled-components/macro";

export const CategoryContainer = styled.div`
max-width:1500px; 
margin:0 auto; 
padding:30px;
font-family: 'Poppins', sans-serif;`

export const CategoryGrid = styled.div`
display:grid; 
grid-template-columns:33% 33% 33%; 
justify-content:center; 
gap:10px; 
color:white;

@media (max-width: 745px){
    grid-template-columns:49.5% 49.5%;

}

@media (max-width: 516px){
    grid-template-columns:99%;

}
`

export const CategoryCard = styled.div`
position: relative;
text-align: center;
padding: 0;
margin: 0;
cursor: pointer;
overflow: hidden;
:after {
content: "";
position: absolute;
display: block;
left: 0;
top: 0;
width: 100%;
height: 100%;
background:  linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 24%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.76) 99%);
z-index: 1;
}

p{
    margin-bottom: 0;
}

:hover img{
    transform: scale(1.2);
    transition: all .2s ease;
}
`

export const CategoryName = styled.p`
font-size: large;
line-height: 20px;
`
export const CategoryLink = styled.a`
color: white;
:hover{
    color:#d6d6d6;
}
`