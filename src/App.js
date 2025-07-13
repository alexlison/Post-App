import logo from './logo.svg';
import './App.css';
import AddPost from './Components/AddPost';
import SearchPost from './Components/SearchPost';
import DeletePost from './Components/DeletePost';
import ViewAllPost from './Components/ViewAllPost';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <AddPost /> }/>
      <Route path='view' element={ <ViewAllPost /> }/>
      <Route path='search' element={ <SearchPost /> }/>
      <Route path='delete' element={ <DeletePost /> }/>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
    //  <AddPost />
    //   <SearchPost />
    //   <DeletePost />
    //   <ViewAllPost />
