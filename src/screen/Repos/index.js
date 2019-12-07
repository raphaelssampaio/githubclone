import React, { useState, useEffect } from 'react'
import { getRepositories } from '../../services/github'
import {
  Container,
  HeaderText,
  CardTitle,
  CardDescription,
  NewCard,
  RepoCards,
  CardStars,
  CardForks,
  AvatarImage,
  AvatarContainer,
  AvatarData,
  AvatarInfo,
  SeeAllHyper,
  Link,
  GoTo,
} from '../Main/styles'

export default function Repos(props) {
  const [repo, setRepo] = useState([])
  const [avatar, setAvatar] = useState('')
  const [repoName, setRepoName] = useState('')
  const [ownerType, setOwnerType] = useState('')
  const [ownerUrl, setOwnerUrl] = useState('')
  const [mir, setMir] = useState([])

  useEffect(() => {
    async function getRepo() {
      const { repos } = props.match.params
      const resp = await getRepositories(repos)
      setRepo(resp.data)
    }
    getRepo()
  }, [])

  useEffect(() => {
    getMir()
    repo.map(r => {
      if (avatar === '') {
        setAvatar(r.owner.avatar_url)
        setRepoName(r.owner.login)
        setOwnerType(r.owner.type)
        setOwnerUrl(r.owner.html_url)
      }
    })
  }, [repo])

  function getMir() {
    let aux
    repo.map(r => {
      if (mir.length < 4) {
        if (r.stargazers_count > 1 || r.forks_count > 1) {
          aux = r
          mir.push(aux)
          setMir(mir)
        } else {
          aux = r
          mir.push(aux)
        }
      }
    })
  }

  return (
    <Container>
      <GoTo icon="home">
        <Link href="/" style={{ color: 'white' }}>
          {' '}
          Home
        </Link>
      </GoTo>
      <AvatarContainer>
        <AvatarImage src={avatar} />
        <AvatarInfo>
          <AvatarData>Repo owner: {repoName}</AvatarData>
          <AvatarData>Type: {ownerType}</AvatarData>
        </AvatarInfo>
      </AvatarContainer>
      <HeaderText>Pinned repositories</HeaderText>
      <RepoCards>
        {mir.map(r => (
          <NewCard>
            <CardTitle>{r.name}</CardTitle>
            <CardDescription>{r.description}</CardDescription>
            <CardStars>Stars: ★ {r.stargazers_count}</CardStars>
            <CardForks>Forks: {r.forks_count}</CardForks>
          </NewCard>
        ))}
      </RepoCards>
      <SeeAllHyper type="primary" size="large">
        <Link target="_blank" href={ownerUrl}>
          See all repositories
        </Link>
      </SeeAllHyper>
    </Container>
  )
}
