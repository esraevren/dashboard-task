 import './App.css';
import Header from './components/Header';
 import './components/Search';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import Aside from './components/Aside';

function App() {
  return (
    <div className="w-full min-h-screen  flex flex-row ">
      <Sidebar/>
     
      <section className='  flex-3'><Header/>
      
      </section>
      <section className=' w-96'><Aside/></section>
      
    </div>
  );
}

export default App;
