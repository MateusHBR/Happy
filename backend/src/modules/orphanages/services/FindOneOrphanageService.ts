import AppError from '@shared/error/AppError';
import { injectable, inject } from 'tsyringe';
import Orphanage from '../infra/typeorm/entities/Orphanage';
import IOrphanagesRepository from '../repositories/IOrphanagesRepository';

interface IRequest {
  id: string;
}

@injectable()
class FindOneOrphanageService {
  constructor(
    @inject('OrphanagesRepository')
    private orphanagesRepository: IOrphanagesRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Orphanage> {
    const orphanage = await this.orphanagesRepository.findOne(id);

    if (!orphanage) {
      throw new AppError('Orphanage does not exist');
    }

    return orphanage;
  }
}

export default FindOneOrphanageService;
