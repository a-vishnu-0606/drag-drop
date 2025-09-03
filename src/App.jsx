import {Provider} from "react-redux"
import Dashboard from "./pages/dashbaord"
import Store from "./store/store"
// import "./assets/css/styles.css" 
// import "./App.css"

function App() {

  return (
    <Provider store={Store}>
      <Dashboard/>
    </Provider>
  )
}

export default App
