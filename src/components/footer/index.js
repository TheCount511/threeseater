import React from 'react';
import { FooterContainer, FooterLogo, FooterSocialBanner, FooterLinks, FooterFormDiv, SubscribeFormDiv, SubscribeBannerText, SubscribeForm, EmailInputContainer, EmailInput, SubmitEmail } from './styles/footer';

const Footer = () => {
  return (
    <div>
      <SubscribeFormDiv>
        <SubscribeBannerText>Subscribe to get the latest deals and offers</SubscribeBannerText>
        <SubscribeForm>
          <EmailInputContainer>
            <EmailInput placeholder='Enter your email address'/>
            <SubmitEmail type="submit"><span className="material-symbols-outlined">
              arrow_forward
            </span></SubmitEmail>
          </EmailInputContainer>
        </SubscribeForm>
      </SubscribeFormDiv>
      <FooterLinksContainer>
        
      </FooterLinksContainer>
    </div>
    // <FooterContainer>

    //   <FooterLogo>
    //     <h4>Three Seaters</h4>
    //     <p>Create your dream space with modern furniture, stylish decor accents, window coverings, wall art, bedding and more – because home starts with a feeling.</p>
    //     <FooterSocialBanner>
    //       <i className="ri-facebook-fill"></i> <i className="ri-instagram-fill"></i> <i className="ri-twitter-fill"></i>
    //     </FooterSocialBanner>
    //   </FooterLogo>
    //     <ul>
    //       <h4>Help</h4>
    //       <li>Returns</li>
    //       <li>Shipping</li>
    //       <li>Track my order</li>
    //       <li>Faq</li>
    //       <li>Contact Us</li>
    //     </ul>
    //     <ul><h4>About Three Seaters</h4>
    //       <li>About Us</li>
    //       <li>Careers</li>
    //       <li>Sell Your Products</li>
    //       <li>Supply Chain Transparency</li>
    //     </ul>

    //     <ul><h4>My Account</h4>
    //       <li>Orders & Returns</li>
    //       <li>Email Preferences</li>
    //     </ul>
    //   </FooterContainer>

  );
}

export default Footer