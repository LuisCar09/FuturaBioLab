import { useEffect } from 'react';
import { getAuth, getRedirectResult } from 'firebase/auth';

const AuthHandler = () =>{
    console.log('HOLAE');
    
    useEffect(() => {
        const handleAuth = async () => {
            const auth = getAuth();
            try {
              const result = await getRedirectResult(auth);
              if (result) {
                // Usuario autenticado correctamente
                console.log('Usuario autenticado:', result.user);
                // Redirige a la página principal o donde sea apropiado
                // Puedes usar useNavigate en lugar de window.location para una mejor navegación de react-router
                //  const navigate = useNavigate();
                //  navigate('/');
                window.location.href = '/'; //Esta opción es menos recomendable. Usar useNavigate es preferible.
              } else {
                console.error('No se pudo obtener el resultado de la redirección.');
                // Maneja el error si no hay resultado de redirección
                window.location.href = '/'; // Redirige a la página de inicio si hay error (puede personalizarse)
              }
            } catch (error) {
              console.error('Error durante el manejo de la autenticación:', error);
              window.location.href = '/'; // Redirige a la página de inicio si hay error (puede personalizarse)
            }
          };
          handleAuth();
    },[])
}

export default AuthHandler



// const App = () => {
//   return (
//     <Router>
//       <Routes>
//           <Route path="/" element={<Home />} />
//         <Route path="/__/auth/handler" element={<AuthHandler />} />
//         <Route path="*" element={<Navigate to="/" />} /> {/* Redirecciona rutas desconocidas a la página principal */}
//       </Routes>
//     </Router>
//   );
// };

// export default App
