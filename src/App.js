
import "./App.css";
import "../src/scss/global-imports.scss";


import { Sidebar } from "./components/Sidebar/Sidebar";
import { Main } from "./pages/Main/Main";


function App() {
  return (
    <>
      <div className="App">
        <div className='sidebarandmain'>
          <Sidebar />
         < Main />
        </div>
      </div>
    </>
  );
}

export default App;
