import logo from "../assets/logoFinal.png";

const NavBar = () =>{
    return(
        <div>
            <div className="container mx-auto bg-cyan-600 m-6">
                <div className="flex justify-between">
                    <div className="flex items-center ml-4">
                        <img src={logo} alt="" className="h-8 w-8 mr-2"/>
                        <h1 className="flex items-center text-white text-xl font-bold my-5">Tailwind CSS</h1>
                    </div>
                    <ul className="flex items-center">
                        <li className="text-sm text-white mx-5 my-5 cursor-pointer hover:text-gray-700">Docs</li>
                        <li className="text-sm text-white mx-5 my-5 cursor-pointer hover:text-gray-700">Examples</li>
                        <li className="text-sm text-white mx-5 my-5 cursor-pointer hover:text-gray-700">Blog</li>
                    </ul>
                    <div className="my-5 mr-5">
                        <button className="text-white text-lg font-semibold px-3 py-1 border rounded hover:bg-cyan-700">
                            Download
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;