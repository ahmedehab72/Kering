import React from 'react'
import { Button } from '../ui/button'

const DiscoverSection = () => {
    return (
        <div className=' '>
            <div className='md:w-1/2 w-3/4 mx-auto flex flex-col justify-between items-center h-[250px] mb-6' >
                <h1 className='text-4xl font-semibold '>Discover Kering</h1>
                <p className='text-center'>Kering is a global, family-led luxury group, home to people whose passion and expertise nurture creative Houses in ready-to-wear and couture, leather goods, jewelry, eyewear and beauty: Gucci, Saint Laurent, Bottega Veneta, Balenciaga, McQueen, Brioni, Boucheron, Pomellato, DoDo, Qeelin, Ginori 1735 as well as Kering Eyewear and Kering Beauté.</p>
                <Button
                    variant="outline"
                    size="lg"
                    className="border-black bg-transparent text-gray-800 text-xs tracking-[0.3em] px-16 py-4 cursor-pointer rounded-none"
                >
                    DISCOVER
                </Button>
            </div>
        </div>
    )
}

export default DiscoverSection