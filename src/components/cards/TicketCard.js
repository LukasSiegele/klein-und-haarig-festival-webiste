import React from "react"
import styled from "styled-components"
import { animations } from "../styles/AnimationStyles"
import TicketCardImage from "../../../static/images/TicketCardImage.jpg"

export default function TicketCard(props) {
  return (
    <Wrapper
      isSelected={props.isSelected}
      spendeSelected={props.spendeSelected}
      onClick={props.handleSelection}
      limit={props.limit}
      cardBackground={props.cardBackground}
    >
      <Title titleSize={props.titleSize}> {props.title}</Title>
      <Price>{props.price}</Price>
      <DetailWrapper
        isSelected={props.isSelected}
        singleLineDetail={props.singleLineDetail}
      >
        <Details>{props.details}</Details>
      </DetailWrapper>
      <BgImage isSelected={props.isSelected} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 464px;
  max-width: 242px;
  position: relative;
  transition: ${animations.slow};
  opacity: ${props => (props.limit ? ".3" : "1")};
  color: white;
  background: ${props =>
    props.isSelected
      ? props.cardBackground
      : "radial-gradient(circle at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 17%, rgba(0,0,0,1) 89%, rgba(0,0,0,1) 100%)"};

  /* color: ${props => (props.isSelected ? "black" : "white")}; */
  /* border: ${props => (props.isSelected ? "0px" : "1px solid white")}; */
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  :hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
`

const BgImage = styled.div`
  /* position: absolute;
  transition: ${animations.slow};
  background: url(${TicketCardImage});
  opacity: ${props => (props.isSelected ? "1" : "0")};
  background-size: cover;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: -1; */
`

const Title = styled.h1`
  font-size: 64px;
  font-size: ${props => props.titleSize};
  text-transform: none;
  padding: 30px 0px;
  :hover {
    cursor: pointer;
  }
`

const Price = styled.h4`
  /* font-family: GT-Walsheim-Pro-Black;   */
  margin: 30px 20px;
  :hover {
    cursor: pointer;
  }
`

const DetailWrapper = styled.div`
  position: absolute;
  width: 160px;
  bottom: ${props => (props.singleLineDetail ? "89px" : "75px")};
  right: ${props => (props.singleLineDetail ? "-53px" : "-40px")};
  /* right: -40px; */

  a  {
    /* color: ${props => (props.isSelected ? "black" : "white")}; */
    /* border-color: ${props => (props.isSelected ? "black" : "white")}; */
  }
`

const Details = styled.h4`
  transform: rotate(-90deg);
`
