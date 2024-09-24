import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Battle } from './battles.entity';
import { BattleService } from './battles.service';
import { BattleController } from './battles.controller';
import { Pokemon } from 'src/pokemon/pokemon.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Battle, Pokemon])],
    providers: [BattleService],
    controllers: [BattleController],
})
export class BattleModule { }