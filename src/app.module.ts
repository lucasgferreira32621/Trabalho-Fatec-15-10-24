import { Module } from '@nestjs/common';
import { Curso } from './cursos/entities/curso.entity';
import { Estudante } from './estudantes/entities/estudante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CursosModule } from './cursos/cursos.module';
import { EstudantesModule } from './estudantes/estudantes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: 'banco.sqlite',
      entities: [Curso, Estudante], 
      synchronize: true, 
    }),
    TypeOrmModule.forFeature([Curso, Estudante]), 
    CursosModule,
    EstudantesModule,
  ],
})
export class AppModule {}
