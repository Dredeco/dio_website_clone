import styled from "styled-components";
import logo from "../../../public/logo-dio.png";
import { useAuth } from "@/hooks/useAuth";
import Button from "../Button";
import Link from "next/link";
import Image from "next/image";


export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size:18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration:none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size:12px;
    line-height: 25px;
    color: #FFFFFF;
    margin-right: 12px;
    text-decoration:none;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #FFFFFF;
    margin-right: 12px;
`

export const Input = styled.input`
    background: transparent;
    flex:1;
    border: 0;
    color: #FFFFFF;
`

const Header = () => {
  const { user, handleSignOut } = useAuth();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link href="/">
            <Image src={logo} alt="Logo da dio" />
          </Link>
          {user.id ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {user.id ? (
            <>
              <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />{" "}
              <a href="#" onClick={handleSignOut}>
                Sair
              </a>
            </>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };