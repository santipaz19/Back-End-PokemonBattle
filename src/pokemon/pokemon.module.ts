import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon])], // Asegúrate de que este import esté aquí
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule { }
