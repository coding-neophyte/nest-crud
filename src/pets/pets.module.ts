import { Module } from '@nestjs/common';
import { PetController } from './pets.controllers';
import { PetServices } from './pets.service';

@Module({
  controllers: [PetController],
  providers: [PetServices],
})
export class PetModule {}
