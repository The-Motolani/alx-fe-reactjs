import { useState, useEffect } from "react";


export default function Homepage() {
const [recipes, setRecipes] = useState([]);

useEffect(() => {
    fetch("./data.json")
    .then((response) => response.json())
    .then((data) => setRecipes(data))
    .catch((error) => console.log('Error loadinf recipe data:', error));
}, []
);

    return(
        <>
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8">
                Recipe Sharing Platform
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {recipes.map((recipe) => (
                    <motion.div
                    key={recipe.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg p-4 cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    >
                        <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                    <p className="text-gray-600 text-sm">{recipe.summary}</p>
                    <a href={`/recipe/${recipe.id}`}
                    className="inline-block mt-3 text-blue-600 font-medium hover:underline"
                    >View Details
                    </a>
                    </motion.div>
                    
                ))}

            </div>
        </div>
        </>
    );

}