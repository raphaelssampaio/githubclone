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
export default function Repos(props) {
  const [repo, setRepo] = useState([])

  useEffect(() => {
    async function getRepo() {
      const { repos } = props.match.params
      const resp = await getRepositories(repos)
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
