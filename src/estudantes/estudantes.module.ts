import { Module } from '@nestjs/common';
import { EstudantesService } from './estudantes.service';
import { EstudantesController } from './estudantes.controller';

@Module({
  controllers: [EstudantesController],
  providers: [EstudantesService],
})
export class EstudantesModule {}
