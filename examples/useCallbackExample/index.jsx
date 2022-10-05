import React from 'react';
import { useCallback, useState } from 'react'

const Button = React.memo(({handleClick, name}) => {
  console.log(`${name} rendered`)
  return <button onClick={handleClick}>{name}</button>
})

const UseCallbackExample = () => {
  console.log('counter rendered')
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1), [countOne])
  const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1), [countTwo])
  return (
    <>
        <h2>UseCallback</h2>
        <h3>{countOne} {countTwo}</h3>
        <Button handleClick={memoizedSetCountOne} name="button1" />
        <Button handleClick={memoizedSetCountTwo} name="button1" />
    </>
  )
}

export default UseCallbackExample;