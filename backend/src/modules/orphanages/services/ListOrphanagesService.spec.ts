import 'reflect-metadata';

import FakeOrphanagesRepository from '../repositories/fakes/FakeOrphanagesRepository';
import ListOrphanagesService from './ListOrphanagesService';

let fakeOrphanagesRepository: FakeOrphanagesRepository;
let listOrphanagesService: ListOrphanagesService;

describe('ListOrphanagesService', () => {
  beforeEach(() => {
    fakeOrphanagesRepository = new FakeOrphanagesRepository();
    listOrphanagesService = new ListOrphanagesService(fakeOrphanagesRepository);
  });

  it('should be able to list all Orphanages', async () => {
    const orphanageOne = await fakeOrphanagesRepository.create({
      about: 'about',
      images: [],
      instructions: 'instructions',
      latitude: -10.0,
      longitude: -10.0,
      name: 'Raio de Sol',
      openOnWeekends: true,
      openingHours: 'das 8h as 18h',
    });

    const orphanageTwo = await fakeOrphanagesRepository.create({
      about: 'about',
      images: [],
      instructions: 'instructions',
      latitude: -10.0,
      longitude: -10.0,
      name: 'Raio da Lua',
      openOnWeekends: true,
      openingHours: 'das 8h as 18h',
    });

    const orphanages = await listOrphanagesService.execute();

    expect(orphanages.length).toBe(2);
    expect(orphanages).toEqual([orphanageOne, orphanageTwo]);
  });
});
