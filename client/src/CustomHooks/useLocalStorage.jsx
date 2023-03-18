import { useState } from 'react';

export const useLocalStorage = (key, intialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : intialValue
        } catch (error) {
            return error
            
        }
    })

    const setValue = (value) => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            return error
        }
    }
    return [storedValue, setValue]
}