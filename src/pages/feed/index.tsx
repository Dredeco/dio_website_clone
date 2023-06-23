import Head from 'next/head'
import { Inter } from 'next/font/google'
import styled from 'styled-components'
import Header from '@/components/Header'
import Image from 'next/image'
import cardImage from '../../../public/card-img.png' 
import userImage from '../../../public/user.png'
import ThumbsUpIcons from '@/components/Icons/ThumbsUpIcon'

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

  .main {
    .card {
      max-width: 76.7rem;
      background-color: #3B4651;
      .card-info {
        padding: .5rem 1.2rem;
        display: flex;
        flex-direction: column;
        gap: 1.3rem;
        font-size: 1.6rem;
        .card-user-info {
          display: flex;
          gap: .9rem;
          align-items: center;
        }
        .card-post-info {
          display: flex;
          flex-direction: column;
          gap: .5rem;
          p {
            color: #ccc;
          }
          .post-likes {
            display: flex;
            align-items: center;
            fill: white;
            gap: .5rem;
          }
        }
      }
    }
  }

  .ranking {
    height: 35.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .ranking-container {
      .ranking-user {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        .ranking-user-status{
          font-size: 1.6rem;
          .ranking-status {
            width: 180px;
            height: 6px;
            background-color: #FFFFFF;
            border-radius: 3px;
            position: relative;
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 80%;
                height: 6px;
                border-radius: 3px;
                background-color: #23DD7A;
            }
          }
        }
      }
    }
  }
`

export default function Feed() {

  return (
    <>
      <Head>
        <title>Dio - Feed</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Main className={`${inter.className}`}>
          <Header />
          <Container>
            <div className="main">
              <div className="card">
                <Image 
                  src={cardImage}
                  alt='card image'
                  width={767}
                  height={160}
                  layout='responsive'
                />
                <div className="card-info">
                  <div className="card-user-info">
                    <Image 
                      src={userImage}
                      alt='user image'
                      width={32}
                      height={32}
                    />
                    <div>
                      <h3>Pablo Henrique</h3>
                      <span>Há 8 minutos</span>
                    </div>
                  </div>

                  <div className="card-post-info">
                    <h2>Projeto para curso de HTML e CSS</h2>
                    <span>Projeto feito no curso de html e csss no bootcamp da DIO do Global awanade... <strong>Ver Mais</strong></span>
                    <p>#HTML #CSS #JavaScript</p>
                    <div className="post-likes">
                      <ThumbsUpIcons /><h2>10</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ranking">
              <h1># RANKING TOP 5 DA SEMANA</h1>
              <div className="ranking-container">
                <div className="ranking-user">
                  <Image 
                    src={userImage}
                    alt='user image'
                    width={35}
                    height={35}                    
                  />
                  <div className="ranking-user-status">
                    <h3>Pablo Henrique</h3>
                    <div className="ranking-status"></div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Main>
    </>
  )
}
