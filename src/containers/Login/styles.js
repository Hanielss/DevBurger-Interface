import styled from "styled-components";
import BackgroundLogin from '../../assets/background-login.svg'
import Background from '../../assets/background.svg'


export const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;

`;

export const LeftContainer = styled.div`
background: url('${BackgroundLogin}');
background-size: cover;
background-position: center;

height: 100%;
width: 100%;
max-width: 50%;

display: flex;
align-items: center;
justify-content: center;

img {
    width: 80%;
}

`;

export const RightContainer = styled.div`
background: url('${Background}');
background-color: #1e1e1e;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

height: 100%;
width: 100%;
max-width: 50%;

p{
        color: #ffff;
        font-size:18px;
        font-weight: 800;

    a {
       text-decoration: underline;
       

      }
}

`;

export const Title = styled.h2`
font-family: "Road Rage", sans-serif;
font-size: 40px;
color: #ffffff;

span{
    color: #9758A6;
    font-family: "Road Rage", sans-serif;

}

`;

export const Form = styled.form`

display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
width: 100%;
max-width: 400px;


`;

export const InputContainer = styled.div`

display: flex;
flex-direction: column;
gap: 20px;
width: 100%;

input{
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
}

label{
    font-size: 18px;
    font-weight: 600;
    color: #ffffff
}

p {
    font-size: 11px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 450px;
    height: 10px;


}


`;
