import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ItensService } from './item.service';
import { Item } from './item.entity';

@Controller('itens')
export class ItensController {
  constructor(private readonly itensService: ItensService) {}

  @Post()
  criar(@Body() item: Item): Promise<Item> {
    return this.itensService.criar(item);
  }

  @Get()
  encontrarTodos(): Promise<Item[]> {
    return this.itensService.encontrarTodos();
  }

  @Get(':id')
  encontrarUm(@Param('id') id: number): Promise<Item> {
    return this.itensService.encontrarUm(id);
  }

  @Put(':id')
  atualizar(@Param('id') id: number, @Body() item: Partial<Item>): Promise<Item> {
    return this.itensService.atualizar(id, item);
  }

  @Delete(':id')
  remover(@Param('id') id: number): Promise<void> {
    return this.itensService.remover(id);
  }
}