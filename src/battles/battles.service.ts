import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './battles.entity';
import { Pokemon } from 'src/pokemon/pokemon.entity';

@Injectable()
export class BattleService {
    constructor(
        @InjectRepository(Battle)
        private readonly battleRepository: Repository<Battle>,
        @InjectRepository(Pokemon)
        private readonly pokemonRepository: Repository<Pokemon>,
    ) { }

    async battle(pokemon1Id: string, pokemon2Id: string): Promise<{ winner: Pokemon; loser: Pokemon; turns: any[] }> {
        const pokemon1 = await this.pokemonRepository.findOneBy({ id: pokemon1Id });
        const pokemon2 = await this.pokemonRepository.findOneBy({ id: pokemon2Id });

        if (!pokemon1 || !pokemon2) {
            throw new Error('Uno de los Pokémon no existe');
        }

        let hp1 = pokemon1.hp;
        let hp2 = pokemon2.hp;
        const turns = [];

        let turn = this.getFirstAttacker(pokemon1, pokemon2);

        while (hp1 > 0 && hp2 > 0) {
            let damage;
            if (turn === 1) {
                damage = this.calculateDamage(pokemon1.attack, pokemon2.defense);
                hp2 -= damage;
                turns.push({ attacker: pokemon1.name, defender: pokemon2.name, damage, hp1, hp2 });
                turn = 2;
            } else {
                damage = this.calculateDamage(pokemon2.attack, pokemon1.defense);
                hp1 -= damage;
                turns.push({ attacker: pokemon2.name, defender: pokemon1.name, damage, hp1, hp2 });
                turn = 1;
            }
        }

        const winner = hp1 <= 0 ? pokemon2 : pokemon1;
        const loser = hp1 <= 0 ? pokemon1 : pokemon2; // Determina el perdedor

        const battle = this.battleRepository.create({
            pokemon1,
            pokemon2,
            winnerId: winner.id,
            date: new Date(),
        });

        await this.battleRepository.save(battle);

        return { winner, loser, turns }; // Retorna también el perdedor
    }

    private getFirstAttacker(pokemon1: Pokemon, pokemon2: Pokemon): number {
        if (pokemon1.speed > pokemon2.speed) {
            return 1;
        } else if (pokemon1.speed < pokemon2.speed) {
            return 2;
        } else {
            return pokemon1.attack >= pokemon2.attack ? 1 : 2;
        }
    }

    private calculateDamage(attack: number, defense: number): number {
        const damage = attack - defense;
        return damage > 1 ? damage : 1; // Si el ataque es igual o menor que la defensa el daño es 1.
    }

    async findOne(id: number): Promise<Battle> {
        return this.battleRepository.findOneBy({ id });
    }

    async findAll(): Promise<Battle[]> {
        return this.battleRepository.find();
    }

    async findByPokemonId(pokemonId: string): Promise<Battle[]> {
        return this.battleRepository
            .createQueryBuilder('battle')
            .where('battle.pokemon1Id = :pokemonId OR battle.pokemon2Id = :pokemonId', { pokemonId })
            .getMany();
    }
}
