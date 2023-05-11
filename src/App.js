import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import WatchPage from './components/WatchPage';
import SearchVideos from './components/SearchVideos';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" exact element={<Body/>}/>
            <Route path="/video/:id" element={<WatchPage/>}/>
            <Route path="/search/:searchTerm" element={<SearchVideos/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
