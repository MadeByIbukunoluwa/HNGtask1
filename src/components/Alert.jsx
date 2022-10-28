
import React,{useEffect} from "react";
    const Alert = ({alert,setCopyAlert}) => {
        useEffect(() => {
            const timeout = setTimeout(() => {
            setCopyAlert(false)
            }, 3000)
            return () => clearTimeout(timeout)
        }, [alert])
        return (
            <div>Copied to clipboard</div>
        )
    }
    export default Alert