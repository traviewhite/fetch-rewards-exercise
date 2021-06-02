import styled from 'styled-components'

const ContentContainer = styled.div`
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 10px;
  background-color: #f1f1f1;
`

const Content = ({ groupedData }) => {
  const sortedData = Object.entries(groupedData).map((arr) => arr[1].map((item) => item.name))

  return (
    <ContentContainer asdfs asdf>
      {sortedData}
    </ContentContainer>
  )
}

export default Content
