import React, { useContext } from 'react'
import { UserContext,ChannelContext } from '../App'

export default function ContextComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
  return (
    <div>
     <h3>Component F</h3> 
      {user }- {channel}
    </div>
  )
}
