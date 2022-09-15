import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Aside from './components/Aside';
import Main from './components/Main';

function App() {
  return (
     <div className="flex dark:bg-[#1C1C1E] ">
      <Sidebar/>
     
      <section className='flex-1 dark:border-r-black'><Header/><Main></Main> </section>
       <section><Aside/></section>   
      
     </div>
  );
}

export default App;
