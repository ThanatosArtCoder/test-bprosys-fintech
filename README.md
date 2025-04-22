
# Proyecto de Productos Financieros

  

Este proyecto es una landing page para una fintech o banco digital que muestra un catálogo de productos financieros con detalles clave, filtros y un diseño moderno y confiable.

  

## Tecnologías utilizadas

  

- Next.js 14 con App Router

- TypeScript

- TailwindCSS

- Styled Components

- Shadcn/UI

  

## Características

  

- Diseño Mobile First y completamente responsive

- Filtrado de productos por categoría

- Página de detalle para cada producto

- Visualización de rendimiento con gráficos

- Modo oscuro/claro

- Accesibilidad mejorada con aria-labels y buen contraste

  

## Instalación

  

1. Clona el repositorio:

\`\`\`bash

git clone https://github.com/ThanatosArtCoder/test-bprosys-fintech.git

cd test-bprosys-fintech

\`\`\`

  

2. Instala las dependencias:

\`\`\`bash

npm install

\`\`\`

  

3. Ejecuta el servidor de desarrollo:

\`\`\`bash

npm run dev

\`\`\`

  

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

  

## Estructura del proyecto

  

\`\`\`

├── app/ # Rutas de la aplicación (App Router)

│ ├── globals.css # Estilos globales

│ ├── layout.tsx # Layout principal

│ ├── page.tsx # Página principal (Home)

│ └── product/[id]/ # Página de detalle de producto

├── components/ # Componentes reutilizables

│ ├── ui/ # Componentes UI básicos (shadcn)

│ ├── ui-styled/ # Componentes estilizados con Styled Components

│ └── ... # Otros componentes

├── lib/ # Funciones y utilidades

│ └── products.ts # Mock de datos de productos

├── types/ # Definiciones de tipos

│ └── product.ts # Tipos para productos financieros

└── ...

\`\`\`

  

## Decisiones técnicas

  

### 1. ¿Qué criterios seguiste para diseñar la UI de productos financieros?

  

Para diseñar la UI de productos financieros, seguí estos criterios:

  

- **Confiabilidad y profesionalismo**: Utilicé una paleta de colores sobria con acentos en tonos de azul/púrpura que transmiten confianza y estabilidad, esenciales para servicios financieros.

- **Claridad en la información**: Presenté los datos financieros de manera estructurada y jerárquica, destacando la información más relevante como tasas de interés y niveles de riesgo.

- **Consistencia visual**: Mantuve un sistema de diseño coherente en toda la aplicación para facilitar la navegación y comprensión.

- **Indicadores visuales**: Implementé componentes como el indicador de riesgo con códigos de color (verde para bajo riesgo, amarillo para medio, rojo para alto) para comunicar información compleja de manera intuitiva.

- **Accesibilidad**: Aseguré buen contraste, tamaños de texto legibles y elementos interactivos claramente identificables.

  

### 2. ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

  

La decisión de cuándo usar cada tecnología se basó en sus fortalezas:

  

- **Tailwind CSS**: Utilizado para:

- Layout general y estructura de la página

- Espaciado, márgenes y padding

- Responsive design (breakpoints)

- Utilidades rápidas como flexbox, grid y posicionamiento

  

- **Styled Components**: Utilizado para:

- Componentes visuales reutilizables con lógica específica

- Elementos que requieren estados o props para determinar su estilo

- Componentes con animaciones o interacciones complejas

- Elementos visuales distintivos de la marca como el indicador de riesgo o los iconos de producto

  

Esta combinación permitió aprovechar la rapidez de desarrollo de Tailwind para la estructura general, mientras se utilizó Styled Components para crear componentes visuales más complejos y reutilizables que mantienen su coherencia en toda la aplicación.

  

### 3. ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

  

Para escalar este proyecto a una aplicación real de banca digital:

  

- **Arquitectura de datos**: Implementaría una API RESTful o GraphQL para obtener datos reales de productos financieros desde un backend seguro.

- **Autenticación y autorización**: Integraría un sistema robusto de autenticación con JWT, OAuth o similar, con diferentes niveles de acceso.

- **Personalización**: Añadiría recomendaciones personalizadas de productos basadas en el perfil del usuario y su historial.

- **Funcionalidades transaccionales**: Implementaría flujos para solicitud de productos, simuladores de préstamos/inversiones y procesos de onboarding.

- **Internacionalización**: Añadiría soporte para múltiples idiomas y formatos de moneda/números.

- **Testing**: Implementaría tests unitarios, de integración y end-to-end para asegurar la calidad.

- **CI/CD**: Configuraría pipelines de integración y despliegue continuo.

- **Monitoreo**: Integraría herramientas de análisis de rendimiento y comportamiento de usuarios.

  

### 4. ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

  

Para mejorar el rendimiento y monitoreo en producción:

  

- **Análisis de rendimiento**:

- Lighthouse/Web Vitals para métricas de rendimiento

- Next.js Analytics para monitoreo de rendimiento específico de Next.js

- Datadog o New Relic para monitoreo de aplicaciones

  

- **Optimización**:

- Implementación de ISR (Incremental Static Regeneration) para páginas de productos

- Code splitting y lazy loading para reducir el tamaño del bundle inicial

- Optimización de imágenes con next/image

- Implementación de Service Workers para caching

  

- **Monitoreo de errores**:

- Sentry para tracking de errores en tiempo real

- LogRocket para reproducir sesiones de usuario y detectar problemas

  

- **Análisis de usuario**:

- Mixpanel o Amplitude para análisis de comportamiento

- Hotjar para mapas de calor y grabaciones de sesión

  

- **Seguridad**:

- OWASP ZAP para escaneo de vulnerabilidades

- Snyk para análisis de dependencias vulnerables

- Implementación de CSP (Content Security Policy)

- Auditorías de seguridad periódicas

  

## Despliegue


El proyecto está desplegado en Vercel y puede ser accedido en [https://fintech-pro.vercel.app](https://fintech-pro.vercel.app)

  

## Contribución

  

1. Haz un fork del proyecto

2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)

3. Haz commit de tus cambios (`git commit -m 'Add some amazing feature'`)

4. Push a la rama (`git push origin feature/amazing-feature`)

5. Abre un Pull Request

  

## Licencia

  

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

  

## Contacto

    

Link del proyecto: [https://github.com/ThanatosArtCoder/test-bprosys-fintech.git](https://github.com/ThanatosArtCoder/test-bprosys-fintech.git)