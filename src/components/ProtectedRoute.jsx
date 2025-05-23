import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const location = useLocation()
      useEffect(() => {

        console.log(location)

            if (!localStorage.getItem('bimalInsTkn')) {
                navigate('/admin/login')
            }
        }, [location?.pathname])
    return (
        <>
            {children}
        </>
    )
}