import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudante } from './entities/estudante.entity';

@Injectable()
export class EstudantesService {
  constructor(
    @InjectRepository(Estudante)
    private repositorioEstudantes: Repository<Estudante>,
  ) {}

  listarTodos(): Promise<Estudante[]> {
    return this.repositorioEstudantes.find();
  }

  encontrarPorId(id: number): Promise<Estudante> {
    return this.repositorioEstudantes.findOneBy({ id });
  }

  criar(estudante: Estudante): Promise<Estudante> {
    return this.repositorioEstudantes.save(estudante);
  }

  async remover(id: number): Promise<void> {
    await this.repositorioEstudantes.delete(id);
  }
}
