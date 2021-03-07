import React from 'react';
import styled from 'styled-components/native';

const ContainerView = styled.TouchableOpacity`
  background-color: yellowgreen;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
`;

const TitleText = styled.Text`
  font-size: 25;
  text-align: center;
`;

const DetailText = styled.Text`
  font-size: 25;
  text-align: center;
`;

function DeckView() {
  return(
    <ContainerView onPress={() => alert("Deck!")}>
      <TitleText>Deck 1</TitleText>
      <DetailText>3 cards</DetailText>
    </ContainerView>
  );
}


export default DeckView;