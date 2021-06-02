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
  align-content: center;
  background-color: white;
`
const Logo = styled.div`
  display: block;
  position: relative;
  height: 4rem;
  width: 100%;
  > div {
  }
`
const H4 = styled.h4`
  color: dimgray;
  letter-spacing: -0.5px;
  font-style: italic;
`
const P = styled.p`
  color: gray;
  font-weight: 500;
  font-size: 0.9em;
  letter-spacing: -0.5px;
`
const Header = () => (
  <Nav>
    <Logo>
      <Link href='/'>
        <Image
          src='https://sometextsite.wpengine.com/wp-content/uploads/2021/04/DSN-Logo-2-03.svg'
          alt='Fetch Rewards Logo'
          layout='fill'
        />
      </Link>
    </Logo>
    <H4>Fetch Rewards Coding Exercise</H4>
    <P>by: Travis White</P>
  </Nav>
)

export default Header
