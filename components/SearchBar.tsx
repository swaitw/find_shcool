import React, { FC, useRef } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { Button } from '@material-ui/core'

interface Props {
    onSearch?:(keyword:string)=>void
}

const SearchBar:FC<Props> = (props) => {
    const { onSearch } = props
    const searchKeyword = useRef(null)

    const handleOnsearch =()=>{
        const keyword = searchKeyword?.current?.value
        if(keyword){
            onSearch&&onSearch(keyword)
        }
    }
    return (
        <div className="flex w-full items-center p-4 border-solid border rounded border-primary" >
            <div>
                <SearchIcon />
            </div>
            <InputBase 
                className="w-full px-4"
                placeholder="Enter a keyword (like school name) to search "
                inputRef= {searchKeyword}
            />
            <Button
                onClick={handleOnsearch}
            >Search</Button>
        </div>
    )
}

export default SearchBar
