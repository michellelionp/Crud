import { Module } from '@nestjs/common';
import { HotelesService } from './hoteles.service';
import { HotelesController } from './hoteles.controller';
@Module({
    providers: [HotelesService],
    controllers: [HotelesController],
})
export class HotelesModule {}
