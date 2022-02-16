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

      expect(await petController.getAllPets()).toBe(pets);
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

      expect(await petController.getSinglePet(pet.id)).toBe(pet);
    });
  });
});
