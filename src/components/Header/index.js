import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Switch from 'react-switch';
import { shade } from 'polished';

import { Container } from './styles';

function Header({ handleToggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <section>
        <span>A</span>

        <div>
          <ul>
            <li>Sobre nós</li>
            <li>Aprenda</li>
            <li>Blog</li>
            <li className="get-started">Cursos</li>
          </ul>
          <Switch
            onChange={handleToggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={40}
            width={80}
            handleDiameter={40}
            offColor={shade(0.15, colors.primary)}
            onColor={colors.secundary}
          />
        </div>
      </section>
    </Container>
  );
}

export default Header;
