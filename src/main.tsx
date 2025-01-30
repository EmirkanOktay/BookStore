import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { store } from './Redux/Store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import Router from './Router/Router'

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Router />
      </Provider>
    </BrowserRouter>

  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  )
}