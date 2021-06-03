import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Nav = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: white;
`
const Logo = styled.div`
  display: block;
  position: relative;
  height: 4rem;
  width: 100%;
  cursor: pointer;
`
const H4 = styled.h4`
  color: #4e4e4e;
  font-style: italic;
  letter-spacing: -0.5px;
  cursor: default;
`
const P = styled.p`
  color: #5e5e5e;
  font-weight: 500;
  font-size: 0.9em;
  letter-spacing: -0.5px;
  cursor: default;
`
const Header = () => (
  <Nav>
    <Link href='/'>
      <Logo>
        <Image
          src='https://sometextsite.wpengine.com/wp-content/uploads/2021/04/DSN-Logo-2-03.svg'
          alt='Fetch Rewards Logo'
          layout='fill'
        />
      </Logo>
    </Link>
    <H4>Fetch Rewards Coding Exercise</H4>
    <P>by: Travis White</P>
  </Nav>
)

export default Header
