
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  gap: 1rem;
  padding: 2rem;
  background-color: rgb(42 178 175 / .8);
  color: #FFF;
`

const H2 = styled.h2`
  margin: 0;
`

const List = styled.ul`
  display: grid;
  gap: 5px;
  padding: 0;
  list-style: none;
  color: rgb(255 255 255 / .8);
`


function Right() {
  return (
    <Container>
        <H2>Why Us</H2>
        <List>
          <li>Tutorials by industry experts</li>
          <li>Peer & expert code review </li>
          <li>Coding exercises</li>
          <li>Access to our GitHub repos</li>
          <li>Community forum</li>
          <li>Flashcard decks</li>
          <li>New videos every week</li>
        </List>
    </Container>
  )
}

export default Right