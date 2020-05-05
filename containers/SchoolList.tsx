import React, { FC } from 'react'
import SchoolCard, { SchoolInfo } from '../components/SchoolCard'
interface Props{
    schools?:SchoolInfo[]
}
const SchoolList:FC<Props> = (props) => {
    const { schools=[] } = props
    return (
        <div>
            {
                schools.map((school)=>{
                    return(
                        <SchoolCard {...school} />
                    )
                })
            }
        </div>
    )
}

export default SchoolList
