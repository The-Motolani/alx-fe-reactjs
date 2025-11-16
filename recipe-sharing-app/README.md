# Recipe Sharing Application

A recipe sharing platform built with React and Zustand for state management.  
This project includes recipe creation, editing, deleting, searching, filtering, and detailed viewing.  

---

## Features

### Frontend (React + Zustand)

- Add, edit, delete recipes
- Search recipes by title, description, or ingredients
- Filter recipes by maximum prep time
- View detailed recipe pages
- Route-based navigation using React Router
- Global state persisted through Zustand
- Tailwind CSS responsive UI

---

## Tech Stack

### Frontend

- React (Vite)
- Zustand
- React Router DOM
- Axios
- Tailwind CSS

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/alx-fe-reactjs.git
cd alx-fe-reactjs/recipe-sharing-app
```

---

## Frontend Setup

```bash
npm create vite@latest recipe-sharing-app
npm install zustand
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Tailwind Setup

`tailwind.config.js`

```bash
export default {
content: ["./index.html", "./src/**/*.{js,jsx}"],
theme: {
extend: {},
},
plugins: [],
}
```

`src/index.css`

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Start the frontend

`npm run dev`

---

## Project Structure

```bash
src/
    components/
        AddRecipeForm.jsx
        DeleteRecipeButton.jsx
        EditRecipeForm.jsx
        FvoritesList.jsx
        RecipeDetails.jsx
        RecipeList.jsx
        recipeStore.js
        RecommendationsList.jsx
        SearchBar.jsx
App.jsx
main.jsx
```

---

## Author

ALX Frontend ReactJS Project  
Motolani Alebiosu
