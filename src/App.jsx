import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import RecipeCard from "./components/RecipeCard";

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