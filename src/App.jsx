import { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(1)

  function increaseCount () {
    setCount((prev)=> prev + 1)
  }

  useEffect(()=> {
    const clock = setInterval(increaseCount, 1000)}, [])
  
  useEffect(()=> {
    const clock = setInterval(prev => prev -1);
    
    return ()=> {
      clearInterval(clock)
    }
  }, [count])

  return <>
  {count} 
  </>
}

export default App