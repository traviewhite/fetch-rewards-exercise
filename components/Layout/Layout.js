import styled from 'styled-components'
import Header from '@/components/Navigation/Header'

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: blanchedalmond;
`
const PageContent = styled.div`
  background-color: #f1f1f1;
`

const Layout = ({ children }) => (
  <Container>
    <Header />
    <PageContent>{children}</PageContent>
  </Container>
)

export default Layout
