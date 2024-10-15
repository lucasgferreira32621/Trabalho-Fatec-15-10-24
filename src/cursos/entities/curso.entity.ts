import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Curso {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  duracao: number; 
}
