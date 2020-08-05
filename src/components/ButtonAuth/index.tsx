import React from 'react';
import { ReactButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

interface ButtonProps extends ReactButtonProperties {
  children: string;
}

const ButtonAuth: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default ButtonAuth;
