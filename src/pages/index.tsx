/** @jsx jsx */
import { Container, jsx } from "theme-ui"
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import Navbar from '../components/navbar'


const IndexPage: React.FC<PageProps> = () => {
  return (
    <div sx={{
      background: 'background'
    }}>
      <Navbar/>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
