import { Route, Routes } from 'react-router-dom';

//components
import HomePage from './components/Home/HomePage';
import Layout from './components/layout';
import BlogPage from './components/blog/BlogPage';
import AuthorPage from './components/authors/AuthorPage';
import ScrollToTop from './components/shared/ScrollToTop';
import JustBlogs from './components/blog/JustBlogs';

function App() {

  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blogs' element={<JustBlogs/>}/>
        <Route path='/blogs/:slug' element={<BlogPage/>}/>
        <Route path='/authors/:slug' element={<AuthorPage/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
