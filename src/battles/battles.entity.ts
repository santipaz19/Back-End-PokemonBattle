import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Pokemon } from 'src/pokemon/pokemon.entity';

@Entity()
export class Battle {
    @PrimaryGeneratedColumn()
    id: number; // ID de la batalla

    @ManyToOne(() => Pokemon, { eager: true, onDelete: 'CASCADE' })
    pokemon1: Pokemon; // Primer Pokémon

    @ManyToOne(() => Pokemon, { eager: true, onDelete: 'CASCADE' })
    pokemon2: Pokemon; // Segundo Pokémon

    @Column()
    winnerId: string; // ID del Pokémon ganador

    @Column()
    date: Date; // Fecha de la batalla
}
