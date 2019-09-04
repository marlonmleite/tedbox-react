import React, { useState, useEffect } from 'react'
import SimpleText from './SimpleText'

function Timer() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const tick = () => {
      setSeconds(seconds + 1)
    }

    const interval = setInterval(tick, 1000)

    console.count('mount')

    return () => {
      clearInterval(interval)
    }
  }, [seconds])


  return (
    <div style={{ fontSize: '1.5rem' }}>
      Segundos: {seconds}
      <SimpleText />
    </div>
  )
}

export default Timer
