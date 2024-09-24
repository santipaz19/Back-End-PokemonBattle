import { Controller, Get, Post, Body } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemon')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) { }

    // Endpoint para obtener todos los Pokemon
    @Get()
    findAll(): Promise<Pokemon[]> {
        return this.pokemonService.findAll();
    }

    //Crear Pokemon
    @Post()
    create(@Body() pokemonData: Pokemon): Promise<Pokemon> {
        return this.pokemonService.create(pokemonData);
    }
}