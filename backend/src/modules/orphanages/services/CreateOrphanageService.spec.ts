import 'reflect-metadata';

import { ValidationError } from 'yup';

import FakeOrphanagesRepository from '../repositories/fakes/FakeOrphanagesRepository';
import CreateOrphanageService from './CreateOrphanageService';

let fakeOrphanagesRepository: FakeOrphanagesRepository;
let createOrphanageService: CreateOrphanageService;

describe('CreateOrphanage', () => {
  beforeEach(() => {
    fakeOrphanagesRepository = new FakeOrphanagesRepository();
    createOrphanageService = new CreateOrphanageService(
      fakeOrphanagesRepository,
    );
  });

  it('should be able to create a new orphanage', async () => {
    const orphanage = await createOrphanageService.execute({
      about: 'about',
      images: [{ path: 'teste' }, { path: 'teste' }],
      instructions: 'instructions',
      latitude: -10.0,
      longitude: -10.0,
      name: 'Raio de Sol',
      openOnWeekends: true,
      openingHours: 'das 8h as 18h',
    });

    expect(orphanage).toHaveProperty('id');
    expect(orphanage.name).toBe('Raio de Sol');
  });

  it('should not be able to create a new orphanage with empty values', async () => {
    await expect(
      createOrphanageService.execute({
        about: '',
        images: [],
        instructions: '',
        latitude: 0,
        longitude: 0,
        name: '',
        openOnWeekends: true,
        openingHours: '',
      }),
    ).rejects.toBeInstanceOf(ValidationError);
  });
});
