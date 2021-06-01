export default function App({ data }) {
  console.log(data)
  return <div></div>
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
