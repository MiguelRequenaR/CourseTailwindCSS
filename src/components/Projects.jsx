import user from "../assets/usuariofinal.png";

const Projects = ()=>{
    return(
        <div className="flex justify-center items-center h-screen borde">
            <div className="">
                <div className="flex border">
                    <div className="bg-blue-100 p-20">
                        <img src={user} alt="" className="h-20"/>
                        <h1 className="text-center mt-4 text-xl font-semibold">Miguel Angel</h1>
                        <p className="text-center text-sm">Visual Artist</p>
                        <div className="flex flex-col mt-6">
                            <button className="text-sm font-semibold mb-2 text-blue-400 px-3 py-1 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">Follow</button>
                            <button className="text-sm font-semibold mb-2 text-blue-400 px-3 py-1 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white">Message</button>
                        </div>
                    </div>
                    <div className="bg-blue-200 flex flex-col items-center justify-center">
                        <div className="flex-grow text-center px-10 border-b flex flex-col w-full items-center justify-center cursor-pointer hover:bg-blue-300">
                            <h1 className="text-lg text-gray-800 font-semibold">523</h1>
                            <p className="text-sm">Post</p>
                         </div>
                         <div className="flex-grow text-center px-10 border-b flex flex-col w-full items-center justify-center cursor-pointer hover:bg-blue-300">
                            <h1 className="text-lg text-gray-800 font-semibold">1387</h1>
                            <p className="text-sm">Likes</p>
                         </div>
                        <div className="flex-grow text-center px-14 flex flex-col w-full items-center justify-center cursor-pointer hover:bg-blue-300">
                            <h1 className="text-lg text-gray-800 font-semibold">146</h1>
                            <p className="text-sm">Follower</p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects