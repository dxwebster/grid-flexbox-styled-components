import React from 'react';

import GlobalStyle from './styles/global';

import PostImg from './assets/background.jpg';

import { Container, GridWrapper, Header, Aside, Background, Article, Footer } from './styles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <div>
          <span>a</span>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
            <li className="get-started">Get Started</li>
          </ul>
        </div>
      </Header>
      <Container>
        <GridWrapper>
          <Aside>
            <h1>Web Design</h1>
            <h3>Landing Page</h3>
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
                <img src={PostImg} alt="Post" />
                <h3>Algum título</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rerum eos aliquam.</p>
              </span>
              <span>
                <img src={PostImg} alt="Post" />
                <h3>Algum título</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rerum eos aliquam.</p>
              </span>
              <span>
                <img src={PostImg} alt="Post" />
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
    </>
  );
}

export default App;
