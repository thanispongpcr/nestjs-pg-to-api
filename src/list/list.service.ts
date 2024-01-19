import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './entities/list.entity';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Injectable()
export class ListService {
  constructor(
    @InjectRepository(List)
    private listRepository: Repository<List>,
  ) {}

  async create(createListDto: CreateListDto) {
    const list = await this.listRepository.create(createListDto)
    const toCreate = await this.listRepository.insert(list)
    return toCreate;
  }

  findAll() {
    return this.listRepository.find({
      order: {
        id: 'ASC',
      },
    })
  }

  findOne(id: number) {
    return this.listRepository.findOneBy({id:id})
  }

  async update(id: number, updateListDto: UpdateListDto) {
    let list = await this.listRepository.findOneBy({id:id})
    list = {
      ...list,
      ...updateListDto
    }
    const toUpdate = await this.listRepository.save(list)

    return toUpdate;
  }

  async remove(id: number) {
    const toDelete = await this.listRepository.delete(id)
    return toDelete
  }
}
