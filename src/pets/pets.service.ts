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
  getPets() {
    return [...this.pets];
  }
  getPet(id: string) {
    return this.getPetById(id)[0];
  }
  updatePet(
    id: string,
    species: string,
    age: number,
    name: string,
    color: string,
  ) {
    const [targetPet, index] = this.getPetById(id);
    const petParams = { ...targetPet, species, age, name, color };
    const updatedPet = new Pets(
      id,
      petParams.species,
      petParams.age,
      petParams.name,
      petParams.color,
    );
    this.pets[index] = updatedPet;
  }
  deletePet(id: string) {
    const [target, index] = this.getPetById(id);
    this.pets.splice(index, 1);
  }
  private getPetById(id: string): [Pets, number] {
    const index = this.pets.findIndex((pet) => pet.id === id);
    return [this.pets[index], index];
  }
}
