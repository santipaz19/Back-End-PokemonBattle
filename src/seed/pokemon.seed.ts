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
        // Borrar los Pokémon existentes
        await this.pokemonRepository.clear();

        await this.pokemonRepository.save(pokemonData);

        console.log('Pokémon seed completada');
    }
}
