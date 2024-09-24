
import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { SeederModule } from './seed/seeder.module';
import { PokemonSeeder } from './seed/pokemon.seed';
import { BattleModule } from './battles/battles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokemon.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PokemonModule,
    SeederModule,
    BattleModule,
  ],

})
// seed de pokemons
export class AppModule implements OnModuleInit {
  constructor(private readonly seeder: PokemonSeeder) { }

  async onModuleInit() {
    await this.seeder.seed();
  }
}