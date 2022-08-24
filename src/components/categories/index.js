import Row from 'react-bootstrap/Row';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import HomeCategoriesData from "../../assets/homecategories.json"
import { CategoryCard, CategoryContainer, CategoryGrid, CategoryLink, CategoryName } from './styles/categories';


const Categories = () => {
  return (
    <CategoryContainer >
      <h2>SHOP BY</h2>
      <CategoryGrid >
      {HomeCategoriesData.map((item, index) => (
        <CategoryCard key={`category ${index}`}>
          <img src={require(`../../assets/categories/${item.src}.png`)} alt={`${item.src}`} style={{objectFit:"cover", width:"100%"}}/>
          <div style={{position:"absolute", padding:"5px 15px", bottom: "8px", left: "10px", zIndex:"2", textAlign:"left"}}>
            <CategoryName>{item.name}</CategoryName>
            <p><CategoryLink href={`${item.link}`}>Shop Now</CategoryLink></p>
          </div>
        </CategoryCard>
        ))}
      </CategoryGrid>
    </CategoryContainer>
  );
}

export default Categories