import { Link } from 'react-router-dom'

const NotFound = () => {
    return (

        <div className='flex justify-center items-center w-full h-screen'>
            <div
                role="alert"
                className="mx-auto max-w-lg rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8"
            >
                <div className="flex items-center gap-4">
                    <p className="font-semibold text-xl sm:text-3xl text-red-600">404 Page not found</p>
                </div>

                <p className="mt-4 text-gray-600">
                    The route that you requested was not found, please check if you entered a correct route or go back to home page.
                </p>

                <div className="mt-6 sm:flex sm:gap-4">
                    <Link
                        to="/"
                        className="inline-block w-full rounded-lg bg-red-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default NotFound