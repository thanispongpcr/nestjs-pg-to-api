import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListService } from './list.service';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('list')
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Post('/create')
  create(@Body() createListDto: CreateListDto) {
    return this.listService.create(createListDto);
  }
  
  @Get('/')
  findAll() {
    return this.listService.findAll();
  }

  @Get('listone/:id')
  findOne(@Param('id') id: string) {
    return this.listService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listService.update(+id, updateListDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.listService.remove(+id);
  }
}
