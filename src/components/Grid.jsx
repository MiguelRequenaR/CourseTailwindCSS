const Grid = ()=>{

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-red-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 1</div>
                <div className="bg-red-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 2</div>
                <div className="bg-red-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 3</div>
                <div className="bg-red-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 4</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 1</div>
                <div className="bg-blue-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 2</div>
                <div className="bg-blue-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 3</div>
                <div className="bg-blue-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 4</div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                <div className="bg-green-400 text-white font-bold text-xl text-center py-5 mt-5 col-span-2">Columna 1</div>
                <div className="bg-green-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 2</div>
                <div className="bg-green-400 text-white font-bold text-xl text-center py-5 mt-5">Columna 3</div>
                <div className="bg-green-400 text-white font-bold text-xl text-center py-5 mt-5 col-span-4">Columna 4</div>
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
                <div className="bg-orange-400 text-white font-bold text-xl text-center py-5 mt-5">A</div>
            </div>
            {/* <div className="grid grid-cols-4 gap-4">
                <div className="bg-red-200 font-bold text-xl text-center py-5 mt-5 col-start-2">Columna 1</div>
                <div className="bg-red-200 font-bold text-xl text-center py-5 mt-5 col-end-3">Columna 2</div>
                <div className="bg-red-200 font-bold text-xl text-center py-5 mt-5">Columna 3</div>
                <div className="bg-red-200 font-bold text-xl text-center py-5 mt-5">Columna 4</div>
            </div>

            <div className="grid grid-row-4 gap-4 mt-5 text-center text-white font-bold text-xl">
                <div className="bg-orange-500 row-span-4">A</div>
                <div className="bg-orange-500">B</div>
                <div className="bg-orange-500">C</div>
                <div className="bg-orange-500">D</div>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-4 grid-row-1 sm:grid-row-2 gap-4 mt-5 text-center text-white font-bold text-xl">
                <div className="bg-orange-500">A</div>
                <div className="bg-orange-500">B</div>
                <div className="bg-orange-500 cold-span-1 sm:col-span-2 row-span-1 sm:row-span-2">C</div>
                <div className="bg-orange-500">D</div>
                <div className="bg-orange-500">E</div>
            </div>
        </div>
    ) 
} 

export default Grid;

