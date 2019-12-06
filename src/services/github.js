import axiosAPI from './api'

export const getRepositories = repoName => axiosAPI.get(`${repoName}/repos`)
