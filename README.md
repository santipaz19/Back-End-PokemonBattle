# Pokémon Battle Backend

Este proyecto es la API para la aplicación Pokémon Battle. A continuación, se detallan las instrucciones para configurar y ejecutar el proyecto localmente.

## Descripción de la Aplicación

La API permite:

- **Gestionar Pokémon**: Permite crear nuevos Pokémon, así como obtener todos los Pokémon o buscar uno específico por su ID.
- **Simular Batallas**: Proporciona la lógica necesaria para realizar batallas, así como la capacidad de guardar y obtener información sobre todas las batallas o filtrarlas por ID de batalla o por Pokémon.
- **Cargar Datos**: Permite la carga inicial de datos de Pokémon desde archivos para facilitar la configuración inicial.


# Deploy:
https://back-end-pokemonbattle.onrender.com/

En caso de utilizar el deploy, espera unos minutos a que se levante el servidor debido a que está alojado en render y en el plan gratis al estar inactivo se apaga.

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/santipaz19/Back-End-PokemonBattle.git

2. **Instalar dependencias: Usando npm:**

   npm install

## Ejecucion

Para iniciar el proyecto en modo desarrollo:
npm start

El proyecto se ejecutará en http://localhost:3001.

## Estructura del Proyecto

src/: Contiene el código fuente del proyecto.

battle/: Contiene la lógica de controllador y entidades relacionada con las batallas entre Pokémon.

data/: Almacena los datos iniciales y archivos semillas para cargar Pokémon.

pokemons/: Módulos que gestionan las operaciones y entidades para los Pokémon.

seed/:  Para la carga inicial de datos en la base de datos.

