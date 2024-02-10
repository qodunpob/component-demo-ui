import React from 'react'
import { GitHubCornerIcon } from '../../assets/icons'
import './GitHubLink.css'
import cn from 'classnames'

export interface GitHubLinkProps {
  className?: string
  url: string
}

export const GitHubLink: React.FC<GitHubLinkProps> = ({ className, url }) => {
  return (
    <a
      className={cn(className, 'component-demo-ui-github-link')}
      rel='external noreferrer'
      target='_blank'
      href={url}
    >
      <GitHubCornerIcon className='component-demo-ui-github-icon' />
    </a>
  )
}
