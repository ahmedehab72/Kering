import Image from "next/image"

const GridGroupSection = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-4 my-6 gap-4">
            <div className="md:col-span-1 col-span-2 row-span-4">
                <div className="md:row-span-3 col-span-1 row-span-4">
                    <Image src={'/images/588x352_desktop_group_generic_visual_with_logo_b5a9d38042.jpeg'} alt="grid section image" width={1000} height={300}/>
                </div>
                <div className="md:row-span-1 col-span-1  bg-[#f1e4db] p-2 flex flex-col items-center justify-center">
                    <h1 className='text-lg mt-2 tracking-[.09rem]'>Creativity is our legacy</h1>
                    <p  className='text-sm mt-2 tracking-[.09rem]'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className="md:col-span-1 col-span-2 row-span-4">
                <div className="md:row-span-3 col-span-1 row-span-4">
                    <Image src={'/images/588x352_desktop_group_generic_visual_with_logo_b5a9d38042.jpeg'} alt="grid section image" width={1000} height={300}/>
                </div>
                <div className="md:row-span-1 col-span-1   p-2 flex flex-col items-center justify-center">
                    <h1 className='text-lg mt-2 tracking-[.09rem]'>Our Strategy</h1>
                    <p  className='text-sm mt-2 tracking-[.09rem]'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default GridGroupSection