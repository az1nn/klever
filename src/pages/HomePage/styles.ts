import styled from "styled-components"
import SVG from "react-inlinesvg";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #13152A;
  color: #fff;
`
export const HeaderLogo = styled.div`
  width: 80px;
`
export const Logo = styled.img`
  width: 100%;
`
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`
export const StarIcon = styled(SVG)`
  width: 40px;
  height: 40px;
  & path {
    fill: yellow;
  }
`;
export const AddButton = styled.button`
  width: 110px;
  height: 40px;
  font-size: medium;
  background-color: purple;
  color: #fff;
  border-radius: 6px;
  border: none;
`
export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const EditIcon = styled(SVG)`
  width: 16px;
  height: 16px;
  & path {
    fill: #FFF;
  }
`;
export const TableText = styled.td`
  font-size: large;
`
export const TableRow = styled.td`
  display: flex;
  flex-direction: row;
`