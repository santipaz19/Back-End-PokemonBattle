import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonSeeder } from './pokemon.seed';
import { Pokemon } from '../pokemon/pokemon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Pokemon])], // Importar el repositorio de Pokémon
    providers: [PokemonSeeder],
    exports: [PokemonSeeder], // Exportar si es necesario en otros módulos
})
export class SeederModule { }