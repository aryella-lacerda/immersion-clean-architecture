import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';

import { CreateRouteUseCase, ListAllRoutesUseCase } from '@application';

@Controller('routes')
export class RoutesController {
  constructor(
    private createRoute: CreateRouteUseCase,
    private listAllRoutes: ListAllRoutesUseCase,
  ) {}

  @Post()
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.createRoute.execute(createRouteDto);
  }

  @Get()
  findAll() {
    return this.listAllRoutes.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.routesService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
  //   return this.routesService.update(+id, updateRouteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.routesService.remove(+id);
  // }
}
