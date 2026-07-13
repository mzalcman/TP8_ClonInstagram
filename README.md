# Documentación Técnica: Clon Móvil de Instagram

## Descripción del proyecto

Este proyecto consiste en el desarrollo de una aplicación móvil inspirada en la interfaz de Instagram utilizando React Native y TypeScript bajo el ecosistema de Expo. La aplicación consume imágenes de gatos desde una API externa y las muestra en un feed optimizado para dispositivos móviles.

El objetivo principal de este trabajo práctico fue migrar la lógica web del proyecto anterior hacia un entorno nativo, practicando el maquetado fluido con Flexbox, el uso de navegadores de React Navigation, la optimización crítica de listas masivas con FlatList y la adaptación de interfaces a las particularidades físicas de los dispositivos móviles, tales como notches y barras de estado.

La aplicación incluye:
* Feed de publicaciones optimizado.
* Historias de usuarios de desplazamiento horizontal.
* Perfil de usuario con grilla de tres columnas.
* Visualización detallada e individual de publicaciones con comentarios interactivos.
* Sistema de ruteo y navegación mediante pestañas (Tabs) y pila (Stack).
* Diseño adaptativo y estilizado para Android e iOS.
* Consumo asincrónico de API externa mediante Axios.

---

## APIs y Recursos Utilizados

### Para las publicaciones del feed:
* **The Cat API**: https://thecatapi.com/
Se utilizó para obtener imágenes de gatos dinámicamente mediante peticiones HTTP asíncronas de tipo GET realizadas con la librería Axios.

### Para las imágenes de perfil:
* **Pravatar**: https://pravatar.cc/
Utilizada para generar avatares de usuarios simulados de forma dinámica.

### Iconografía:
* **Lucide React Native**: https://lucide.dev/
Librería de íconos vectoriales adaptada para React Native, utilizada para recrear los elementos interactivos de la barra de navegación inferior, botones de interacción y cabeceras.

---

## Tecnologías Utilizadas

* React Native
* Expo (Ecosistema y CLI)
* TypeScript
* Axios
* React Navigation (Native Stack & Bottom Tabs)
* Lucide React Native

---

## Diseño Utilizado como Referencia

El diseño de la aplicación móvil se inspiró rigurosamente en la interfaz oficial de Instagram para dispositivos móviles.
* **Referencia de Figma utilizada**: https://www.figma.com/community/file/1235135369163092252

Se respetó de manera fiel:
* La distribución visual de la barra de navegación inferior.
* La estructura del feed principal de publicaciones.
* El diseño circular y espaciado de las historias superiores.
* La disposición y métricas del perfil de usuario.
* La grilla simétrica de publicaciones del perfil en tres columnas.
* La consistencia en espaciados, márgenes y paddings.

---

## Organización del Proyecto

La estructura del proyecto fue organizada de manera modular para separar las pantallas, los componentes reutilizables, los tipados y los servicios de red.

### Estructura Principal

```text
src/
│
├── components/
│   ├── FeedCard.tsx
│   ├── FeedHeader.tsx
│   ├── StoriesList.tsx
│   └── ProfileHeader.tsx
│
├── interfaces/
│   ├── Cat.ts
│   └── Post.ts
│
├── navigation/
│   ├── AppNavigator.tsx
│   ├── MainTabs.tsx
│   ├── HomeStack.tsx
│   └── types.ts
│
├── screens/
│   ├── HomeScreen.tsx
│   ├── PostScreen.tsx
│   └── ProfileScreen.tsx
│
└── services/
    ├── api.ts
    └── catService.ts
```
---

## Componentes Creados

### FeedHeader
* **Responsabilidad**: Mostrar la barra superior de la pantalla principal que simula la interfaz de Instagram, conteniendo el imagotipo de texto y los botones de acción rápida.

### FeedCard
* **Responsabilidad**: Representar visualmente una publicación individual dentro del feed.
* **Características**: Recibe los datos por props bajo el contrato de interfaz definido. Maneja de manera aislada los me gusta mediante estados locales para evitar re-renderizados innecesarios en la lista global.

### StoriesList
* **Responsabilidad**: Mostrar la lista de historias de desplazamiento horizontal.
* **Características**: Utiliza un ScrollView con propiedad horizontal y oculta la barra de de desplazamiento nativa para una estética limpia.

### ProfileHeader
* **Responsabilidad**: Mostrar la sección superior del perfil del usuario logueado.
* **Características**: Renderiza la foto de perfil, el nombre de usuario, la biografía y las estadísticas de publicaciones, seguidores y seguidos. Recibe la cantidad de publicaciones totales dinámicamente mediante props.

---

## Componentización y Reutilización de Código

El desarrollo fue abordado mediante componentes con el fin de:
* Evitar código duplicado.
* Mantener responsabilidades de lógica y presentación desacopladas.
* Facilitar el mantenimiento evolutivo del software.

A diferencia de la versión Web, donde las publicaciones detalladas se visualizaban en un componente modal flotante sobre la misma página, en la versión móvil se estructuró una pantalla dedicada (PostScreen) dentro de la pila de navegación (Stack). Esto permite una experiencia de usuario natural conforme a los patrones de diseño de aplicaciones móviles nativas.

---

## Comunicación entre Componentes mediante Props

El flujo de datos en la aplicación es unidireccional y se implementó mediante props fuertemente tipadas en TypeScript.
* **HomeScreen** pasa la información individual de cada publicación a cada componente **FeedCard** renderizado por la lista.
* **ProfileScreen** calcula dinámicamente la longitud de su arreglo de fotos y envía ese valor numérico como prop a **ProfileHeader**.
* **StoriesList** recibe el arreglo de imágenes de avatar a renderizar de manera horizontal.

---

## Navegación y Enrutamiento (React Navigation)

Toda la arquitectura de ruteo está declarada y tipada rigurosamente en el archivo `types.ts`.

### 1. MainTabs (Bottom Tab Navigator)
Establece la barra de navegación inferior del sistema, controlando las secciones principales de la aplicación (Home, Reels,Mensajes, Buscar, Perfil) y manteniendo el estado de cada vista al alternar entre ellas.

### 2. HomeStack (Native Stack Navigator)
Permite el flujo de navegación apilada. Gestiona la transición visual y el paso de parámetros cuando el usuario presiona una publicación en el Feed o en el Perfil, dirigiéndolo a la pantalla de detalle (PostScreen) y habilitando la transición táctil de retorno.

---

## Hooks Utilizados

### useState
* **posts**: Almacena las publicaciones asíncronas obtenidas de la API para el feed.
* **liked / likesCount**: Controla el estado interactivo del botón de me gusta y la actualización inmediata de la cifra en pantalla en cada posteo.
* **comments / newComment**: Almacena la lista de comentarios de la vista extendida y captura la entrada de texto del teclado de forma reactiva.
* **loading**: Controla la visualización del spinner de carga mientras se completa la petición asíncrona.

### useEffect
* **Consumo Asincrónico**: Se configuró un efecto en el montaje de la pantalla principal para realizar la llamada de red a la API mediante el servicio centralizado con Axios, asegurando que la petición ocurra una única vez al iniciar la vista.

---

## Consumo de API y Mapeo de Datos

Se configuró un cliente de Axios instanciado en `api.ts` para conectar con The Cat API. Las llamadas asíncronas se resolvieron dentro de `catService.ts`.

Dado que la API externa provee únicamente imágenes y metadatos básicos del felino, el servicio se encarga de estructurar y transformar cada elemento antes de retornarlo a las pantallas. Se mapean los siguientes datos:
* Identificador único (id) provisto por la API.
* URL de la imagen del gato.
* Usuarios simulados iterados de forma cíclica para evitar desbordamiento de índices.
* Ubicaciones geográficas asignadas por módulo aritmético.
* Descripciones generadas dinámicamente a partir de un listado estático predefinido.
* Cantidad inicial de likes autogenerada de manera aleatoria.

---

## Optimización Crítica de Rendimiento (FlatList)

Para cumplir con las restricciones de rendimiento en interfaces móviles, se prohibió el uso de mapeos lineales sobre componentes de scroll genéricos para listas masivas.
* **Feed de Publicaciones**: Implementado mediante un componente nativo FlatList que optimiza el renderizado de los componentes FeedCard en memoria.
* **Cuadrícula de Perfil**: Implementado con una FlatList configurada con la propiedad nativa `numColumns={3}`, distribuyendo de manera exacta y simétrica las publicaciones sin provocar desbordamientos de pantalla.

---

## Identidad del Sistema y Adaptabilidad

* **SafeAreaView**: Se utilizó para volver jerárquicamente cada pantalla, limitando selectivamente sus límites (edges) para proteger elementos interactivos contra notches o islas dinámicas, permitiendo a la vez que la barra inferior de navegación ocupe todo el alto real del display.
* **StatusBar**: Estilizada en modo oscuro para contrastar con la paleta de colores claros de la aplicación, asegurando una visibilidad correcta de la hora, batería y señal del dispositivo.
* **SplashScreen e Icono**: Configurados de manera nativa mediante el archivo de manifiesto `app.json` de Expo, reemplazando los activos por defecto del framework por diseños optimizados para la marca de la aplicación.