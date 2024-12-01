import { Module } from '@nestjs/common';
import { ItensController } from './item.controller';
import { ItensService } from './item.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItensController],
  providers: [ItensService],
})
export class ItensModule {}