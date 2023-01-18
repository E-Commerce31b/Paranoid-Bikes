import React, {useState} from 'react'
import { Button, ButtonGroup} from "@mui/material";

const Counter = ({counter, setCounter}) => {

    return (
        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={setCounter(counter - 1)}>-</Button>
                <p>{counter}</p>
                <Button onClick={setCounter(counter + 1)}>+</Button>
            </ButtonGroup>
        </div>
    )
}

export default Counter