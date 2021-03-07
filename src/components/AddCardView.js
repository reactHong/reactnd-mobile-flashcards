import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components';
import TextButton from './TextButton'

const ContainerView = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: 50px;
`;

const TopView = styled.View`
  /* background-color: yellowgreen; */
`;

const StyledTextInput = styled.TextInput`
  height: 50;
  border: 1px solid gray;
  background-color: white;
  margin: 20px 0;
  font-size: 30;
  border-radius: 10;
  padding-left: 10;
`;

const BottomView = styled.View`
  /* background-color: yellow; */
  align-items: center;
`;

function AddCardView() {
  return (
    <ContainerView>
      <TopView>
        <StyledTextInput placeholder="Enter the question" />
        <StyledTextInput placeholder="Enter the answer" />
      </TopView>
      <BottomView>
        <TextButton 
          buttonStyle={[styles.buttonCommon, styles.buttonSubmit]}
          textStyle={[styles.textCommon, styles.textSubmit]}
        >Submit</TextButton>
      </BottomView>
    </ContainerView>
  );
}

const styles = StyleSheet.create({
  buttonCommon: {
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  textCommon: {
    fontSize: 30,
  },
  buttonSubmit: {
    backgroundColor: 'purple',
  },
  textSubmit: {
    color: 'white',
  },
});

export default AddCardView;