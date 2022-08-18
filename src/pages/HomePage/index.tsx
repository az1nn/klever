import styled from "styled-components"
import SVG from "react-inlinesvg";

import LogoSvg  from "../../assets/logo.svg"
import StarSvg  from "../../assets/shooting-star.svg"
import EditSvg from "../../assets/fa-solid_edit.svg"

const Main = styled.div`
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
const HeaderLogo = styled.div`
  width: 80px;
`
const Logo = styled.img`
  width: 100%;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`
const StarIcon = styled(SVG)`
  width: 40px;
  height: 40px;
  & path {
    fill: yellow;
  }
`;
const AddButton = styled.button`
  width: 110px;
  height: 40px;
  font-size: medium;
  background-color: purple;
  color: #fff;
  border-radius: 6px;
  border: none;
`
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
`
const TableHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const TableContent = styled.div`
  display: flex;
  flex-direction: column;
`
const EditIcon = styled(SVG)`
  width: 40px;
  height: 40px;
  & path {
    fill: #FFF;
  }
`;

const HomePage = () => {
  return (
    <Main>
      <HeaderLogo>
        <Logo src={LogoSvg} alt="Klever Logo" />
      </HeaderLogo>
      <TitleContainer>
        <StarIcon src={StarSvg} />
        <h1>Wish Wallet</h1>
        <AddButton>Add Token</AddButton>
      </TitleContainer>
      <ListContainer>
        <table>
          <TableHeader>
            <tr>
              <th>Tokens</th>
              <th>Balance</th>
            </tr>
          </TableHeader>
          <TableContent>
            <tr>
              <div>
                <EditIcon src={EditSvg} />
              </div>
              <td>AINDA</td>
              <td>LABEL</td>
            </tr>
          </TableContent>
        </table>
      </ListContainer>
    </Main>
  )
}

export default HomePage