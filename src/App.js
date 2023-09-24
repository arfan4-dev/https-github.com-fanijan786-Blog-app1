import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Blog from './component/Blog';
import Footer from './component/Footer';
import { useContext,useEffect } from 'react';
import { ContextProvider } from './context/AppContext';

function App() {
  const {fetchBlogApi}=useContext(ContextProvider)
  useEffect(()=>{
    fetchBlogApi()
  },[])
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <Blog/>
    </div>
  );
}

export default App;
