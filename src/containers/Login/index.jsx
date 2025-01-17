import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"



import Logo from '../../assets/logo.svg'
import { Button } from '../../components/Button'

import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title
} from "./styles"




export function Login() {

    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
            password: yup.string().min(6,'A senha deve ter pelo menos 6 caracteres').required('Digite uma senha'),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = (data) => console.log(data)
    console.log(errors)



    return (

        <Container>

            <LeftContainer>

                <img src={Logo} alt='logo-devBurger' />

            </LeftContainer>

            <RightContainer>

                <Title>
                    Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>


                    <Button type="submit">Entrar</Button>

                </Form>

                <p>
                    Não possui Conta? <a>Clique aqui</a>
                </p>

            </RightContainer>



        </Container>


    )
}