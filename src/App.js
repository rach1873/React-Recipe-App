import { useEffect, useState } from 'react'
import axios from 'axios'
import Recipe from './Recipe';

function App() {


  const [val, updateVal] = useState("");
  const [recipe, updateRecipe] = useState([]);



  const APP_ID = 'fbc8de99';
  const API_KEY = 'cf964b577bc99d9e5807f3cbdeefe47a';
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${val}&app_id=${APP_ID}&app_key=${API_KEY}`;

  const fetchData = async () => {
    const response = await axios.get(url)



    try {
      updateRecipe(response.data.hits)


    }

    catch (err) {
      console.log(err)
    }

  }



  return (
    <div className="grid grid-cols-1">
      <section className='flex justify-center'>
        <input
          type="text"
          placeholder="Enter Any Food Item"
          className='p-2 rounded-xl'
          value={val}
          onChange={(e) => updateVal(e.target.value)}
        />
        <button className='border-2 border-white mx-2 px-2 rounded-xl bg-green text-gray-400 hover:brightness-125' onClick={fetchData}>Get Recipe</button>
      </section>
      <section className='grid grid-cols-5 max-md:grid-cols-1'>
        {recipe.map((x) => {
          return <Recipe label={x.recipe.label} calories={x.recipe.calories} img={x.recipe.image} yield={x.recipe.yield} ingredientLines={x.recipe.ingredientLines} />
        })}

      </section>
    </div>
  );
}

export default App;
