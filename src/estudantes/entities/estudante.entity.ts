import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Curso } from '../../cursos/entities/curso.entity';

@Entity()
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @ManyToOne(() => Curso)
  curso: Curso; 
}
