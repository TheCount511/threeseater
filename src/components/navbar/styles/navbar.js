import styled from "styled-components/macro";

export const NavBarContainer = styled.div`

`
export const NavLink = styled.a`
font-family: 'Open Sans', sans-serif;
font-size: medium;
color: #2d2d2d;
:hover{
    color:#757575;
}
`

export const SearchBar = styled.input`

border-radius:5px;
border:1px solid gray;
outline-offset: 0;
height:35px;
box-sizing: border-box;
padding: 3px 8px;
margin-left: 10px;
font-family: 'Urbanist', sans-serif;
width: 100%;

:focus{
outline:none;
border:1px solid #d8af83;
}
:hover{
    border-color:#d8af83;
}
`
export const SearchButton = styled.button`
outline: none;
height: 35px;
border-radius:5px;
border:1px solid gray;
margin-right: 10px;
background-color: white;
font-family: 'Urbanist', sans-serif;
:hover{
    background-color:#d8af83;
    color:white;
    border-color: #d8af83;

}
`