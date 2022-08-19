import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TokensContext from "../../contexts/TokensContext";

import LogoSvg  from "../../assets/logo.svg"
import StarSvg  from "../../assets/shooting-star.svg"

import { Main, HeaderLogo, Logo, TitleContainer, StarIcon, AddButton, ListContainer } from "./styles";
import HomeTable from "../../components/HomeTable";
import TokensList from "../../components/TokensList";

const HomePage = () => {
  let navigate = useNavigate();
  const data = useContext(TokensContext)

  return (
    <Main>
      <HeaderLogo>
        <Logo src={LogoSvg} alt="Klever Logo" />
      </HeaderLogo>
      <TitleContainer>
        <StarIcon src={StarSvg} />
        <h1>Wish Wallet</h1>
        <AddButton onClick={() => { navigate("token/add");}}>Add Token</AddButton>
      </TitleContainer>
      <ListContainer>
        <HomeTable>
          <TokensList data={data}/>
        </HomeTable>
      </ListContainer>
    </Main>
  )
}

export default HomePage