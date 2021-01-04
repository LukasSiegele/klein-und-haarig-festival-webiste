import React from "react"
import styled from "styled-components"
import NightImage from "../../../static/images/Night.jpg"
import DayImage from "../../../static/images/Day.jpg"

export default function ImageSection() {
  return (
    <Wrapper>
      <Content>
        <Night></Night>
        <Day></Day>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 40px 40px 200px 40px;
  display: grid;
  justify-items: center;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const Night = styled.div`
  width: 532px;
  height: 1087px;
  background-image: url(${NightImage});
  background-size: cover;
  grid-column: 3 / span 3;
  grid-row: 1 / span 3;
`

const Day = styled.div`
  width: 364px;
  height: 543px;
  grid-column: 1 / span 3;
  grid-row: 3 / span 3;
  background-image: url(${DayImage});
  background-size: cover;
`
