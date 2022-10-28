
import React,{useEffect} from "react";
    const Alert = ({alert,setCopyAlert}) => {
        useEffect(() => {
            const timeout = setTimeout(() => {
            setCopyAlert(false)
            }, 3000)
            return () => clearTimeout(timeout)
        }, [alert])
        return (
            <p className="clipboard__alert">Copied to clipboard!</p>
        )
    }
    export default Alert