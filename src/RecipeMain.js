import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import Recipe from './Recipe';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { BookmarkContext } from './Bookmarkcontext';
import { LocalmarkContext } from './LocalmarkContext';
import { ClickContext } from './Clickcontext';
function RecipeMain(props) {




    const [val, updateVal] = useState("");
    const [recipe, updateRecipe] = useState([]);
    const [bookmark, updateBookMark] = useContext(BookmarkContext);
    const [localmarks, setLocalMarks] = useContext(LocalmarkContext)
    const [click, updateClick] = useContext(ClickContext);

    useEffect(() => {
        const indexNum = bookmark.length - 1
        const index = recipe.findIndex(x => x.recipe.label === bookmark[indexNum]);

        setLocalMarks([...localmarks, recipe[index]])

        localStorage.setItem('bookmark', JSON.stringify(localmarks));

    }, [bookmark])



    const APP_ID = 'fbc8de99';
    const API_KEY = 'cf964b577bc99d9e5807f3cbdeefe47a';
    const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${val}&app_id=${APP_ID}&app_key=${API_KEY}`;

    const fetchData = async () => {
        const response = await axios.get(url)



        try {
            updateRecipe(response.data.hits)
            sessionStorage.clear();
            sessionStorage.setItem('recipes', JSON.stringify(response.data.hits))


        }

        catch (err) {
            alert('Item Not Found!!')
        }




    }


    const getBookMarks = (newbookmark) => {
        updateBookMark([...bookmark, newbookmark])
    }

    const arr1 = sessionStorage.length ? JSON.parse(sessionStorage.getItem('recipes')).map((x) => <Recipe key={x.recipe.label} label={x.recipe.label} calories={x.recipe.calories} img={x.recipe.image} yield={x.recipe.yield} ingredientLines={x.recipe.ingredientLines} gb={getBookMarks} />) : []
    const arr2 = recipe.map((x) => <Recipe key={x.recipe.label} label={x.recipe.label} calories={x.recipe.calories} img={x.recipe.image} yield={x.recipe.yield} ingredientLines={x.recipe.ingredientLines} gb={getBookMarks} />)



    return (
        <div className="grid grid-cols-1">
            <section className='flex justify-center items-center gap-2'>
                <Link to='Bookmark'><i className="fa-solid fa-bookmark text-3xl text-orange-500"></i></Link>
                <input
                    type="text"
                    placeholder="Enter Any Food Item"
                    className='p-2 rounded-xl outline-none'
                    value={val}
                    onChange={(e) => updateVal(e.target.value)}
                />
                <button className='border-2 border-white mx-2 px-2 rounded-xl bg-green text-gray-400 hover:brightness-125' onClick={fetchData}>Get Recipe</button>
            </section>
            <section className='grid grid-cols-5 max-md:grid-cols-1'>
                {/* {recipe.map((x) => {
                    return <Recipe key={x.recipe.label} label={x.recipe.label} calories={x.recipe.calories} img={x.recipe.image} yield={x.recipe.yield} ingredientLines={x.recipe.ingredientLines} gb={getBookMarks} />
                })} */}

                {click ? arr1 : arr2}

            </section>
        </div>
    );
}

export default RecipeMain;
