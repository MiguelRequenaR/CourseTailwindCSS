import image from '../assets/atardecer.webp';

const Card = ()=>{
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className='w-full' src={image} alt="" />
                <div className='px-6 py-4'>
                    <h1 className='font-bold text-3xl text-gray-500 pb-3'>The Coldest Sunset</h1>
                    <p className='text-gray-500 text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deleniti et vitae impedit eaque aliquam modi quae itaque, 
                        perspiciatis similique sequi labore a! Asperiores corporis deserunt facere officia distinctio fuga.
                    </p>
                </div>
                <div className='px-6 py-4'>
                    <span className='inline-block bg-gray-200 text-gray-500 rounded-full px-3 py-1 mr-5 text-sm font-bold'>#Viajar</span>
                    <span className='inline-block bg-gray-200 text-gray-500 rounded-full px-3 py-1 mr-5 text-sm font-bold'>#Atardecer</span>
                    <span className='inline-block bg-gray-200 text-gray-500 rounded-full px-3 py-1 mr-5 text-sm font-bold'>#Invierno</span>
                </div>
            </div>
        </div>
    )
}

export default Card
