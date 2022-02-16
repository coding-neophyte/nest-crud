import {
  Body,
  Controller,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetServices } from './pets.service';

@Controller('pets')
export class PetController {
  constructor(private readonly petservice: PetServices) {}

  @Post()
  insertPet(
    @Body('species') species: string,
    @Body('age') age: number,
    @Body('name') name: string,
    @Body('color') color: string,
  ) {
    const petId = this.petservice.insertPet(species, age, name, color);
    return { id: petId };
  }

  @Get()
  getAllPets() {
    return this.petservice.getPets();
  }
  @Get(':petId')
  getSinglePet(@Param('petId') petId: string) {
    return this.petservice.getPet(petId);
  }
  @Put(':petId')
  updatePet(
    @Param('petId') petId: string,
    @Body('species') species: string,
    @Body('age') age: number,
    @Body('name') name: string,
    @Body('color') color: string,
  ) {
    return this.petservice.updatePet(petId, species, age, name, color);
  }
  @Delete(':petId')
  deletePet(@Param('petId') petId: string) {
    this.petservice.deletePet(petId);
  }
}
