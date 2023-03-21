import RecipeMain from './RecipeMain.js'
import Bookmark from './Bookmark.js';
import { Routes, Route } from 'react-router-dom'
import { BookmarkProvider } from './Bookmarkcontext.js';
import { LocalmarkProvider } from './LocalmarkContext.js';
import { ClickProvider } from './Clickcontext.js';

function App() {


  return (

    <ClickProvider>
      <LocalmarkProvider>
        <BookmarkProvider>
          <div className="grid grid-cols-1">
            <Routes>
              <Route path='/' element={<RecipeMain />} />
              <Route path='/Bookmark' element={<Bookmark />} />
            </Routes>
          </div>
        </BookmarkProvider>
      </LocalmarkProvider>
    </ClickProvider>



  );
}

export default App;
