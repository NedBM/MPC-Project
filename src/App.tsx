import React from 'react';
import './App.css';
import styled from 'styled-components'

const ScreenWrapper = styled.div`
position: absolute;
width: 312px;
height: 112px;
border: 3px;
border-style: solid;
border-color: black;
margin-top: -25px;
margin-left: 50px;
background-color: #2C302F;
`

const DisplayWrapper = styled.div`
position: absolute;
width: 250px;
height: 80px;
border: 2px;
border-style: solid;
border-color: black;
margin-top: 16px;
margin-left: 28px;
background-color: black;
`;

const Display = styled.div`
position: absolute;
width: 177px;
height: 48px;
margin-top: 13px;
margin-left: 36px;
background-color: #CCE0E7;
color: #7F89BA;
font-family: 'Press Start 2P', cursive;
font-size: 8px;
`;

const ButtonWrapper = styled.div`
  width: 196px;
  height: 44px;
  margin-top: 95px;
  margin-left: 110px;
  display: flex;
  justify-content: space-around;
`;

const TopButton = styled.button`
  margin-top: 20px;
  width: 20px;
  height: 10px;
  background-color: #F6F8F7;
  border-radius: 2px;
`;

const ButtonWrapperTwo = styled.div`
  width: 128px;
  height: 108px;
  margin-left: 40px;
  margin-top: 15px;
`

const ButtonTwo = styled.button`
  width: 20px;
  height: 10px;
  background-color: #7B75B2;
  border-radius: 2px;
  margin: 8px;
  margin-right: 13px;
`;

const FaderWrapper = styled.div`
  width: 73px;
  height: 174px;
  margin-left: 22px;
  margin-top: 20px;
  border: 1px;
  border-style: solid;
  border-radius: 2px;
`;

const FaderTextWrapper = styled.div`
  width: 37px;
  height: 18px;
  margin-top: -10px;
  margin-left: 18px;
  background-color: #EBEDEC;
  text-align: center;
  font-size: 8px;
`;

const MainScreenButtonWrapper = styled.div`
  width: 52px;
  height: 27px;
  margin-left: 205px;
  font-size: 6px;
  margin-top: 10px ;
  position: absolute;
  justify-content: center;
`;

const ScreenButton = styled.button`
  width: 27px;
  height: 15px;
  border-radius: 3px;
  margin-top: 3px;
  margin-left: 6px;
`;

const OpenWindowButtonWrapper = styled.div`
  width: 52px;
  height: 27px;
  margin-left: 280px;
  font-size: 6px;
  margin-top: 10px ;
  position: absolute;
  justify-content: center;
`;

const WindowButton = styled.button`
  width: 27px;
  height: 15px;
  border-radius: 3px;
  margin-top: 3px;
  margin-left: 10px;
  background-color: orange;
`;

const Afterdiv = styled.div`
display: flex;
flex-direction: column;
font-size: 8px;
justify-content: center;
margin-left: 22px;
margin-top: 5px;
`
const AFTERButton = styled.button`
  width: 27px;
  height: 15px;
  border-radius: 3px;
  margin-top: 3px;
`;

const Aftersvg = styled.svg`
border-radius: 100%;
width: 3px;
height: 3px;
background-color: #000000;
margin-left: 13px;
margin-bottom: 1px;
margin-top: 1px;
`
const ASSGINdiv = styled.div`
background-color: grey;
color: black;
font-size: 6px;
padding-left: 2px;
padding-right: 2px;
margin-right: 23px ;
margin-top: 2px;
`
const Faderlinegrid = styled.div`
margin-top: 20px;
margin-left: 13px;
  display: grid;
  grid-template-columns: 30px 30px;
  row-gap: 7px;
`

const Smalllinediv = styled.div`
width: 15px;
height: 1px;
background-color: #000000;
`

function App() {
  return (
    <div className="App">
      <div className="Outline">
        <ScreenWrapper>
          <DisplayWrapper>
            <Display>
              Start
            </Display>

          </DisplayWrapper>
        </ScreenWrapper>
        <ButtonWrapper>
            <TopButton></TopButton>
            <TopButton></TopButton>
            <TopButton></TopButton>
            <TopButton></TopButton>
            <TopButton></TopButton>
            <TopButton></TopButton>
        </ButtonWrapper>

        <MainScreenButtonWrapper>
          MAIN SCREEN
          <ScreenButton></ScreenButton>
        </MainScreenButtonWrapper>
        <OpenWindowButtonWrapper>
          OPEN WINDOW
          <WindowButton></WindowButton>
        </OpenWindowButtonWrapper>

        <ButtonWrapperTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          <ButtonTwo></ButtonTwo>
          </ButtonWrapperTwo>
         <FaderWrapper>
          <FaderTextWrapper>
            Note Variaton
          </FaderTextWrapper>
          <Afterdiv>
            AFTER
            <Aftersvg></Aftersvg>
            <AFTERButton></AFTERButton>
            <ASSGINdiv>ASSIGN</ASSGINdiv>
          </Afterdiv>
          <Faderlinegrid>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          <Smalllinediv></Smalllinediv>
          </Faderlinegrid>
         </FaderWrapper>
      </div>
    </div>
  );
}

export default App;
