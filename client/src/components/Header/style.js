import { Box } from '@andeeplus/aplus-ui';
import styled from 'styled-components';

const Header = styled(Box)`
  transition: all 0.5s ease;
`;

Header.defaultProps = {
  width: 1,
  top: 0,
  position: 'fixed',
  zIndex: 'menu',
  boxSizing: 'border-box',
  height: '80px',
  shadow: 'small',
  bg: 'white'
};

export default Header;

Header.displayName = 'Header';