import styled from 'styled-components';

export const HomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    height: 700px;
    position: relative;
    z-index: 1;
    
    @media screen and (min-width: 1500px) {
        height: 1000px;
    }

    @media screen and (min-width:768px) and (max-width:1024px) {
        height: 1300px;
    }

    @media screen and (min-width:300px) and (max-width:768px) {
        height: 800px;
    }
`;

export const HomeContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HomeH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;
    margin-top: 15px;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HomeBtnWrapper = styled.div`
    margin-top: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomeBtn = styled.button`
    padding: 15px 15px;
    font-size: 18px;
    outline: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #008aff;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
    }
`;

export const HomeImg = styled.img`
    height: 400px;
    width: 400px;
    margin-top: 10%;

    @media screen and (max-width: 750px) {
        height: 200px;
        width: 200px;
        margin-top: 40%;
    }

    @media screen and (max-width: 480px) {
        height: 190px;
        width: 190px;
        margin-top: 40%;
    }
`;