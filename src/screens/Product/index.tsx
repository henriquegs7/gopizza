import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { ButtonBack, Photo } from "@components";

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  PickImageButton,
  Upload,
} from "./styles";

export const Product = () => {
  return (
    <Container behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <Header>
        <ButtonBack />
        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
      <Upload>
        <Photo uri={"https://github.com/henriquegs7.png"} />
        <PickImageButton title="Carregar" type="secondary" />
      </Upload>
    </Container>
  );
};
