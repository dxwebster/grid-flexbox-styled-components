import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Header from './components/Header';

import Post1 from './assets/post1.svg';
import Post2 from './assets/post2.svg';
import Post3 from './assets/post3.svg';

import { Container, GridWrapper, Aside, Background, Article, Footer } from './styles';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(light);

  const handleToggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
    console.log(theme.title);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header handleToggleTheme={handleToggleTheme} />
      <Container>
        <GridWrapper>
          <Aside>
            <h1>Front end</h1>
            <h3>development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit a et rerum vitae eum deleniti, consequatur quo. Ipsa quos eveniet totam quaerat, velit cumque! Qui
              commodi nam aliquid velit corrupti.
            </p>
            <p className="button">Learn More</p>
          </Aside>

          <Background />

          <Article>
            <h1>Hello World!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut provident dolore nihil maiores error repudiandae aspernatur amet quae earum architecto omnis tenetur.
            </p>
            <div>
              <span>
                <img src={Post1} alt="Post" />
                <h3>Algum título</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rerum eos aliquam.</p>
              </span>
              <span>
                <img src={Post2} alt="Post" />
                <h3>Algum título</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rerum eos aliquam.</p>
              </span>
              <span>
                <img src={Post3} alt="Post" />
                <h3>Algum título</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rerum eos aliquam.</p>
              </span>
            </div>
          </Article>
        </GridWrapper>
      </Container>
      <Footer>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook-f"></i>
        <span className="sign-off">Created by Adriana Lima</span>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
