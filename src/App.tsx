import React from 'react';
import './App.css';
import styled from 'styled-components'
import akailogo from './assets/akai logo.png'
// import CursorLeft from './assets/LeftButtonCursor.svg'
// import CursorRight from './assets/RightButtonCursor.svg'
// import CursorBottom from './assets/BottomButtonCursor.svg'
// import CursorTop from './assets/TopBottomCursor.svg'

const Cursordiv = styled.div`
  position: absolute;
  margin-top: 190px;
  margin-left: 229px;
`

const ScreenWrapper = styled.div`
position: absolute;
width: 312px;
height: 112px;
border: 3px;
border-style: solid;
border-color: black;
margin-top: -25px;
margin-left: 50px;
background-color: #3e4442;
box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.25);
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
padding: 3px;
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

const ButtonWrapperTopTitle = styled.div`
  width: 18px;
  margin-top: 8px;
  height: 8px;
  background-color: grey;
  color: black;
  justify-content: center;
  font-size: 6px;
  text-align: center;
  margin-left: 1px;
`

const ButtonWrapperTopSingle = styled.div`
  display: flex;
  flex-direction: column;
`

const TopButton = styled.button`
  margin-top: 5px;
  width: 20px;
  height: 10px;
  background-color: #F6F8F7;
  border-radius: 2px;
  box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
`;

const ButtonWrapperTwoSingle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`
const ButtonWrapperTwoTitleTop = styled.div`
  font-size: 6px;
  color: #000000;
  justify-content: center;
  text-align: center;
  margin-right: 15px;
  margin-bottom: 3px;
`

const ButtonWrapperTwoSingleSpecial = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 7px;
  color: #000000;
  background-color: grey;
`
const ButtonWrapperTwoTitle = styled.div`
  width: 20px;
  height: 5px;
  background-color: grey;
  color: black;
  justify-content: center;
  font-size: 5px;
  text-align: center;
  margin-top: 3px;

`

const ButtonWrapperTwo = styled.div`
  width: 128px;
  height: 108px;
  margin-left: 40px;
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const ButtonTwo = styled.button`
  width: 20px;
  height: 10px;
  background-color: #7B75B2;
  border-radius: 2px;
  margin-right: 13px;
  box-shadow: -4px -4px 15px rgba(0, 0, 0, 0.25);
`;

const FaderWrapper = styled.div`
  width: 73px;
  height: 210px;
  margin-left: 13px;
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
  box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
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

const Wheel = styled.button`
border-radius: 100% ;
background-color: black;
width: 95px;
height: 95px;
box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
`

const WheelWrapper = styled.div`
  margin-left: 220px;
  margin-left: 215px;
  font-size: 6px;
  margin-top: 50px ;
  position: absolute;
  justify-content: center;
  display: flex;
  flex-direction: column;
`

const Wheellabel = styled.p`
  font-size: 8px;
  margin-left: 38px;
`

const WindowButton = styled.button`
  width: 27px;
  height: 15px;
  border-radius: 3px;
  margin-top: 3px;
  margin-left: 10px;
  background-color: orange;
  box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
`;

const Afterdiv = styled.div`
display: flex;
flex-direction: column;
font-size: 8px;
justify-content: center;
margin-left: 22px;
margin-top: 5px;
margin-bottom: 15px;
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
  row-gap: 9px;
  position: absolute;
`

const Smalllinediv = styled.div`
width: 15px;
height: .5px;
background-color: #000000;
`
const Faderline = styled.div`
width: 5px;
height: 110px;
background-color: #000000;
position: absolute;
margin-left: 20px;
margin-top: -7px ;
`
const Faderslider = styled.div`
background-color: #000000;
  width: 40px;
  height: 3px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: grey;
  border-width: 9px;
  margin-left: -17px;
  margin-top: 30px;
  box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10%; /* NEW */
`

const DRUMSdiv = styled.div`
width: 275px;
padding: 20px;
padding-left: 25px;
padding-top: 10px;
height: 55%;
margin-left: 55%;
background-color: #aba9a9;
margin-top: -295px;
position: fixed;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Nobsandbuttonswrapper = styled.div`
width: 320px;
height: 18%;
margin-left: 55%;
background-color: #aba9a9;
margin-top: -400px;
position: fixed;
`

const Specialbuttondiv = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 6px;
`

const Specialbutton = styled.button`
width: 25px;
height: 13px;
background-color: #F6F8F7;
margin-left: 15px;
margin-right: 10px;
margin-top: 25px;
border-radius: 2px;
box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
`

const RecGainnob = styled.div`
border-radius: 100%;
width: 25px;
height: 25px;
margin-top: 15px;
border: 2px dotted #ffffff;
background-color: #651212;
margin-left: 60px;
`
const MainVolumenob = styled.div`
border-radius: 100%;
width: 25px;
height: 25px;
border: 2px dotted #123455;
background-color: #ffffff;
margin-top: 15px;
margin-left: 30px;
`


const Logoimg = styled.img`
width: 180px;
height: 40px;
position:absolute;
top:0;
right:0;
margin-right: 130px;
margin-top: 10px;
`

const TapTempoNoteRepeatWrapper = styled.div`
 width: 52px;
  height: 40px;
  margin-left: 120px;
  font-size: 6px;
  margin-top: 150px ;
  position: absolute;
  justify-content: center;
`

const TapTempoNoteRepeat = styled.button`
  width: 27px;
  height: 20px;
  font-size: 6px;
  margin-top: 5px;
  margin-left: 5px;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 3px;
`

const TwoMediumButtonWrapper = styled.div`
  margin-left: 90px;
  font-size: 6px;
  margin-top: 200px ;
  position: absolute;
  justify-content: center;
  flex-direction: row;
  display: flex;
`;

const SingleMediumButtonWrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  font-size: 6px;
  margin-left: 15px;
`

const MediumButtonLabel = styled.p`
font-size: 6px;
justify-content: center;
  text-align: center;
  width: 20px;
  height: 10px;
`

const MediumButtom = styled.button`
  width: 27px;
  height: 15px;
  border-radius: 3px;
  margin-top: 3px;
  box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
`

const BottomSmallButtonWrapper = styled.div`
display: flex;
position: absolute;
flex-direction: row;
margin-left: 90px;
margin-top: -95px;
font-size: 6px;
`

const BottomSmallButtonWrapperSingle = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const BottomSmallButtonlabel = styled.p`
font-size: 6px;
justify-content: center;
  text-align: center;
  margin-left: 18px;
  width: 20px;
  height: 10px;
`

const BottomSmallButton = styled.button`
 width: 27px;
  height: 15px;
  margin-top: 0px;
  margin-left: 17px;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 3px;
`


const BottomBigButtonWrapper = styled.div`
display: flex;
position: absolute;
flex-direction: row;
margin-left: 90px;
margin-top: -40px;
font-size: 6px;
`

const BottomBigButtonWrapperSingle = styled.div`
justify-content: center;
display: flex;
flex-direction: column;
justify-content: center;
  text-align: center;
`
const BottomBigButtonlabel = styled.p`
font-size: 6px;
justify-content: center;
  text-align: center;
  margin-left: 18px;
  width: 20px;
  height: 10px;
`

const BottomBigButton = styled.button`
  width: 27px;
  height: 20px;
  margin-top: 0px;
  margin-left: 17px;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 3px;
`

const DrumsBigTitlediv = styled.div`
width: 280px;
height: 8px;
border-top: 1px solid #2e2e2e8a;
position: absolute;
font-size: 6px; 
margin-left: 15px;
margin-top: 7px;
`

const DrumsBigTitle = styled.p`
  width: 30px;
  height: 10px;
  background-color: #e4e4e4;
  text-align: center;
  margin-left: 140px;
  margin-top: 3px;
  z-index: 4;
  font-size: 6px;
  background-color: #aba9a9;
  position: absolute;
`



const DRUMSbutton = styled.button`
width: 55px;
height: 55px;
background-color: #616161;
background-image:
radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
box-shadow: -5px -5px 20px rgba(0, 0, 0, 0.25);
`
const DRUMSsinglediv = styled.div`
  display: flex;
  flex-direction: column;
`
const DRUMSsinglediv2 = styled.div`
display: flex;
flex-direction: row;
`

const DRUMStitle = styled.p`
  font-size: 5px;
  display: flex;
`

const DRUMStitle2 = styled.p`
  font-size: 5px;
  color: white;
  margin-left: 28px;
  display: flex;
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
        <Logoimg src={akailogo} className="App-logo" alt="logo" />
        <ButtonWrapper>
          <ButtonWrapperTopSingle>
            <ButtonWrapperTopTitle>F 1</ButtonWrapperTopTitle>
          <TopButton></TopButton>
          </ButtonWrapperTopSingle>
          <ButtonWrapperTopSingle>
            <ButtonWrapperTopTitle>F 2</ButtonWrapperTopTitle>
          <TopButton></TopButton>
          </ButtonWrapperTopSingle>
          <ButtonWrapperTopSingle>
            <ButtonWrapperTopTitle>F 3</ButtonWrapperTopTitle>
          <TopButton></TopButton>
          </ButtonWrapperTopSingle>
          <ButtonWrapperTopSingle>
            <ButtonWrapperTopTitle>F 4</ButtonWrapperTopTitle>
          <TopButton></TopButton>
          </ButtonWrapperTopSingle>
          <ButtonWrapperTopSingle>
            <ButtonWrapperTopTitle>F 5</ButtonWrapperTopTitle>
          <TopButton></TopButton>
          </ButtonWrapperTopSingle>
          <ButtonWrapperTopSingle>
            <ButtonWrapperTopTitle>F 6</ButtonWrapperTopTitle>
          <TopButton></TopButton>
          </ButtonWrapperTopSingle>
        </ButtonWrapper>

        <MainScreenButtonWrapper>
          MAIN SCREEN
          <ScreenButton></ScreenButton>
        </MainScreenButtonWrapper>
        <OpenWindowButtonWrapper>
          OPEN WINDOW
          <WindowButton></WindowButton>
        </OpenWindowButtonWrapper>
        <WheelWrapper>
          <Wheellabel>DATA</Wheellabel>
          <Wheel></Wheel>
        </WheelWrapper>
        <TapTempoNoteRepeatWrapper>
           TAP TEMPO NOTE REPEAT
          <TapTempoNoteRepeat></TapTempoNoteRepeat>
        </TapTempoNoteRepeatWrapper>
        <TwoMediumButtonWrapper>
        <SingleMediumButtonWrapper>
          <MediumButtonLabel>UNDO SEQ</MediumButtonLabel>
          <MediumButtom></MediumButtom>
        </SingleMediumButtonWrapper>
        <SingleMediumButtonWrapper>
        <MediumButtonLabel>ERASE</MediumButtonLabel>
          <MediumButtom></MediumButtom>
        </SingleMediumButtonWrapper>
        </TwoMediumButtonWrapper>
        <Cursordiv>
        <svg width="70" height="49" viewBox="0 0 89 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 63.5V5C1 2.79086 2.79086 1 5 1H27.5L34 34.5L28.75 51L23.5 67.5H5C2.79086 67.5 1 65.7091 1 63.5Z" fill="#EFEFEF" stroke="black"/>
<path d="M13 45.5L8 35L13 24.5" stroke="black"/>
<path d="M88 63.5V5C88 2.79086 86.2091 1 84 1H61.5L55 34.5L60.25 51L65.5 67.5H84C86.2091 67.5 88 65.7091 88 63.5Z" fill="#EFEFEF" stroke="black"/>
<path d="M76 45.5L81 35L76 24.5" stroke="black"/>
<path d="M54.5 34H33.5L23 1H65.5L54.5 34Z" fill="#EFEFEF" stroke="black"/>
<path d="M53 17.5L43.5 9.5L34 17.5" stroke="black"/>
<path d="M54.5 35H33.5L23 68H65.5L54.5 35Z" fill="#EFEFEF" stroke="black"/>
<path d="M53 51L43.5 59L34 51" stroke="black"/>
</svg>
        </Cursordiv>

        <ButtonWrapperTwo>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>7</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>MIXER</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>8</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>OTHER</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>9</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>MIDI/SYNCH</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>4</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>SAMPLE</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>5</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>TRIM</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>6</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>PROGRAM</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>1</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>SONG</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>2</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>MISC.</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>3</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          <ButtonWrapperTwoTitle>LOAD</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>SHIFT</ButtonWrapperTwoTitleTop>
          <ButtonTwo style={{backgroundColor: '#F6F8F7'}}></ButtonTwo>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>0</ButtonWrapperTwoTitleTop>
          <ButtonTwo></ButtonTwo>
          </ButtonWrapperTwoSingle>
          <ButtonWrapperTwoSingle>
            <ButtonWrapperTwoTitleTop>ENTER</ButtonWrapperTwoTitleTop>
          <ButtonTwo style={{backgroundColor: '#F6F8F7'}}></ButtonTwo>
          <ButtonWrapperTwoTitle>SAVE</ButtonWrapperTwoTitle>
          </ButtonWrapperTwoSingle>
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
            <Faderline>
              <Faderslider></Faderslider>
            </Faderline>
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
         <BottomSmallButtonWrapper>
         <BottomSmallButtonWrapperSingle>
         <BottomSmallButtonlabel>Step</BottomSmallButtonlabel>
         <BottomSmallButton></BottomSmallButton>
         </BottomSmallButtonWrapperSingle>
         '<BottomSmallButtonWrapperSingle>
         <BottomSmallButtonlabel>Step</BottomSmallButtonlabel>
         <BottomSmallButton></BottomSmallButton>
         </BottomSmallButtonWrapperSingle>
         <BottomSmallButtonWrapperSingle>
         <BottomSmallButtonlabel>GO TO</BottomSmallButtonlabel>
         <BottomSmallButton></BottomSmallButton>
         </BottomSmallButtonWrapperSingle>
         <BottomSmallButtonWrapperSingle>
         <BottomSmallButtonlabel>Bar</BottomSmallButtonlabel>
         <BottomSmallButton></BottomSmallButton>
         </BottomSmallButtonWrapperSingle>
         <BottomSmallButtonWrapperSingle>
         <BottomSmallButtonlabel>Bar</BottomSmallButtonlabel>
         <BottomSmallButton></BottomSmallButton>
         </BottomSmallButtonWrapperSingle>
         </BottomSmallButtonWrapper>
         <BottomBigButtonWrapper>
           <BottomBigButtonWrapperSingle>
             <BottomBigButtonlabel>REC</BottomBigButtonlabel>
           <BottomBigButton style={{backgroundColor:'#82312D'}}></BottomBigButton>
           </BottomBigButtonWrapperSingle>
           <BottomBigButtonWrapperSingle>
           <BottomBigButtonlabel>OVER DUB</BottomBigButtonlabel>
           <BottomBigButton style={{backgroundColor:'#82312D'}}></BottomBigButton>
           </BottomBigButtonWrapperSingle>
           <BottomBigButtonWrapperSingle>
           <BottomBigButtonlabel>STOP</BottomBigButtonlabel>
           <BottomBigButton></BottomBigButton>
           </BottomBigButtonWrapperSingle>
           <BottomBigButtonWrapperSingle>
           <BottomBigButtonlabel>PLAY</BottomBigButtonlabel>
           <BottomBigButton></BottomBigButton>
           </BottomBigButtonWrapperSingle>
           <BottomBigButtonWrapperSingle>
           <BottomBigButtonlabel>PLAY START</BottomBigButtonlabel>
           <BottomBigButton></BottomBigButton>
           </BottomBigButtonWrapperSingle>
          </BottomBigButtonWrapper>
         <DRUMSdiv>
           <DrumsBigTitle>DRUMS</DrumsBigTitle>
         <DrumsBigTitlediv></DrumsBigTitlediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 13</DRUMStitle>
           <DRUMStitle2>YZ</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 14</DRUMStitle>
           <DRUMStitle2>&#</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 15</DRUMStitle>
           <DRUMStitle2>- !</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 16</DRUMStitle>
           <DRUMStitle2>'( )'</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 9</DRUMStitle>
           <DRUMStitle2>QR</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 10</DRUMStitle>
           <DRUMStitle2>ST</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 11</DRUMStitle>
           <DRUMStitle2>UV</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 12</DRUMStitle>
           <DRUMStitle2>WX</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 5</DRUMStitle>
           <DRUMStitle2>IJ</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 6</DRUMStitle>
           <DRUMStitle2>KL</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 7</DRUMStitle>
           <DRUMStitle2>MN</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 8</DRUMStitle>
           <DRUMStitle2>OP</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 1</DRUMStitle>
           <DRUMStitle2>AB</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 2</DRUMStitle>
           <DRUMStitle2>CD</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 3</DRUMStitle>
           <DRUMStitle2>EF</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
           <DRUMSsinglediv>
             <DRUMSsinglediv2>
             <DRUMStitle>PAD 4</DRUMStitle>
           <DRUMStitle2>GH</DRUMStitle2>
             </DRUMSsinglediv2>
             <DRUMSbutton></DRUMSbutton>
           </DRUMSsinglediv>
        </DRUMSdiv>
        <Nobsandbuttonswrapper>
        <Specialbuttondiv>
        <Specialbutton></Specialbutton>
        <Specialbutton></Specialbutton>
        <RecGainnob></RecGainnob>
        <MainVolumenob></MainVolumenob>
        </Specialbuttondiv>
        <Specialbuttondiv>
        <Specialbutton></Specialbutton>
        <Specialbutton></Specialbutton>
        <Specialbutton></Specialbutton>
        <Specialbutton></Specialbutton>
        <Specialbutton></Specialbutton>
        <Specialbutton></Specialbutton>
        </Specialbuttondiv>
        </Nobsandbuttonswrapper>
      </div>
    </div>
  );
}

export default App;
