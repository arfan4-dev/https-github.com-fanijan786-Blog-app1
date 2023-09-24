import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Blog from './component/Blog';
import Footer from './component/Footer';
import { useContext,useEffect } from 'react';
import { ContextProvider } from './context/AppContext';
import SearchBar from './component/SearchBar';

function App() {
  const {fetchBlogApi,filteredPosts, setSearchQuery,setFilteredPosts,posts,searchQuery }=useContext(ContextProvider)
  
  useEffect(()=>{
    fetchBlogApi()
  },[])  ;
  const onSearch = (query) => {
    setSearchQuery(query); // Update the searchQuery state
    filterPosts(query); // Call the filterPosts function
  };

  const filterPosts = (query) => {
    if (query.trim() === '') {
      // If the query is empty, set filteredPosts to all posts
      setFilteredPosts(posts);
    } else {
      // Filter posts based on the query and set filteredPosts
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="App">
      <Header />
      <Footer />
      <SearchBar onSearch={onSearch} /> {/* Pass onSearch to SearchBar */}
      <Blog posts={filteredPosts} searchQuery ={searchQuery }/> {/* Pass filteredPosts to Blog component */}
    </div>
  );
};
export default App