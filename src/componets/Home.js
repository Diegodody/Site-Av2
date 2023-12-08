// src/Noticias.js
import React from 'react';
import './Home.css'; // Importa o arquivo de estilo

const Home = () => {
  return (
    <div className="noticias-container">
      <section className="noticias">
        <h2>Noticiário do G1 Globo</h2>
        <div className="imagem-container">
          <a href="https://g1.globo.com/mundo/" target="_blank" rel="noopener noreferrer">
            <img src="https://s2-g1.glbimg.com/29fccb_kO-0gUaal59-qtoKq2Mo=/540x304/top/smart/filters:max_age(3600)/https://s01.video.glbimg.com/deo/vi/37/76/12017637" alt="Descrição da Imagem" />
            <img src="https://s2.glbimg.com/AvNujR926cUL89zH4OXF4eDB6So=/540x304/top/smart/filters:max_age(3600)/https://s01.video.glbimg.com/deo/vi/37/59/11945937" alt="Descrição da Imagem" />
            <img src="https://s2-g1.glbimg.com/f2-CjU16CmwUIHHJ0h1GhWRn3cc=/540x304/top/smart/filters:max_age(3600)/https://s01.video.glbimg.com/deo/vi/34/49/11814934" alt="Descrição da Imagem" />
          </a>
        </div>
      </section>

      <section className="noticias">
        <h2>Noticiário da CNN Brasil</h2>
        <div className="imagem-container">
          <a href="https://www.cnnbrasil.com.br/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.estadao.com.br/resizer/_FXyh8NFAi0etfiMyJqfPwhbilg=/arc-anglerfish-arc2-prod-estadao/public/KJXLPLEUXJBXFBZBCHHYXQCG5U.jpg" alt="Descrição da Imagem" />
            <img src="https://www.estadao.com.br/resizer/_FXyh8NFAi0etfiMyJqfPwhbilg=/arc-anglerfish-arc2-prod-estadao/public/KJXLPLEUXJBXFBZBCHHYXQCG5U.jpg" alt="Descrição da Imagem" />
            <img src="https://www.estadao.com.br/resizer/_FXyh8NFAi0etfiMyJqfPwhbilg=/arc-anglerfish-arc2-prod-estadao/public/KJXLPLEUXJBXFBZBCHHYXQCG5U.jpg" alt="Descrição da Imagem" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
