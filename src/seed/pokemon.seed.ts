
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { pokemonData } from '../data/pokemon-data';
import { Pokemon } from '../pokemon/pokemon.entity';

@Injectable()
export class PokemonSeeder {
    constructor(
        @InjectRepository(Pokemon)
        private readonly pokemonRepository: Repository<Pokemon>,
    ) { }

    async seed() {
        // borrar los Pokemon existentes
        await this.pokemonRepository.clear();

        // Guardar los nuevos Pokémon en la base de datos
        for (const pokemon of pokemonData) {
            await this.pokemonRepository.save(pokemon);
        }

        console.log('Pokémon seed completada');
    }
}
