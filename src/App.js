import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from "./page/home";
import Helpcardshow from './component/helpCardShow'
import Navegation from './component/nav';
import Sign from './page/sign'
import Log from './page/log';
import Blog from './page/blog';
import Footer from './component/footer'
function App() {

  return (
    <BrowserRouter>
         <Navegation />
        <Routes>
          <Route path='/' element={<Homepage />}/>
          <Route path='/:showid' element={<Helpcardshow />}/>
          <Route path='/sign' element={<Sign />}/>
          <Route path='/log' element={<Log />}/>
          <Route path='/blog' element={<Blog />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
