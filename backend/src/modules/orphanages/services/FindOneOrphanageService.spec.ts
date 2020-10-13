import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import FakeOrphanagesRepository from '../repositories/fakes/FakeOrphanagesRepository';
import FindOneOrphanageService from './FindOneOrphanageService';

let fakeOrphanagesRepository: FakeOrphanagesRepository;
let findOneOrphanageService: FindOneOrphanageService;

describe('FindOneOrphanage', () => {
  beforeEach(() => {
    fakeOrphanagesRepository = new FakeOrphanagesRepository();
    findOneOrphanageService = new FindOneOrphanageService(
      fakeOrphanagesRepository,
    );
  });

  it('should be able to list one orphanage', async () => {
    const { id } = await fakeOrphanagesRepository.create({
      about: 'about',
      images: [],
      instructions: 'instructions',
      latitude: -10.0,
      longitude: -10.0,
      name: 'Raio de Sol',
      openOnWeekends: true,
      openingHours: 'das 8h as 18h',
    });

    const orphanage = await findOneOrphanageService.execute({ id });

    expect(orphanage).toHaveProperty('name');
    expect(orphanage.name).toBe('Raio de Sol');
  });

  it('should not be able to list orphanage with non-existing id', async () => {
    await expect(
      findOneOrphanageService.execute({ id: 123456 }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
