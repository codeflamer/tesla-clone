import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-s.jpg'
                leftBtnText='custom order'
                rightBtnText='Existing inventory'
            />
            <Section
                  title='Model Y'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-y.jpg'
                leftBtnText='custom order'
                rightBtnText='Existing inventory'
            />
            <Section
                  title='Model X'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-x.jpg'
                leftBtnText='custom order'
                rightBtnText='Existing inventory'
            />
             <Section
                 title='Model 3'
                description='Order Online for Touchless Delivery'
                backgroundImg='model-3.jpg'
                leftBtnText='custom order'
                rightBtnText='Existing inventory'
            />
            <Section
                  title='Lowest Cost Solar Panel in America'
                description='Money-back gurantee'
                backgroundImg='solar-panel.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn More'
            />
            <Section
                  title='Solar for New Roofs'
                description='Solar Roof Costs Less Than a new Roof'
                backgroundImg='solar-roof.jpg'
                leftBtnText='Order Now'
                rightBtnText='Learn more'
            />
            <Section
                  title='Accessories'              
                backgroundImg='accessories.jpg'
                leftBtnText='Shop now'
            />
        </Container>
    )
}

export default Home

const Container = styled.main`
    height:100vh;
`;
