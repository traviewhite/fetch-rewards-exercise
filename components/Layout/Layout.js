import styled from 'styled-components'
import Header from '@/components/Navigation/Header'
import Footer from '@/components/Navigation/Footer'

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  background-image: url('https://www.fetchrewards.com/static/aedee851c8352c6d8740c6bd4769d95c/ReviewsBackground-19_1.svg');
  background-position: center bottom -10vh;
  background-repeat: no-repeat;
`
const PageContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <Container>
    <Header />
    <PageContent>{children}</PageContent>
    <Footer />
  </Container>
)

export default Layout
