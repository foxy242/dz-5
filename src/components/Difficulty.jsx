import React from "react";
import { DifficultyWrapper, Badge } from "../styles/DifficultyStyles";

const Difficulty = ({ level }) => {
  return (
    <DifficultyWrapper>
      <strong>Difficulty</strong>
      <div>
        <Badge level={1}>Easy</Badge>
        <Badge level={2}>Medium</Badge>
        <Badge level={3}>Hard</Badge>
      </div>
    </DifficultyWrapper>
  );
};

export default Difficulty;
