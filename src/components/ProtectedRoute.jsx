import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const location = useLocation()
      useEffect(() => {
            if (!localStorage.getItem('bimalInsTkn')) {
                navigate('/admin/login')
            }
        }, [location])
    return (
        <>
            {children}
        </>
    )
}