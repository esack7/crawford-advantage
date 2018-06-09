import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

const BaseStyles = () => injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Prompt');
  ${reset};
`;

const AppContain = styled.div`
  background: #2f4f4f;
`;

const Title = styled.h1`
  font-family: 'Prompt';
  font-size: 48px;
  color: #fff;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export { BaseStyles, AppContain, Title };
