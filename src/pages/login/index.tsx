import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import styled from 'styled-components'
import ImageBg from '../../../public/banner.png'
import Button from '@/components/Button'
import Input from '@/components/Input'
import EmailIcon from '@/components/Icons/EmailIcon'
import LockIcon from '@/components/Icons/LockIcon'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Main = styled.main`
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1E192C;
`
const Container = styled.div`
  width: 100%;
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
    width: 27rem;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 3.2rem;
    }
    span {
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
  .links {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4rem;
    a {
      text-decoration: none;
      font-size: 1.4rem;
      font-weight: 700;
    }
    .forgotPassword {
      color: #E5E044;
    }
    .newUser {
      color: #23DD7A;
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
          <Container>
            <h2>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</h2>
            <FormContainer>
              <form>
                <h1>Login</h1>
                <span>Faça seu login e make the change</span>
                <Input name='E-mail' leftIcon={<EmailIcon />} type='email' />
                <Input name='Password' leftIcon={<LockIcon />} type='password' />
                <Button title='Entrar' variant='secondary' type='button' />
              </form>
              <div className='links'>
                <Link href='/' className='forgotPassword'>
                  Esqueci minha senha
                </Link>
                <Link href='/' className='newUser'>
                  Criar conta
                </Link>
              </div>
            </FormContainer>
          </Container>
        </Main>
    </>
  )
}
