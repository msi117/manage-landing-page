import './App.css';
import About from './containers/abouts/About';
import Community from './containers/community/Community';
import Footer from './containers/footer/Footer';
import Header from './containers/header/Header';
import Manage from './containers/manage/Manage';
import Simplify from './containers/simplify/Simplify';

function App() {
  return (
    <div className='App'>
      <Header />
      <Manage />
      <About />
      <Community />
      <Simplify />
      <Footer />
    </div>
  );
}

export default App;
