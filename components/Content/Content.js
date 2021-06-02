import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
`
const Grid = styled.div`
  flex: 1 1 350px;
  margin: 10px;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
`
const H1 = styled.h1`
  width: 100%;
  margin: 5px;
`
const P = styled.p`
  padding: 3px;
  margin: 2px;
  font-size: 12px;
`
const Content = ({ groupedData }) => {
  const sortedData = Object.entries(groupedData).map((arr) => (
    <Grid>
      <H1>Group: {arr[0]}</H1>
      <P>{arr[1].map((a) => a.name)}</P>
    </Grid>
  ))

  return <ContentContainer>{sortedData}</ContentContainer>
}

export default Content
