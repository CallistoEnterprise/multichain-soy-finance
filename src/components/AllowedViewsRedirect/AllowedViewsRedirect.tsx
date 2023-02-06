import React from 'react'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { Redirect, useLocation } from 'react-router-dom'
import allowedViews from 'config/app/allowedViews'

const AllowedViewsRedirect: React.FC = () => {
  const { chainId } = useActiveWeb3React()
  const { pathname } = useLocation()

  const views = allowedViews(chainId)

  let match = pathname.trim() === '/'
  if (!match) {
    for (let view of views) {
      if (pathname.includes(view)) {
        match = true
        break
      }
    }
  }

  if (!match) return <Redirect to="/home" />

  return null
}

export default AllowedViewsRedirect
