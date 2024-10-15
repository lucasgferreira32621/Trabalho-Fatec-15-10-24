import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Curso } from './entities/curso.entity';
import { CreateCursoDto } from './dto/create-curso.dto';

@Injectable()
export class CursosService {
  create(createCursoDto: CreateCursoDto) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Curso)
    private repositorioCursos: Repository<Curso>,
  ) {}

  listarTodos(): Promise<Curso[]> {
    return this.repositorioCursos.find();
  }

  encontrarPorId(id: number): Promise<Curso> {
    return this.repositorioCursos.findOneBy({ id });
  }

  criar(curso: Curso): Promise<Curso> {
    return this.repositorioCursos.save(curso);
  }

  async remover(id: number): Promise<void> {
    await this.repositorioCursos.delete(id);
  }
}
