import styled from "styled-components";

export const DifficultyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  ${({ level }) =>
    level === 1
      ? "background: #ffcccb; color: red;"
      : level === 2
      ? "background: #ffeb99; color: #c49b00;"
      : "background: #c4f7a1; color: green;"}
`;