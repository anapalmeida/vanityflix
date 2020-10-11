import React from 'react';
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'
import Carousel from '../../components/Carousel'
import BannerMain from '../../components/BannerMain'
import Footer from '../../components/Footer'

function Home() {
  return (
    <div style={{backgroundColor: "#141414"}}>

      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"No velório temático de Finn Barton, Vanessa e Charity ficam presas na adega do Woolpack, desencadeando um grande romance."}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />


      <Footer />
    </div>
  );
}

export default Home;
