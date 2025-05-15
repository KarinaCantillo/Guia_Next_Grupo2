// pages/index.js (o en un componente Layout)
import Link from 'next/link';
export default function HomePage() {
    return (
        <div>
            <h1>Página de Inicio Principal</h1>
            <nav>
                <ul>
                    <li><Link href="/productos">Ir al Módulo de
                        Productos</Link></li>
                    <li><Link href="/usuarios">Ir al Módulo de Usuarios</Link></li>
                </ul>
            </nav>
            {/* Contenido adicional de la página de inicio */}
        </div>
    );
}