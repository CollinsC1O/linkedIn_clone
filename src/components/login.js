import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Nav>

                <a href="/">
                    <img src="/images/side_logo.png" alt="Home" />
                </a>

                <div>
                    <Join>
                        <a href="/component">Join now</a>
                    </Join>
                    <SignIn>
                        SignIn
                    </SignIn>
                </div>
            </Nav>
            <Section>
                <Hero>
                    <h1>Welcome to your professional community</h1>
                    <img src="/images/centerImg.jpeg" alt="center/side-img" />
                </Hero>
                <Form>
                    <Google>
                        <img src="/images/google.svg" alt="google-img" /> 
                        <span>Sign in with Google</span>
                    </Google>
                </Form>
            </Section>
        </Container>
    )
}

const Container = styled.div`
    padding: 0px;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    flex-wrap: nowrap;
    a, img {
        width: 250px;
    }
    & > a{
        width: 135px;
        height: 34px;

        @media (max-width: 768px) {
            padding: 0 5px;

        }
    }

`
const Join = styled.a`
    font-size: 16px;
    padding: 10px 12px;
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
    margin-right: 12px;
    border-radius: 4px;
    &:hover{
        background-color: rgba(0, 0, 0, 0.08);
        color: rgba(0, 0, 0, 0.9);
        text-decoration: none;
    }
    
`
const SignIn = styled.a`
    box-shadow: inset 0 0 0 1px #0a66c2;
    color: #0a66c2;
    border-radius: 24px;
    transition-duration: 167ms;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
    padding: 10px 24px;
    text-align: center;
    background-color: rgba(0,0,0,0);
    &:hover{
        background-color: rgba(112, 181, 249, 0.15);
        color: #0a66c2;
        text-decoration: none;
    }
`
const Section = styled.section`
    align-content: start;
    display: flex;
    min-height: 700px;
    padding-bottom: 138px;
    padding-top: 40px;
    padding: 60px 0;
    position: relative;
    flex: wrap;
    width: 100%;
    max-width: 1128px;
    align-items: center;
    margin: auto;
    @media (max-width: 768px){
        margin: auto;
        min-height: 0px;
    }
`
const  Hero = styled.div `
    width: 100%;
    h1{
        padding-bottom: 0;
        width: 55%;
        font-size: 56px;
        color: #2977c9;
        font-weight: 200;
        line-height: 70px;
        @media (max-width: 768px){
            text-align: center;
            font-size: 20px;
            width: 100%;
            line-height: 2;
        }
    }

    img{
        /* z-index: -1; */
        width: 400px;
        height: 400px;
        position: absolute;
        bottom: -2px;
        right: -150px;
        top: 0;
        margin-right: 100px;
        border-radius: 5px;
        @media (max-width: 768px){
            top: 230px;
            width: initial;
            position: initial;
            height: initial;
        }
    }
`;
const Form = styled.div`
    margin-top: 100px;
    width: 480px;
    @media (max-width: 768px) {
        margin-top: 20px;
    }
`

const Google = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fff;
    align-items: certer;
    height: 56px;
    width: 100%;
    border-radius: 28px;
    box-shadow: inset 0 0 0 1px rgba(0 0 0 / 60),
        inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0); //generate it from box shadow generator
    vertical-align: middle;
    z-index: 0;
    transition-duration: 167ms;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.6);
    span{
        padding: 13px 10px;
    }
    &:hover{
        background-color: rgba(207, 207, 207, 0.25);
        color: rgba(0, 0, 0, 0.75);
        
    }

`
export default Login;