import { useState, useEffect, useRef} from 'react'

const useNearScreen = ({distance = '100px'} = {}) => {
    const [ isNearScreen, setShow ]  = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        const onChange = (entries, observer) => {
            const el = entries[0]
            if(el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        })

        observer.observe(fromRef.current)

        return () => observer.disconnect()
    })

    return {isNearScreen, fromRef} 
}

export default useNearScreen