import React from 'react'
import { Button } from '../ui/button'

const NewsSection = () => {
    return (
        <div className=' '>
            <div className='md:w-1/2 w-3/4 mx-auto flex flex-col justify-between items-center h-[200px] mb-6' >
                <h1 className='text-4xl font-semibold '>News</h1>
                <p className='text-center'>All the news about Kering.</p>
                <Button
                    variant="outline"
                    size="lg"
                    className="border-black bg-transparent text-gray-800 text-xs tracking-[0.3em] px-16 py-4 cursor-pointer rounded-none"
                >
                    SEE ALL THE LATEST NEWS
                </Button>
            </div>
        </div>
    )
}

export default NewsSection