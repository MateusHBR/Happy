import { inject, injectable } from 'tsyringe';

import Orphanage from '../infra/typeorm/entities/Orphanage';

import IOrphanagesRepository from '../repositories/IOrphanagesRepository';

interface IRequest {
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  openingHours: string;
  openOnWeekends: boolean;
  requestImages: Express.Multer.File[];
}

@injectable()
class CreateOrphanageService {
  constructor(
    @inject('OrphanagesRepository')
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  public async execute({
    name,
    latitude,
    longitude,
    about,
    instructions,
    openingHours,
    openOnWeekends,
    requestImages,
  }: IRequest): Promise<Orphanage> {
    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const orphanage = await this.orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
      images,
    });

    return orphanage;
  }
}

export default CreateOrphanageService;
