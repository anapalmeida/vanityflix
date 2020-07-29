import React from 'react';
import Logo from '../../assets/img/logo.png'
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.youtube.com/channel/UCwbyt6iJGbTE1Qj3E3Pio1w">
        <img className="Logo" src={Logo} alt="VanityFlix" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
