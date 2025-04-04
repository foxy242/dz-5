import styled from "styled-components";

export const Card = styled.div`
  background: #fdf4dc;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 250px;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Title = styled.h3`
  margin: 10px 0;
  font-size: 18px;
`;

export const Info = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 5px 0;
`;