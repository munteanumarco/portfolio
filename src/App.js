import './App.css';
import {Technologies, Navbar, CTA} from './components/imports';
import {Header, Footer, Projects} from './containers/imports';


function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
        <Navbar />
        <div className='transparent__bg'>
          <Header />
        </div>
      </div>
      <Technologies />
      <Projects />
      <CTA />
      <Footer />
    </div> 
  );
}

export default App;
