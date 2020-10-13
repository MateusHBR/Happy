import { getRepository, Repository } from 'typeorm';

import ICreateOrphanageDTO from '@modules/orphanages/dtos/ICreateOrphanageDTO';
import IOrphanagesRepository from '@modules/orphanages/repositories/IOrphanagesRepository';

import Orphanage from '../entities/Orphanage';

class OrphanagesRepository implements IOrphanagesRepository {
  private ormRepository: Repository<Orphanage>;

  constructor() {
    this.ormRepository = getRepository(Orphanage);
  }

  public async create({
    name,
    about,
    instructions,
    latitude,
    longitude,
    openOnWeekends,
    openingHours,
  }: ICreateOrphanageDTO): Promise<Orphanage> {
    const orphanage = this.ormRepository.create({
      name,
      about,
      instructions,
      latitude,
      longitude,
      openingHours,
      openOnWeekends,
    });

    await this.ormRepository.save(orphanage);

    return orphanage;
  }
}

export default OrphanagesRepository;
