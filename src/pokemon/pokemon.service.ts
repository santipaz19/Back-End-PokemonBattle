import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Injectable()
export class PokemonService {
    constructor(
        @InjectRepository(Pokemon)
        private readonly pokemonRepository: Repository<Pokemon>,
    ) { }

    // Método para obtener todos los Pokémon
    findAll(): Promise<Pokemon[]> {
        return this.pokemonRepository.find();
    }

    // Método para crear un nuevo Pokémon
    async create(pokemonData: Pokemon): Promise<Pokemon> {
        // crea instancia
        const pokemon = this.pokemonRepository.create(pokemonData);
        //guarda
        return await this.pokemonRepository.save(pokemon);
    }
}
