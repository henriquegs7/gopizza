import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { Button, Input } from "../../components";
import BrandImg from "../../assets/brand.png";
import { useAuth } from "../../hooks/auth";
import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from "./styles";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, forgotPassword, isLogging } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

  const handleForgotPassword = () => {
    forgotPassword(email);
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={BrandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />
          <ForgotPasswordButton onPress={() => handleForgotPassword()}>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button
            title="Entrar"
            type="secondary"
            onPress={() => handleSignIn()}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};
