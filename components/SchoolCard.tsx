import React,{FC} from 'react'

export interface SchoolInfo{
    name:string,
    phone?:string,
    address:string,
    url?:string,
    img?:string,

}



const SchoolCard:FC<SchoolInfo> = (props) => {
    
    const { name,phone,address,url,img } = props
    const renderFeaturedImg = ()=>{
        return (
            <div className=" bg-gray-200 lg:w-1/4" >
                <div 
                    style={{
                        backgroundImage:`url(${img})`,
                        height:0,
                        padding:"25% 0"
                    }}
                    className="bg-cover bg-center"
                >
                </div>
            </div>
        )
    }

    const renderDetails =()=>{
        return (
            <div className="lg:w-3/4">
                <div className="lg:pl-4">
                    <h4>{name}</h4>
                    <p>{phone}</p>
                    <p>{address}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="p-4">
            <div className="flex flex-col lg:flex-row">
                {
                   renderFeaturedImg() 
                }
                {
                    renderDetails()
                }
            </div>
        </div>
    )
}

export default SchoolCard
