import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import MainPromoPictureData from "../../assets/mainpromopictures.json"
import PromodescriptionData from "../../assets/Promodescription.json"
import { CardImage, MainPromoCardText, PromoBigImage, PromoCard, PromoDiscountText, PromoPill, PromoSplitContainer, PromoWrapper, ShopButton } from './styles/mainpromo';

const MainPromo = () => {
  return (
    <>
      <PromoWrapper>
       { MainPromoPictureData.map((item,index)=>(
        <div key={`promo ${index}`}>
        <PromoBigImage src={require(`../../assets/mainpromo/${item.src}.png`)} alt={`${item.type}`} key={`${item.type} ${index}`} />
        <MainPromoCardText size="Promo">
        {`${item.discount} off selected living room furniture`}
      </MainPromoCardText>
      <MainPromoCardText>Match your taste and personal aesthetic to the perfect fit</MainPromoCardText>
      <ShopButton variant="secondary">Shop now</ShopButton>
      </div>
       ))}
      
      </PromoWrapper>

      <PromoWrapper align="left">
        <MainPromoCardText size="Promo" pad>Don't miss out these deals!</MainPromoCardText>
        <PromoSplitContainer>
          {PromodescriptionData.map((item, index) => (
            <PromoCard key={index}>
              <img src={require(`../../assets/mainpromo/${item.src}.png`)} alt={`${item.src}`} style={{ "width": "100%" }}></img>
              <PromoPill>{item.note}</PromoPill>
              <PromoDiscountText >{item.discount} off* selected {item.category}</PromoDiscountText>
            </PromoCard>
          ))}
        </PromoSplitContainer>
      </PromoWrapper>
    </>
  );
}

export default MainPromo;