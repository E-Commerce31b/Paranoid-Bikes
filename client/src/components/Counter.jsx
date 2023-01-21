import React from 'react'
import { Button, ButtonGroup} from "@mui/material";

const Counter = ({decrement, increment, counter}) => {

    // const decrement = () => {
    //     if(counter > 0) {
    //         setCounter(counter - 1)
    //     }
    // }
    // const increment = () => {
    //     if (counter < stock) {
    //         setCounter(counter + 1)
    //     }
    // }
    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => decrement()}>-</Button>
                <p>{counter}</p>
                <Button onClick={() => increment()}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter