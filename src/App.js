import RecipeMain from './RecipeMain.js'
import Bookmark from './Bookmark.js';
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div className="grid grid-cols-1">
      <Routes>
        <Route path='/' element={<RecipeMain />} />
        <Route path='/Bookmark' element={<Bookmark />} />
      </Routes>

    </div>
  );
}

export default App;
