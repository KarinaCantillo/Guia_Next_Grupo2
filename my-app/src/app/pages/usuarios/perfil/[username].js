// pages/usuarios/perfil/[username].js

import { useRouter } from 'next/router';
import Link from 'next/link';

function PaginaPerfilUsuario({ usuario }) {
  const router = useRouter();
  const { username } = router.query;

  if (router.isFallback) {
    // Solo aplica si usas getStaticProps + getStaticPaths con fallback: true o 'blocking'
    return <div>Cargando perfil...</div>;
  }

  if (!usuario) {
    return (
      <div>
        <p>Usuario con username '{username}' no encontrado.</p>
        <Link href="/usuarios">Volver al listado de usuarios</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Perfil de: {usuario.nombre}</h1>
      <p>Username: {username}</p>
      <p>Email: {usuario.email}</p>
      <p>Rol: {usuario.rol}</p>
      <br />
      <Link href="/usuarios">Volver al listado de usuarios</Link>
      <br />
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}

// Opción 1: Usando getServerSideProps (para renderizado en cada petición)
export async function getServerSideProps(context) {
  const { username } = context.params;

  // Simulación de base de datos
  const usuariosSimulados = {
    'usuarioEjemplo': {
      id: 'u001',
      nombre: 'Usuario Ejemplo',
      email: 'ejemplo@test.com',
      rol: 'Miembro',
    },
    'anaCoder': {
      id: 'u002',
      nombre: 'Ana Coder',
      email: 'ana@test.com',
      rol: 'Admin',
    },
  };

  const usuario = usuariosSimulados[username] || null;

  // Puedes devolver una página 404 si no se encuentra
  if (!usuario) {
    return { props: { usuario: null } };
    // O usar esto en vez de lo anterior:
    // return { notFound: true };
  }

  return {
    props: {
      usuario,
    },
  };
}

/* 
// Opción 2: Usar Static Generation (comentado por defecto)

export async function getStaticPaths() {
  const paths = [
    { params: { username: 'usuarioEjemplo' } },
    { params: { username: 'anaCoder' } },
  ];
  return { paths, fallback: true }; // o 'blocking' o false
}

export async function getStaticProps({ params }) {
  const { username } = params;

  const usuariosSimulados = {
    'usuarioEjemplo': {
      id: 'u001',
      nombre: 'Usuario Ejemplo',
      email: 'ejemplo@test.com',
      rol: 'Miembro',
    },
    'anaCoder': {
      id: 'u002',
      nombre: 'Ana Coder',
      email: 'ana@test.com',
      rol: 'Admin',
    },
  };

  const usuario = usuariosSimulados[username] || null;

  if (!usuario) {
    return { notFound: true };
  }

  return {
    props: { usuario },
    revalidate: 60, // Revalida cada 60 segundos
  };
}
*/

export default PaginaPerfilUsuario;