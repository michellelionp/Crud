import { HotelesService } from './hoteles.service';
import { HotelesController } from './hoteles.controller';
import { Module } from '@nestjs/common';

@Module({
    controllers: [HotelesController],
    providers: [HotelesService],
})
export class HotelesModule {}
