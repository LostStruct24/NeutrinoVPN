import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Account, ErrorMessage, ButtonContainer } from './SigninElements';
import { Button } from '../ButtonElements';

const Login = (props, {primary, dark}) => {
    const { 
        email,
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError 
    } = props;

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Icon to="/NeutrinoVPN">NeutrinoVPN</Icon>
                        <Form action="#">
                            <FormH1>Log in to your account</FormH1>
                            <FormLabel>Email:</FormLabel>
                            <FormInput type='email' autoFocus required value={email} onChange={e => setEmail(e.target.value)} />
                            <ErrorMessage>{emailError}</ErrorMessage>
                            <FormLabel>Password:</FormLabel>
                            <FormInput type='password' required value={password} onChange={e => setPassword(e.target.value)} />
                            <ErrorMessage>{passwordError}</ErrorMessage>
                            <ButtonContainer>
                                {hasAccount ? (
                                    <>
                                    <FormButton onClick={handleLogin}>Sign In</FormButton>
                                    <Account>Don't have an account yet? <Button onClick={() => setHasAccount(!hasAccount)} primary={primary ? 0 : 1} dark={dark ? 0 : 1} style={{marginLeft: '14px', fontSize: '12px'}}>Sign Up</Button></Account>
                                    </>
                                ) : (
                                    <>
                                    <FormButton onClick={handleSignup}>Sign Up</FormButton>
                                    <Account>Already have an account? <Button onClick={() => setHasAccount(!hasAccount)}primary={primary ? 0 : 1} dark={dark ? 0 : 1} style={{marginLeft: '14px', fontSize: '12px'}}>Sign In</Button></Account>
                                    </>
                                )}
                            </ButtonContainer>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default Login;