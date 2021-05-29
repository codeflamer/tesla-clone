import React from 'react';
import styled from 'styled-components';

const Section = ({title,description,backgroundImg,leftBtnText,rightBtnText}) => {
    return (
        <Wrap bgImg={backgroundImg}>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        {leftBtnText}
                    </LeftButton>
                    {rightBtnText && <RightButton>
                                    {rightBtnText}
                                    </RightButton>}
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' alt='arrow-down'/>
            </Buttons>
        </Wrap>
    )
}

const Wrap = styled.section`
    width:100vw;
    height:100vh;
    background-repeat:no-repeat;
    background-size:cover;
    background-position:center;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    background-image:${props => `url('/images/${props.bgImg}')`}
`;
const ItemText = styled.div`
    margin-top:15vh;
    text-align:center;
`;
const Buttons = styled.div`
 
`;
const ButtonGroup = styled.div`
   margin-bottom:20px;
    display:flex;
    @media(max-width:768px){
        flex-direction:column;
    }
`;
const LeftButton = styled.div`
    background:rgba(23,26,32,0.8);
   color:rgb(249,249,249);
   text-align:center;
   border-radius:100px;
   height:40px;
   width:256px;
   display:flex;
   align-items:center;
   justify-content:center;
   cursor:pointer;
   text-transform:uppercase;
   margin:8px;
   font-size:14px;
`;
const RightButton = styled(LeftButton)`
    background:white;
    color:black;
    opacity:0.85;
`;
const DownArrow = styled.img`
    height:40px;
    margin:2px auto;
    display:flex;
    align-items:center;
    animation:bouncing  infinite 1.5s;
`;

export default Section;
