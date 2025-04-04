import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import RecipeCard from "./components/RecipeCard";

const recipes = [
  {
    title: "Smoked salmon burger",
    image: "https://via.placeholder.com/250",
    time: 20,
    servings: 6,
    calories: 210,
    difficulty: 1,
  },
  {
    title: "Tomatoes With Creamy Feta",
    image: "https://via.placeholder.com/250",
    time: 15,
    servings: 3,
    calories: 600,
    difficulty: 2,
  },
  {
    title: "Spicy potato salad",
    image: "https://via.placeholder.com/250",
    time: 30,
    servings: 2,
    calories: 320,
    difficulty: 2,
  },
  {
    title: "Chicken Biryani",
    image: "https://via.placeholder.com/250",
    time: 40,
    servings: 4,
    calories: 700,
    difficulty: 3,
  },
];

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex", gap: "20px", padding: "20px", justifyContent: "center" }}>
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default App;