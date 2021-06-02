import styled from 'styled-components'
import Header from '@/components/Navigation/Header'

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`
const PageContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <Container>
    <Header />
    <PageContent>{children}</PageContent>
  </Container>
)

export default Layout
