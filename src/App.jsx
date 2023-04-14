
import { RoutesMain } from './routes'
import { GlobalReset } from './styles/reset'
import { GlobalStyle } from './styles/global'

function App() {

  return (
    <div className="App">
      <GlobalReset />
      <GlobalStyle />
      <RoutesMain />
    </div>
  )
}

export default App
