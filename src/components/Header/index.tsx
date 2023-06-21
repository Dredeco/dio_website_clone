import Image from "next/image";
import styled from "styled-components";
import Logo from '../../../public/logo-dio.png'
import Button from "../Button";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const TagHeader = styled.header`
  background-color: #151515;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  padding: .5rem 6rem;
  padding-top: .7rem;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
  }
  div {
    display: flex;
    gap: 1.7rem;
  }
`

const Header = () => {
  return (
    <TagHeader className={`${inter.className}`}>
      <Container>
        <Link
          href='/'
        >
          <Image 
            src={Logo}
            width={70}
            height={30}
            alt="Dio Logo"
          />
        </Link>
        <div>
          <Link 
            href='/'
          >
            Home
          </Link>

          <Link href='/login'>
            <Button 
              title='Entrar'
            />
          </Link>
          <Link href='/cadastro'>
          <Button 
            title='Cadastrar'
          />
          </Link>
        </div>
      </Container>
    </TagHeader>
  )
}

export default Header
