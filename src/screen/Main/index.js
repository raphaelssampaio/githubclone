import React, { useState, useEffect } from 'react'
import { getRepositories } from '../../services/github'
import {
  Container,
  HelloText,
  CardTitle,
  CardDescription,
  NewCard,
  RepoCards,
  CardStars,
  CardForks,
} from './styles'

// Estrela = stargazers_count
// Avatar = owner.avatar_url
// Forks = forks_count
// Description = description

export default function Main() {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    async function getRepo() {
      const resp = await getRepositories('camunda')
      setRepo(resp.data)
    }
    getRepo()
  }, [])

  return (
    <Container>
      <HeaderText>Pinned repositories</HeaderText>
      <RepoCards>
        {repo.map(r => (
          <NewCard>
            <CardTitle>{r.name}</CardTitle>
            <CardDescription>{r.description}</CardDescription>
            <CardStars>★ {r.stargazers_count}</CardStars>
            <CardForks>Forks: {r.forks_count}</CardForks>
          </NewCard>
        ))}
      </RepoCards>
    </Container>
  )
}
