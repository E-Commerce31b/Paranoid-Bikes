import { useState } from 'react'

export const useCounter = () => {
        const [counter, setCounter] = useState(1)
    
            const decrement = () => {
            if(counter > 0) {
                setCounter(counter - 1)
            }
        }
        const increment = () => {
            // if (counter < product.stock) {
                setCounter(counter + 1)
            // }
        }
        return {
        decrement,
        increment,
        counter
        }
    }