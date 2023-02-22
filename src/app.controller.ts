import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Api Taxi 24')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('EstadoServicio')
  isAvailable(): string {
    return this.appService.isAvailable();
  }
}
