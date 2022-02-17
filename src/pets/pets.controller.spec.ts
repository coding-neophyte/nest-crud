import { PetController } from './pets.controllers';
import { PetServices } from './pets.service';

describe('PetController', () => {
  let petController: PetController;
  let petServices: PetServices;

  beforeEach(() => {
    petServices = new PetServices();
    petController = new PetController(petServices);
  });

  describe('get pets', () => {
    it('should return all pets', async () => {
      const pets = [expect.any(Number), 'BunBun', 3, 'Bunny', 'Black'];
      jest.spyOn(petServices, 'getPets').mockImplementation(() => pets);

      expect(await petController.getAllPets()).toStrictEqual(pets);
    });
    it('grab individual pet', async () => {
      const pet = {
        id: expect.any(Number),
        name: 'Midnight',
        age: 4,
        species: 'Cat',
        color: 'black',
      };
      jest.spyOn(petServices, 'getPet').mockImplementation(() => pet);

      expect(await petController.getSinglePet(pet.id)).toStrictEqual(pet);
    });
    it('should create a pet', async () => {
      const pet = {
        id: expect.any(Number),
        name: 'Midnight',
        age: 4,
        species: 'Cat',
        color: 'black',
      };
      jest.spyOn(petServices, 'insertPet').mockImplementation(() => pet);

      expect(
        await petController.insertPet(
          pet.name,
          pet.age,
          pet.species,
          pet.color,
        ),
      ).toEqual(pet);
    });
    it('should update a pet', async () => {
      const pet = {
        id: expect.any(Number),
        name: 'Midnight',
        age: 4,
        species: 'Cat',
        color: 'black',
      };

      const updatePet = {
        id: expect.any(Number),
        name: 'Lucky',
        age: 4,
        species: 'Cat',
        color: 'black',
      };
      jest.spyOn(petServices, 'updatePet').mockImplementation(() => updatePet);

      expect(
        await petController.updatePet(
          pet.id,
          updatePet.name,
          updatePet.age,
          updatePet.species,
          updatePet.color,
        ),
      ).toStrictEqual(updatePet);
    });
    it('delete', async () => {
      const pet = {
        id: expect.any(Number),
        name: 'Lucky',
        age: 4,
        species: 'Cat',
        color: 'black',
      };
      jest.spyOn(petServices, 'deletePet').mockImplementation(() => pet);
      expect(await petController.deletePet(pet.id)).toEqual(undefined);
    });
  });
});
