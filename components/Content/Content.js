import styled from 'styled-components'

const ContentContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
`
const Grid = styled.div`
  flex: 1 1 350px;
  margin: 1em;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
`
const H1 = styled.h1`
  width: 100%;
  margin: 0.5em;
  color: #300d39;
`
const Ol = styled.ol`
  padding: 0 1em;
  margin: 0.5em 0.25em;
  max-height: 25vh;
  font-size: 1em;
  font-weight: 600;
  list-style-position: inside;
  list-style-type: decimal-leading-zero;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple;
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background: inherit;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #5b196b;
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #300d39;
  }
`
const Li = styled.li`
  padding: 3px;
  margin: 0.5em 0;
  ::marker {
    color: #5e5e5e;
    font-size: 0.9em;
    font-weight: 400;
    letter-spacing: -0.5px;
  }
  ::before {
    content: '';
    margin-right: 0.5em;
  }
`
const Content = ({ groupedData }) => {
  const sortedData = Object.entries(groupedData).map((arr) => (
    <Grid key={arr[0]}>
      <H1>Group: {arr[0]}</H1>
      <Ol>
        {arr[1]
          .filter((filter) => filter.name)
          .sort((a, b) => {
            let nameA = a.id
            let nameB = b.id
            if (nameA < nameB) {
              return -1
            }
            if (nameA > nameB) {
              return 1
            }
            return 0
          })
          .map((item) => (
            <Li key={item.name}>{item.name}</Li>
          ))}
      </Ol>
    </Grid>
  ))

  return <ContentContainer>{sortedData}</ContentContainer>
}

export default Content
