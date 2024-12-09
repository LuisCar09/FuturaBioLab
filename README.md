## Futura Biolab Fronten# Documentación del Frontend - Futura Biolab

Este documento proporciona una descripción detallada de la estructura del frontend de la aplicación web **Futura Biolab**, diseñada para compilar proyectos y recetas de bioplásticos y biomateriales. La aplicación permite a los usuarios compartir y descubrir información sobre bioplásticos, con funcionalidades que incluyen autenticación, gestión de proyectos y servicios.

## Índice
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Contextos](#contextos)
- [Páginas](#páginas)
- [Rutas](#rutas)
- [Estilos](#estilos)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

## Estructura del Proyecto 

La estructura del proyecto está organizada dentro de la carpeta `src`, que contiene las siguientes carpetas y archivos:

```

src/
│
├── components/
│   ├── header/
│   │   ├── HamburgerMenu.jsx
│   │   ├── Header.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   └── Navlinks.jsx
│   │
│   ├── footer/
│   │   ├── ContactInfo.jsx
│   │   ├── Footer.jsx
│   │   ├── ImportantLinks.jsx
│   │   └── SocialLinks.jsx
│   │
│   └── home/
│       ├── GrowSection.jsx
│       ├── Hero.jsx
│       ├── NewsSection.jsx
│       └── ProjectsSection.jsx
│       └── SectionTop.jsx
│
├── context/
│   ├── UserContext.jsx
│   └── ServicesContext.jsx
│
├── pages/
│   ├── AboutUs.jsx
│   ├── App.jsx
│   ├── Checkout.jsx
│   ├── Calendar.jsx
│   ├── ContactUs.jsx
│   ├── Guide.jsx
│   ├── Login.jsx
│   ├── Logout.jsx
│   ├── Members.jsx
│   ├── Method.jsx
│   ├── MyCart.jsx
│   ├── Priorities.jsx
│   ├── Profile.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   ├── Register.jsx
│   ├── Reservation.jsx
│   ├── Search.jsx
│   ├── ServiceCard.jsx
│   ├── ServiceDetail.jsx
│   ├── Services.jsx
│   ├── Setting.jsx
│   ├── ThankYou.jsx
│   ├── UploadProject.jsx
│   └── UserDataRegister.jsx
│
├── routes/
│   └── routes.jsx
│
├── styles/
│   ├── AboutUs.css
│   ├── App.css
│   ├── Calendar.css
│   ├── Checkout.css
│   ├── ContactUs.css
│   ├── Guide.css
│   ├── Login.css
│   ├── Members.css
│   ├── Method.css
│   ├── MyCart.css
│   ├── Priorities.css
│   ├── Profile.css
│   ├── ProjectCard.css
│   ├── Projects.css
│   ├── Register.css
│   ├── Reservation.css
│   ├── Search.css
│   ├── ServiceDetail.css
│   ├── Services.css
│   ├── Setting.css
│   ├── ThankYou.css
│   ├── UploadProject.css
│   └── UserDataRegister.css
│
├── App.jsx
├── index.css
├── main.jsx
├── .env
└── index.html





```

## Componentes Principales

### Header
- **HamburgerMenu.jsx**: Componente para el menú de navegación en dispositivos móviles.
- **Header.jsx**: Componente principal del encabezado que incluye el logotipo y el menú de navegación.
- **Logo.jsx**: Componente que muestra el logotipo de la plataforma.
- **Navbar.jsx**: Componente de la barra de navegación.
- **Navlinks.jsx**: Componente que contiene los enlaces de navegación.

### Footer
- **ContactInfo.jsx**: Componente que muestra la información de contacto.
- **Footer.jsx**: Componente principal del pie de página.
- **ImportantLinks.jsx**: Componente que muestra enlaces importantes.
- **SocialLinks.jsx**: Componente que muestra los enlaces a las redes sociales.

### Home
- **GrowSection.jsx**: Sección de crecimiento y desarrollo de bioplásticos.
- **Hero.jsx**: Sección principal de bienvenida.
- **NewsSection.jsx**: Sección de noticias relevantes.
- **ProjectsSection.jsx**: Sección para mostrar proyectos destacados.
- **SectionTop.jsx**: Componente para la parte superior de la página principal.

## Contextos

### UserContext.jsx
- Proporciona el contexto del usuario autenticado y maneja la información relacionada con la sesión del usuario.

### ServicesContext.jsx
- Proporciona el contexto para la gestión de servicios disponibles en la plataforma.

## Páginas

- **AboutUs.jsx**: Página que describe la plataforma y su misión.
- **Checkout.jsx**: Página para procesar pagos y compras.
- **ContactUs.jsx**: Página de contacto.
- **Guide.jsx**: Página con guías y tutoriales.
- **Login.jsx**: Página de inicio de sesión.
- **Logout.jsx**: Página que maneja el cierre de sesión.
- **Members.jsx**: Página para la gestión de usuarios miembros.
- **Method.jsx**: Página que describe métodos de pago y servicios.
- **MyCart.jsx**: Página del carrito de compras.
- **Priorities.jsx**: Página de configuración de prioridades.
- **Profile.jsx**: Página del perfil del usuario.
- **ProjectCard.jsx**: Componente para mostrar información de un proyecto.
- **Projects.jsx**: Página que lista todos los proyectos.
- **Register.jsx**: Página para el registro de nuevos usuarios.
- **Reservation.jsx**: Página para realizar reservas.
- **Search.jsx**: Página de búsqueda de proyectos y servicios.
- **ServiceCard.jsx**: Componente para mostrar información de un servicio.
- **ServiceDetail.jsx**: Página que muestra los detalles de un servicio.
- **Services.jsx**: Página que lista todos los servicios.
- **Setting.jsx**: Página de configuración de cuenta.
- **ThankYou.jsx**: Página de agradecimiento tras realizar una acción.
- **UploadProject.jsx**: Página para subir nuevos proyectos.
- **UserDataRegister.jsx**: Página para registrar datos del usuario.

## Rutas

El archivo `routes.jsx` contiene la configuración de las rutas de la aplicación utilizando React Router. Cada ruta se asocia con un componente específico que se renderiza cuando la ruta coincide.

## Estilos

La carpeta `styles` contiene archivos CSS que definen el estilo de cada página de la aplicación. Cada archivo de estilo se aplica a la página correspondiente para mantener la coherencia en el diseño.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **React Router**: Manejo de rutas en la aplicación.
- **Axios**: Librería para realizar solicitudes HTTP al backend.
- **Firebase**: Utilizado para la autenticación de usuarios.
- **CSS**: Para el diseño y estilo de la aplicación.



 