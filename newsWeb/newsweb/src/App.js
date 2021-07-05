import { BrowserRouter} from 'react-router-dom';

import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'; 
import './App.scss';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head/>
      <Main/>
      </BrowserRouter>
      <Footer/>     
    </div>
  );
}

export default App;
