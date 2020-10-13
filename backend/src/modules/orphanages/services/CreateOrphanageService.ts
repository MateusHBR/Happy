import { inject, injectable } from 'tsyringe';
import * as Yup from 'yup';

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

    const data = {
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
      images,
    };

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      openingHours: Yup.string().required(),
      openOnWeekends: Yup.boolean().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const orphanage = await this.orphanagesRepository.create(data);

    return orphanage;
  }
}

export default CreateOrphanageService;
