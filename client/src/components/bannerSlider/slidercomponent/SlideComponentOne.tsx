import React from 'react'
import './SlideComponent.css';

const SlideComponentOne = () => {
    return (
        <div className='slider_bg h-[80vh]'>
            <div className="flex items-center justify-center h-[80vh]">
                <div className='text-center'>
                    <span className='text-white text-xl font-medium mb-5 block'>Home Made Dish On Your Doorstep</span>
                    <h2 className='text-yellow text-3xl lg:text-5xl font-semibold mb-7 block'>Great Dish @ Great Price</h2>
                    <h3 className='text-white text-3xl font-medium mb-7 block'>10 -20 Off</h3>
                    <button className='py-3 px-8 bg-white text-lg hover:bg-yellow rounded-lg'>Buy Dishes</button>
                </div>

            </div>
        </div>
    )
}

export default SlideComponentOne


export const SlideComponentTwo = () => {
    return (
        <div className='slider_bg2 h-[80vh]'>
            <div className="flex items-center justify-center h-[80vh] ">
                <div className='text-center lg:text-left '>
                    <span className='text-white text-xl font-medium mb-5 block'>Home Made Dish On Your Doorstep</span>
                    <h2 className='text-yellow text-3xl lg:text-5xl font-semibold mb-7 block'>Great Dish @ Great Price</h2>
                    <h3 className='text-white text-3xl font-medium mb-7 block'>10 -20 Off</h3>
                    <button className='py-3 px-8 bg-white text-lg hover:bg-yellow rounded-lg'>Buy Dishes</button>
                </div>

            </div>
        </div>
    )
}

export const SlideComponentThree = () => {
    return (
        <div className='slider_bg3 h-[80vh]'>
            <div className="flex items-center justify-center h-[80vh]">
                <div className='text-center'>
                    <span className='text-white text-xl font-medium mb-5 block'>Home Made Dish On Your Doorstep</span>
                    <h2 className='text-yellow text-5xl font-semibold mb-7 block'>Great Dish @ Great Price</h2>
                    <h3 className='text-white text-3xl font-medium mb-7 block'>10 -20 Off</h3>
                    <button className='py-3 px-8 bg-white text-lg hover:bg-yellow rounded-lg'>Buy Dishes</button>
                </div>

            </div>
        </div>
    )
}