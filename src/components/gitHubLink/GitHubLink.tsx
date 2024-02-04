import React from 'react'
import { GitHubCornerIcon } from '../../assets/icons'
import './GitHubLink.css'

export interface GitHubLinkProps {
  url: string
}

export const GitHubLink: React.FC<GitHubLinkProps> = ({ url }) => {
  return (
    <a
      className='component-demo-ui-github-link'
      rel='external noreferrer'
      target='_blank'
      href={url}
    >
      <GitHubCornerIcon className='component-demo-ui-github-icon' />
    </a>
  )
}
