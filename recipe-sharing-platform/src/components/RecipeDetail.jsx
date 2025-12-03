import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import recipesData from "../data.json"

export default function RecipeDetail() {
    const {id} = useParams();
    const [recipes, setRecipes] = useState(null);

     useEffect(() => {
        const found = recipesData.find((r) => r.id === Number(id));
        setRecipes(found);
     }, [id]
    );

    if (!recipes) {


        return (
            < div className="flex justify-center items-center h-screen text-xl">
                Recipe not found
            </div>
        );
    }

    return(
     
      
       <div className="min-h-screen bg-gray-100 p-5 flex justify-between">
      <div className="bg-white max-w-3xl w-full rounded-lg p-6">
        <img
          src={recipes.image}
          alt={recipes.title}
          className="h-64 w-full object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-3">{recipes.title}</h1>
        <p className="text-gray-700 mb-6">{recipes.summary}</p>

        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 mb-6">
          {recipes.ingredients.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal pl-6 space-y-2">
          {recipes.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
    
    )
};