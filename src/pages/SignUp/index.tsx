import React from 'react';
import { Image, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import InputAuth from '../../components/InputAuth';
import ButtonAuth from '../../components/ButtonAuth';
import logoImg from '../../assets/logo.png';
import { Container, Title, BackToSignIn, BackToSignInText } from './styles';
import { useNavigation } from '@react-navigation/native';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>

        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>

            <InputAuth name="name" icon="user" placeholder="Nome" />
            <InputAuth name="email" icon="mail" placeholder="E-mail" />
            <InputAuth name="password" icon="lock" placeholder="Senha" />

            <ButtonAuth onPress={() => { console.log('Foi') }}>Entrar</ButtonAuth>

          </Container>
        </ScrollView>
        <BackToSignIn onPress={() => { navigation.navigate('SignIn') }}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Voltar para logon</BackToSignInText>
        </BackToSignIn>
      </KeyboardAvoidingView>
    </>
  );
}

export default SignUp;
