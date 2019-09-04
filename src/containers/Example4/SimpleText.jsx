import React, { useRef } from 'react'

function SimpleText() {
  const total = useRef(0)

  total.current++

  return (
    <p style={{ color: 'red' }}>
      Estou renderizando sem necessidade, total de renderizações: {total.current}
    </p>
  )
}

export default SimpleText
