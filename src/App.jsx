import Top from './components/Top'
import Left from './components/Left'
import Right from './components/Right'

import styled from 'styled-components'

const MainContainer = styled.div`
  display: grid;
  width: min(90%, 600px);
  margin: 2rem auto;
  background-color: #FFF;
  box-shadow: 1px 1px 10px rgb(0 0 0 / .6);
  border-radius: 5px;
`

const LowerContainer = styled.div`
  display: grid;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

`

function App() {
  return (
    <div className='main__container'>
      <MainContainer>
        <Top />
        <LowerContainer>
          <Left />
          <Right />
        </LowerContainer>
      </MainContainer>
    </div>
  )
}

export default App
