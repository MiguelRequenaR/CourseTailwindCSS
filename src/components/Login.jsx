import 'remixicon/fonts/remixicon.css';
import user from "../assets/usuariofinal.png";

const Login =() =>{
    return(
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-full h-screen">
            <header className="relative">
                <nav className="flex justify-between items-center py-4 px-8">
                    <div className="flex items-center">
                        <img src={user} alt="" className='h-10'/>
                        <h1 className="text-white text-xl font-semibold ml-2">Miguel Angel</h1>
                    </div>
                    <div className="flex space-x-10">
                        <a href="#" className="text-white hover:text-black font-semibold">Sobre</a>
                        <a href="#" className="text-white hover:text-black font-semibold">Proyectos</a>
                        <a href="#" className="text-white hover:text-black font-semibold">Experience</a>
                        <a href="#" className="text-white hover:text-black font-semibold">Contacto</a>
                    </div>
                    <div className="flex space-x-6">
                        <i className="ri-instagram-line text-white text-xl cursor-pointer hover:text-black"></i>
                        <i className="ri-twitter-fill text-white text-xl cursor-pointer hover:text-black"></i>
                        <i className="ri-github-fill text-white text-xl cursor-pointer hover:text-black"></i>
                        <i className="ri-tiktok-fill text-white text-xl cursor-pointer hover:text-black"></i>
                        <i className="ri-youtube-fill text-white text-xl cursor-pointer hover:text-black"></i>
                    </div>
                </nav>
            </header>
            <div className='flex justify-center items-center my-10'>
                <form action="" className='rounded-lg overflow-hidden bg-white shadow-2xl px-16 pb-5 pt-5'>
                    <div className='flex flex-col space-y-4'>
                        <h2 className='text-center text-2xl text-gray-900 font-bold mb-5'>Iniciar Sesión</h2>
                        <label htmlFor="" className='text-gray-700 font-semibold'>Usuario</label>
                        <input type="text" className='rounded-full bg-gray-300 hover:bg-gray-400 py-1'/>
                        <label htmlFor="" className='text-gray-700 font-semibold'>Contraseña</label>
                        <input type="password" className='rounded-full bg-gray-300 hover:bg-gray-400 py-1'/>
                        <div className='text-center pt-4'>
                            <button className='rounded-full bg-black w-full text-white font-semibold py-1 hover:bg-gray-900'>Entrar</button>
                        </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                        <div className='text-gray-700'>No tienes una cuenta?</div>
                        <a href="" className='text-green-400 font-bold hover:text-green-500 ml-1'>Regístrate</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login;