import LogoSvg  from "../../assets/logo.svg"
import StarSvg  from "../../assets/shooting-star.svg"
import EditSvg from "../../assets/fa-solid_edit.svg"

import { Main, HeaderLogo, Logo, TitleContainer, StarIcon, AddButton, ListContainer, TableRow, EditIcon, TableText } from "./styles";
import HomeTable from "../../components/HomeTable";

const TokensList = () => {
  return (
    <div>
      <TableRow>
        <div onClick={() => console.log('ainda label')} >
          <EditIcon src={EditSvg} />
        </div>
        <TableText>AINDA</TableText>
        <TableText>LABEL</TableText>
      </TableRow>
      <TableRow>
        <div onClick={() => console.log('ainda label')} >
          <EditIcon src={EditSvg} />
        </div>
        <TableText>AINDA</TableText>
        <TableText>LABEL</TableText>
      </TableRow>
      <TableRow>
        <div onClick={() => console.log('ainda label')} >
          <EditIcon src={EditSvg} />
        </div>
        <TableText>AINDA</TableText>
        <TableText>LABEL</TableText>
      </TableRow>
    </div>
  )
}

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
        <HomeTable>
          <TokensList />
        </HomeTable>

      </ListContainer>
    </Main>
  )
}

export default HomePage