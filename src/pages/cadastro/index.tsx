import Head from 'next/head'
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import Button from '@/components/Button'
import Input from '@/components/Input'
import EmailIcon from '@/components/Icons/EmailIcon'
import LockIcon from '@/components/Icons/LockIcon'
import Link from 'next/link'
import UserIcon from '@/components/Icons/UserIcon'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1E192C;
`
const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 90vh;
  display: flex;
  padding: 0 6.5rem;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 12rem;
  
  h2 {
    width: 565px;
    font-weight: 700;
    font-size: 3.2rem;
  }
`
const FormContainer = styled.div`
  form {
    width: 36rem;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 3.2rem;
    }
    span {
      margin-top: .8rem;
      font-size: 1.6rem;
      margin-bottom: 3.5rem;
    }
    input {
      font-size: 1.6rem;
      width: 100%;
      margin: .5rem 0;
      color: #fff;
    }
    button {
      margin-top: 4rem;
      width: 100%;
    }
  }
  .register-info {
      margin-top: 3rem;
      font-size: 1.6rem;
      max-width: 37rem;
      p {
        margin-top: 1rem;
        font-weight: 700;
        a {
          text-decoration: none;
          color: #23DD7A;
          margin-left: .5rem;
        }
      }
  }
`


export default function Login() {
  return (
    <>
      <Head>
        <title>Dio Login - Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Main className={`${inter.className}`}>
          <Header />
          <Container>
            <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
            <FormContainer>
              <form>
                <h1>Comece agora grátis</h1>
                <span>Crie sua conta e make the change</span>
                <Input name='Nome Completo' leftIcon={<UserIcon />} type='text' />
                <Input name='E-mail' leftIcon={<EmailIcon />} type='email' />
                <Input name='Password' leftIcon={<LockIcon />} type='password' />
                <Button title='Criar minha conta' variant='secondary' type='button' />
              </form>
              <div className='register-info'>
                <span>{'Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.'}</span>
                <p>Já tenho conta. 
                <Link href='/login' className='newUser'>
                  Fazer login
                </Link>
                </p>
              </div>
            </FormContainer>
          </Container>
        </Main>
    </>
  )
}
