import { useState } from "react"

const useCounter = () => {

    const [count, setCount] = useState(1)

    const handleSum = () => {
        setCount(count + 1)
    }

    const handleSubstract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const result = {
        value: count,
        sum: handleSum,
        substract: handleSubstract
    }

    return result

}

export default useCounter