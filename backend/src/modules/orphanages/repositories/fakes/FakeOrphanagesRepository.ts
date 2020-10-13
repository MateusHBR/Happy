import ICreateOrphanageDTO from '@modules/orphanages/dtos/ICreateOrphanageDTO';
import Orphanage from '@modules/orphanages/infra/typeorm/entities/Orphanage';
import IOrphanagesRepository from '../IOrphanagesRepository';

class FakeOrphanagesRepository implements IOrphanagesRepository {
  private fakeRepository: Orphanage[] = [];

  public async create({
    about,
    images,
    instructions,
    latitude,
    longitude,
    name,
    openOnWeekends,
    openingHours,
  }: ICreateOrphanageDTO): Promise<Orphanage> {
    const orphanage = new Orphanage();

    Object.assign(orphanage, {
      id: this.fakeRepository.length,
      about,
      images,
      instructions,
      latitude,
      longitude,
      name,
      openOnWeekends,
      openingHours,
    });

    this.fakeRepository.push(orphanage);

    return orphanage;
  }

  public async list(): Promise<Orphanage[]> {
    return this.fakeRepository;
  }

  public async findOne(id: number): Promise<Orphanage | undefined> {
    const orphanage = this.fakeRepository.find(
      currentOrphanage => currentOrphanage.id === id,
    );

    return orphanage;
  }
}

export default FakeOrphanagesRepository;
