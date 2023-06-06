import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Blog from './Component/Blog';
import Read from './Component/Read';
import Addblog from './Component/Addblog';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Addblog/>}/>
          <Route  path='/blog' element={<Blog/>}/>
          <Route  path='/read/:id' element={<Read/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
