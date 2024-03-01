import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export default function Store() {

    let userContextRetrieved = useContext(UserContext);
  return (
    <div>Store</div>
  )
}
