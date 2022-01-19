import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 500px;
    position: fixed;
    bottom: 0;
    left: 0;
    right:  0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #000;
`;

export const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 25px;
`;

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    gap: 10px;
`;

export const Form = styled.form`
    background: #2f2e41;
    max-width: 400px;
    height: 550px;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 30px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormH1 = styled.h1`
    margin-bottom: 20px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormButton = styled.button`
    background: #008aff;
    padding: 14px 14px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    width: 100%;
`;

export const Account = styled.h3`
    color: #fff;
    font-size: 15px;
    padding: 20px;
    display: flex;
    align-items: center;
`;

export const ErrorMessage = styled.p`
    color: #fff;
    font-size: 15px;
    margin-bottom: 10px;
`;

export const ButtonContainer = styled.div`
    padding: 12px;
    margin: auto;
`;