import React, { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ButtonBack, Photo, InputPrice } from "@components";

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  PickImageButton,
  Upload,
} from "./styles";

export const Product = () => {
  const [image, setImage] = useState("");

  const handlePickerImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  };

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
        <Photo uri={image} />
        <PickImageButton
          onPress={() => handlePickerImage()}
          title="Carregar"
          type="secondary"
        />
      </Upload>
      <InputPrice size="P" />
      <InputPrice size="M" />
      <InputPrice size="G" />
    </Container>
  );
};
