'use client'

import { useState } from 'react'

const ClientElement = () => {
  const [coolName, setCoolName] = useState('Paco')
  return <div>Este es un elemento desde el cliente: {coolName}</div>
}

export default ClientElement
