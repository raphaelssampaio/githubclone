import styled from 'styled-components'
import { Card } from 'antd'

export const Container = styled.div``

export const HeaderText = styled.h1`
  color: royalblue;
`
export const CardTitle = styled.h3`
  color: whitesmoke;
`
export const CardDescription = styled.p`
  color: lightyellow;
`
export const CardForks = styled.p`
  color: lightyellow;
`
export const CardStars = styled.p`
  color: lightyellow;
`

export const NewCard = styled(Card).attrs(props => {
  return {
    title: props.cardTitle,
  }
})`
  background-color: darkslateblue;
  width: 300px;
  border-width: 10px;
  border-radius: 5px;
  border-color: black;
`
export const RepoCards = styled.div`
  flex-direction: row;
`
