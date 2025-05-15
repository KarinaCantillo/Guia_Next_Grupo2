// pages/usuarios/index.js
import Link from 'next/link';
// Asegúrate que la ruta al componente sea correcta
import PerfilUsuarioMini from
    '../../components/usuarios/PerfilUsuarioMini';
function PaginaListadoUsuarios({ usuarios }) {
    return (
        <div>
            <h1>Listado de Usuarios</h1>
            {usuarios.map(usuario => (
                <PerfilUsuarioMini
                    key={usuario.id}
                    nombre={usuario.nombre}
                    email={usuario.email}
                    username={usuario.username}
                />
            ))}
            <br />
            <Link href="/">Volver al Inicio</Link>
            <br />
            <Link href="/usuarios/perfil/usuarioEjemplo">Ver Perfil de
                'usuarioEjemplo'</Link>
        </div>
    );
}
export async function getServerSideProps(context) {
    // Simulación de carga de datos en cada request (SSR)
    const usuarios = [
        {
            id: 'u001', username: 'usuarioEjemplo', nombre: 'Usuario Ejemplo',
            email: 'ejemplo@test.com'
        },
        {
            id: 'u002', username: 'anaCoder', nombre: 'Ana Coder', email:
                'ana@test.com'
        },
    ];
    return {
        props: {
            usuarios,
        },
    };
}
export default PaginaListadoUsuarios;