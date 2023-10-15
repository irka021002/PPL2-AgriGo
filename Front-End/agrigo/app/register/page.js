import Image from 'next/image'


export default function Home() {
    return (
        <main className="flex min-h-smicreen flex-col items-center justify-between bg-[url('/img/bg_login.png')] w-full h-screen bg-center bg-cover">
            <div className="flex w-1/3 bg-white self-end h-screen text-black flex-col">
                <img className=' pt-14 px-14 w-96 h-auto self-center' src='img/logo.png'></img>
                <h1 className='font-extrabold text-4xl self-center font-fredoka mt-17'>Daftar Akun </h1>

                <h3 className="self-center text-sm pt-2">Silahkan isi data berikut untuk mendaftar</h3>

                <form className="px-5 mx-10 mt-10">
                    <div>
                        <label className="" for="email">E-mail</label><br />
                        <input className="bg-gray-200 shadow-inner rounded mt-2 p-2 w-full" type="text" id="email" name="email" /> <br />
                    </div>
                    <div className="pt-5">
                        <label className="" for="password">Password</label><br />
                        <input className="bg-gray-200 shadow-inner rounded mt-2 p-2 w-full" type="password" id="password" name="password" /> <br />
                    </div>
                    <div className="pt-5">
                        <label className="" for="password">Konfirmasi Password</label><br />
                        <input className="bg-gray-200 shadow-inner rounded mt-2 p-2 w-full" type="password" id="password" name="password" /> <br />
                    </div>
                    <a href="/login">
                        <div className="mt-10">
                            <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-3 w-full rounded font-bold' type='submit'>
                                register
                            </button>
                        </div>
                    </a>
                </form>
                <hr className="mx-10 mt-10 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="mt-4 text-center">
                    <p>Sudah punya akun? <a href="/login" className='font-bold'> Login Sekarang!</a></p>
                </div>
                <div className="mt-20 text-center font-light text-base ">
                    <p>AgriGo © 2023. All rights reserved.</p>
                </div>
            </div>

        </main>

    )
}
