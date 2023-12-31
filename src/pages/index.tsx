import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import ImageBg from '../../public/banner.png'
import Button from '@/components/Button'
import Link from 'next/link'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const Main = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  color: #fff;
  justify-content: space-between;

  div {
    width: 36.8rem;
    h1 {
      font-size: 3.2rem;
      font-weight: 700;
      p{
        color: #E4105D;
      }
    };
    span {
      display: block;
      font-size: 1.6rem;
      margin-top: 1.3rem;
      margin-bottom: 5rem;
    }
  }
`

export default function Home() {

  return (
    <>
      <Head>
        <title>Dio - Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Main className={`${inter.className}`}>
          <Header />
          <Container>
            <div>
              <h1><p>Implemente</p>o seu futuro global agora!</h1>
              <span>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</span>
              <Link href={`/login`}>
                <Button title='Começar agora' variant='secondary' />
              </Link>
            </div>
            <Image 
              src={ImageBg}
              width={563}
              height={366}
              alt='DIO Banner'
            />
          </Container>
        </Main>
    </>
  )
}
