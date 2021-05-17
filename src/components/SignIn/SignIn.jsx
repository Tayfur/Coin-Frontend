import React from 'react'
import { 
    Container, 
    Form, 
    FormButton, 
    FormContent, 
    FormH1, 
    FormInput, 
    FormLabel, 
    FormWrap, 
    Icon, 
    Text,
    Logo
} from './SigninElements'
import logo from "../../images/logo.png"
const SignIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <FormContent>
                    <Form action="#">
                        <Logo  src={logo}/>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Pasword</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Sign In</FormButton>
                        <Text>Forgot password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container> 
        </>
    )
}

export default SignIn
