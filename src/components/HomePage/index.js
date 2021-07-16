import React from 'react';
import { HomeContainer, HomeContent, HomeH1, HomeBtnWrapper, HomeBtn, HomeImg } from './HomePageElements';
import Image from '../../images/svg-7.svg';

const HomePage = ({ handleLogout }) => {
    return (
        <HomeContainer>
            <HomeContent>
                <HomeH1>Thank you for joining NeutrinoVPN!</HomeH1>
            </HomeContent>
            <HomeImg src={Image}></HomeImg>
            <HomeBtnWrapper>
                <HomeBtn onClick={handleLogout}>Log Out</HomeBtn>
            </HomeBtnWrapper>
        </HomeContainer>
    );
}

export default HomePage;
