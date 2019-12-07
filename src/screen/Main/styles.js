import styled from 'styled-components'
import { Card, Button } from 'antd'

export const Container = styled.div``

export const HeaderText = styled.h3`
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
  padding: 5px;
  margin-right: 5px;
`
export const RepoCards = styled.div`
  padding: 20px;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
`

export const AvatarImage = styled.img`
  width: 100px;
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 1px solid gainsboro;
  border-radius: 5px;
`
export const AvatarData = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
`
export const AvatarInfo = styled.div``

export const SeeAllHyper = styled(Button)`
  font-size: 16px;
  margin-top: 10px;
  border-radius: 5px;
  width: 150px;
  height: 30px;
`
export const Link = styled.a`
  text-decoration: none;
  color: black;
`
