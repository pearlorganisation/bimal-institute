import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash } from "react-icons/fa"

import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = async (data) => {
        setLoading(true)
        await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, data).then(res => {
            setLoading(false)
            localStorage.setItem('bimalInsTkn', res?.data?.token)
            toast.success('Logged In Sucessfully, redirecting...');
            navigate('/admin/blogs')
        }).catch(err => {
            setLoading(false)
            console.error(err?.message)
            const msg = err?.response?.data?.message || 'Could not verify credentails, please try again later.'
            toast.error(msg);
        })
    }


    useEffect(() => {
        if (localStorage.getItem('bimalInsTkn')) {
            localStorage.removeItem('bimalInsTkn')
        }
    }, [])


    return (
        <>
            <Toaster />
            <section className='h-screen w-screen flex justify-center items-center !text-black'>

                <div className="bg-white rounded-lg w-[95vw] shadow-md p-4 xl:max-w-sm 2xl:max-w-md">
                    <div className="mb-2 flex justify-center"></div>
                    <h2 className="text-center text-2xl font-bold leading-tight text-black">
                        Sign in to your account
                    </h2>
                    <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <div>
                                <label className="text-base font-medium text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        {...register("email", { required: 'E-Mail is required.' })}
                                    />
                                    {errors && <span className="text-red-500">{errors?.email?.message}</span>}
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="text-base font-medium text-gray-900">
                                        Password
                                    </label>
                                    {/* <a
                                        className=" font-semibold text-black hover:underline"
                                        title=""
                                        href="#"
                                    >
                                        Forgot password?
                                    </a> */}
                                </div>
                                <div className="relative">
                                    <input
                                        placeholder="Password"
                                        type={showPassword ? "text" : "password"}
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2  placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        {...register("password", { required: 'Password is required.' })}
                                    />
                                    <span
                                        className="absolute -translate-y-1/2 top-1/2 right-2 "
                                        onClick={() => setShowPassword((prev) => !prev)}
                                    >
                                        {!showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                                    </span>
                                    {errors && <span className="text-red-500">{errors?.password?.message}</span>}
                                </div>
                            </div>
                            <div>
                                <button
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? "Loggin in..." : "Log-In"}
                                </button>
                            </div>
                        </div>
                    </form>

                </div>

            </section>


        </>
    )
}

export default Login