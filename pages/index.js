import styled from 'styled-components'
import Layout from '@/components/Layout/Layout'

// OBJECTIVE
// Display all the items grouped by "listId"
// Sort the results first by "listId" then by "name" when displaying.
// Filter out any items where "name" is blank or null.

export default function App({ data }) {
  console.log(data)
  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}

const API_URL = 'https://fetch-hiring.s3.amazonaws.com/hiring.json'

export async function getStaticProps() {
  const res = await fetch(API_URL)
  const items = await res.json()

  return {
    props: {
      data: items ?? null,
    },
    revalidate: 60,
  }
}
