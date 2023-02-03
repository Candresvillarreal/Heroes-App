import React from 'react'
import { HeroList } from '../components';

export const DcPage = () => {
  return (
    <div>
        <h1>DC Comics</h1>
        <hr />
        <ul>
          <HeroList publisher='DC Comics'/>
        </ul>
    </div>
  )
}
