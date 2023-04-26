import { RoutesMain } from './routes'
import { GlobalReset } from './styles/reset'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <div className="App">
      <ToastContainer autoClose={2000} />
      <GlobalReset />
      <GlobalStyle />

      <RoutesMain />
    </div>
  )
}

export default App
