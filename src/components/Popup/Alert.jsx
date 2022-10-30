
import React,{useEffect} from "react";
    const Alert = ({alert,setCopyAlert,text}) => {
        useEffect(() => {
            const timeout = setTimeout(() => {
            setCopyAlert(false)
            }, 3000)
            return () => clearTimeout(timeout)
        }, [alert])
        return (
            <p className="clipboard__alert">{text}</p>
        )
    }
    export default Alert