import styled from "styled-components"

import { StarIcon } from "../../pages/HomePage/styles"

import StarSvg  from "../../assets/shooting-star.svg"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

const WishWallet = () => {
  return (
    <Container>
      <StarIcon src={StarSvg} />
      <h1>Wish Wallet</h1>
    </Container>
  )
}

export default WishWallet