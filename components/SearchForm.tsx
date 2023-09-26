"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"

const SearchForm = () => {

    const [search, setSearch] = useState("");

    return (
    <form className='flex-center ms-auto mt-10 w-full sm:mt-10 sm:px-5'>
        <label className='w-full max-w-3xl relative flex-center'>
            <Image src='/magnifying-glass.svg' width={32} height={32} className='absolute left-8' alt="search-icon"/>
            <Input className="bg-black-400 base-regular h-fit border-0 text-white-800 py-6 pr-8 pl-20 !ring-0 !ring-offset-0 placeholder:text-white-800" type='text' placeholder='Search'/>
        </label>
    </form>
  )
}

export default SearchForm