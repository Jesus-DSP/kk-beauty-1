import React from 'react';
import * as S from './Footer.styles';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <S.Wrapper>
    <S.Links>
      <S.Link href="#">Contact</S.Link>
      <S.Link href="#">Privacy</S.Link>
      <S.Link href="#">Terms</S.Link>
    </S.Links>

    <S.SocialLinks>
      <S.IconLink href="https://www.facebook.com/YourPage" target="_blank" aria-label="Facebook">
        <FaFacebookF />
      </S.IconLink>
      <S.IconLink
        href="https://www.instagram.com/YourProfile"
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram />
      </S.IconLink>
    </S.SocialLinks>

    <S.Copy>© 2025 KK Beauty Lab. All rights reserved.</S.Copy>
  </S.Wrapper>
);

export default Footer;
