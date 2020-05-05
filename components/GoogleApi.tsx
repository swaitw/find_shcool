import React,{useEffect,useState, Fragment,FC, Children, isValidElement, cloneElement} from 'react'

declare global {
    interface Window {
        google: any;
    }
}

interface Props{
    onInited?:(google:any)=>void
}

const GoogleApi:FC<Props> = (props) => {
    const { children ,onInited} = props

    const [ google,setGoole ] = useState<any>()
    let timer:any = null

    useEffect(()=>{
        const initGoogle=()=>{
         
            if(window.google){
                setGoole(window.google)
                onInited&&onInited(window.google)
            }else{
       
                timer = setTimeout(()=>{
                    initGoogle()
                },1000)
            }
        }
 
        initGoogle()
        return ()=>{
            clearTimeout(timer)
        }
    },[])

    const renderChildren = Children.map(children,(child)=>{
        if(isValidElement(child)){
            return cloneElement(child,{google})
        }else{
            return child
        }
    })

    return (
        <Fragment>
            <script type="text/javascript" id="google-map-script" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlJo9zd2ArI3HAXklJvUpOAihymjMO1HE&libraries=places"></script> 
            <div id="map" className="h-0 w-0"></div>
            {renderChildren}
        </Fragment>
    )
}

export default GoogleApi
