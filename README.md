# EduStack 📚

Una aplicación de escritorio estilo Windows 98 para gestionar y organizar recursos educativos de programación y tecnología. Construida con React y Vite, EduStack proporciona una interfaz retro y nostálgica para acceder a documentación, tutoriales y herramientas de desarrollo.

## 🎯 Características principales

- **Gestor de recursos**: Organiza y almacena enlaces a documentación técnica clasificados por categorías (Frontend, Backend, Redes, UX/UI, etc.)
- **Interfaz retro Windows 98**: Estética nostálgica con componentes de ventanas desplazables y minimizables
- **EduTube**: Reproductor de videos educativos integrado
- **MyPC**: Navegador de archivos del sistema (simulado)
- **Búsqueda y filtrado**: Encuentra rápidamente recursos por nombre o categoría
- **Agregar recursos**: Crea tus propios recursos con título, URL y categoría
- **Efectos de sonido**: Sonidos retro para interacciones (opcional)

## 🛠️ Tecnologías utilizadas

- **React** (v19.2.0) - Librería para interfaces de usuario
- **Vite** (v7.2.4) - Herramienta de construcción y desarrollo rápido
- **98.css** - Estilos para la estética retro Windows 98
- **Lucide React** - Iconografía moderna
- **ESLint** - Linting de código JavaScript

## 📦 Instalación

1. Clona o descarga este repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

## 🚀 Uso

### Desarrollo
Para ejecutar el servidor de desarrollo con Hot Module Replacement:
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Producción
Para construir para producción:
```bash
npm run build
```

### Preview
Para previsualizar la versión de producción localmente:
```bash
npm run preview
```

### Linting
Para verificar el código con ESLint:
```bash
npm run lint
```

## 📁 Estructura del proyecto

```
src/
├── App.jsx           # Componente principal con lógica de ventanas
├── App.css           # Estilos principales
├── Window.jsx        # Componente para ventanas desplazables
├── EduStack.jsx      # Gestor de recursos educativos
├── EduTube.jsx       # Reproductor de videos
├── MyPC.jsx          # Explorador de archivos simulado
├── main.jsx          # Punto de entrada
└── index.css         # Estilos globales
```

## 🎨 Componentes

### Window
Componente contenedor para las ventanas del escritorio. Soporta:
- Movimiento libre
- Minimización y maximización
- Enfoque y z-index
- Botones de control (cerrar, minimizar, etc.)

### EduStack
Panel principal para gestionar recursos educativos:
- Visualiza recursos por categoría
- Búsqueda en tiempo real
- Agregar nuevos recursos
- Enlaces directos a documentación

### EduTube
Reproductor multimedia para contenido educativo

### MyPC
Interfaz de exploración de sistema (simulada)

## 📚 Recursos iniciales

El proyecto incluye una colección curada de recursos para:
- **Frontend**: React, CSS, Tailwind, MDN
- **Backend**: Spring Boot, Python, Postman, Docker
- **Redes**: Cisco, Wireshark, Subnetting, OWASP
- **UX/UI**: Nielsen Norman, Figma, Material Design, Refactoring UI

## 🔧 Personalización

Puedes agregar nuevos recursos directamente en la aplicación o modificar `INITIAL_RESOURCES` en `src/App.jsx` para cambiar la lista inicial de recursos.

## 📝 Scripts disponibles

| Script | Descripción |
|--------|------------|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Construye para producción |
| `npm run preview` | Previsualiza la compilación |
| `npm run lint` | Verifica el código con ESLint |

## 🎵 Sonidos

La aplicación incluye efectos de sonido retro (archivo `clic.mp3` en la carpeta `public/`). Estos se pueden desactivar modificando la función `playSound()` en `src/App.jsx`.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de hacer fork del proyecto, crear una rama con tus cambios y enviar un pull request.

---

**Hecho con ❤️ para estudiantes y desarrolladores apasionados por la tecnología**
