import styled from "styled-components"

const Container = styled.div`
    padding: 1rem 2rem;
`

const H1 = styled.h1`
    color: var(--Cyan);
`
const LeadParagraph = styled.p`
    color: var(--BrightYellow);
`
const LastParagraph = styled.p`
    color: var(--GrayishBlue);
`


function Top() {
  return (
    <div>
        <Container>
            <H1>
                Join our Community
            </H1>

            <LeadParagraph>
                30-day, hassle-free money back guarantee
            </LeadParagraph>

            <LastParagraph>
                Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.
            </LastParagraph>
        </Container>


    </div>
  )
}

export default Top