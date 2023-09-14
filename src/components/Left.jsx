
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--Cyan);
  color: #FFF;
`

const H2 = styled.h2`
  margin: 0;
`

const Price = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 50px;
  margin: 0;
  font-weight: 700;

`

const Span = styled.span`
  font-size: 15px;
  color: rgb(255 255 255 / .5);
`

const P = styled.p`
  font-weight: 700;
  color: rgb(255 255 255 / .9);
  margin: 0;

`

const Button = styled.button`
  background-color: var(--BrightYellow);
  color: #FFF;
  border: none;
  border-radius: 5px;
  padding: .5rem 1.5rem;
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: rgb(192 223 52 / .8);
  }
`

function Left() {
  return (
    
      <Container>
        <H2>Monthly Subscription </H2>
        <Price>R30 <Span>/ per month </Span></Price>
        <P>Full access for less than $1 a day</P>
        <Button>Sign Up</Button>
      </Container>
    
  )
}

export default Left