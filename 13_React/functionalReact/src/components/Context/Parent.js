import React, { useState } from 'react'

import ChildA from './ChildA'

function Parent() {
       const [firstName , setFirstName] = useState('Adam')
       const [lastName , setLastName] = useState('Smith')

  return (
    <div>
           <ChildA firstName={firstName} lastName={lastName}/>
    </div>
  )
}

export default Parent