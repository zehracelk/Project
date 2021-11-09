


import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import home from './pages/home';
import about from './pages/about';
import menu from './pages/menu';
import { BrowserRouter,Switch ,Route} from 'react-router-dom';

function App() {
  return (<>
    <Navbar/>
    
    <BrowserRouter>
    <Switch>
    
      <Route path='/' exact component={home}/>
      <Route path='/menu' component={menu}/>
      <Route path='/about' component={about}/>
      
      </Switch>
    </BrowserRouter>
   
    
    <Footer/>
    </>




   );
}

export default App;
