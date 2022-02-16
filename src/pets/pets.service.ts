import { Injectable } from '@nestjs/common';
import { Pets } from './pets.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PetServices {
  private pets: Pets[] = [];

  insertPet(species: string, age: number, name: string, color: string) {
    const id = uuidv4();
    const newPet = new Pets(id, species, age, name, color);
    this.pets.push(newPet);
    return id;
  }
}
