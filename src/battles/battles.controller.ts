import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BattleService } from './battles.service';
import { Battle } from './battles.entity';

@Controller('battles')
export class BattleController {
    constructor(private readonly battleService: BattleService) { }

    @Post('fight')
    async fight(@Body() body: { pokemon1Id: string; pokemon2Id: string }): Promise<{ winner: object; loser: object; turns: any[] }> {
        const { pokemon1Id, pokemon2Id } = body;
        const result = await this.battleService.battle(pokemon1Id, pokemon2Id);
        return {
            winner: result.winner,
            loser: result.loser,
            turns: result.turns
        };
    }

    @Get(':id')
    async getBattle(@Param('id') id: number): Promise<Battle> {
        return this.battleService.findOne(id);
    }

    @Get()
    async getAllBattles(): Promise<Battle[]> {
        return this.battleService.findAll();
    }

    @Get('pokemon/:pokemonId')
    async getBattlesByPokemon(@Param('pokemonId') pokemonId: string): Promise<Battle[]> {
        return this.battleService.findByPokemonId(pokemonId);
    }
}
