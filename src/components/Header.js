import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { selectCar } from '../features/car/carSlice';

const Header = () => {
    const [BurgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCar);
    return (
        <Container>
            <a>
                <img src='/images/logo.svg' alt='Tesla-Logo'/>
            </a>
            <Menu>
                {cars && cars.map((car,index)=>(
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <a href='#' key={index}>{car}</a>
                ))}
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={BurgerStatus}>
                <CloseContainer>
                    <CloseBtn onClick={()=>setBurgerStatus(false)}/>
                </CloseContainer>
                {cars && cars.map((car,index)=>(
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    <li key={index}><a href='#'>{car}</a></li>
                ))}
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-in</a></li>
                <li><a href='#'>Cybertruck</a></li>
                <li><a href='#'>Roadaster</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Existing Inventory</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.nav`
    position:fixed;
    // border:1px solid red;
    top:0;
    left:0;
    right:0;
    height:60px;
    display:flex;
    padding:0 20px;
    align-items:center;
    justify-content:space-between;
    
    z-index:5;
`
const Menu = styled.div`
    text-transform:uppercase;
    a{
        font-weight:600px;
        padding-right:20px;
    }
    @media(max-width:768px){
        display:none;
    }
`
const RightMenu = styled.div`
text-transform:uppercase;
    display:flex;
    align-items:center;
     a{
        font-weight:600px;
        padding-right:20px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`


const BurgerNav = styled.div`
    position:fixed;
    top:0;
    right:0;
    bottom:0;
    background:white;
    width:300px;
    list-style:none;
    padding:20px;
    transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        padding:15px 0;
        border-bottom:1px solid rgba(0,0,0,.2);
    }
`

const CloseContainer = styled.div`
    display:flex;
    justify-content:flex-end;
`
const CloseBtn = styled(CloseIcon)`
    cursor:pointer;
`
