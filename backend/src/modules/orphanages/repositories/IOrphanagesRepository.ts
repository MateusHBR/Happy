import ICreateOrphanageDTO from '../dtos/ICreateOrphanageDTO';
import Orphanage from '../infra/typeorm/entities/Orphanage';

export default interface IOrphanagesRepository {
  create(data: ICreateOrphanageDTO): Promise<Orphanage>;
}
