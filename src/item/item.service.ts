import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItensService {
  constructor(
    @InjectRepository(Item)
    private itensRepository: Repository<Item>,
  ) {}

  criar(item: Item): Promise<Item> {
    return this.itensRepository.save(item);
  }

  encontrarTodos(): Promise<Item[]> {
    return this.itensRepository.find();
  }

  encontrarUm(id: number): Promise<Item> {
    return this.itensRepository.findOneBy({ id });
  }

  async atualizar(id: number, item: Partial<Item>): Promise<Item> {
    await this.itensRepository.update(id, item);
    return this.encontrarUm(id);
  }

  async remover(id: number): Promise<void> {
    await this.itensRepository.delete(id);
  }
}