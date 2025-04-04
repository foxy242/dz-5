import React from "react";
import { Card, RecipeImage, Title, Info } from "../styles/RecipeCardStyles";
import Difficulty from "./Difficulty";

const RecipeCard = ({ recipe }) => {
  return (
    <Card>
      <RecipeImage src={recipe.image} alt={recipe.title} />
      <Title>{recipe.title}</Title>
      <Info>🕒 {recipe.time} min | 🍽 {recipe.servings} servings | 🔥 {recipe.calories} calories</Info>
      <Difficulty level={recipe.difficulty} />
    </Card>
  );
};

export default RecipeCard;