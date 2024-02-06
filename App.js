import { Route,Routes } from 'react-router-dom';
import './App.css';
import {Header,MainContainer,CreateContainer} from './component';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Menu from './component/Menu';
import Services from './component/Services';
import Drink from './component/Drink';


function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-16 md:mt-24 p-8 w-full bg-white">
        <Routes>
          <Route path="/*" element={<MainContainer/>} />
          <Route path="/createItem" element={ <CreateContainer/>} />
          {/* <Route path="/home" element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/services" element={<Services/>} /> */}
        </Routes>
        <Drink/>
      </main>
    </div>
  );
}

export default App;
