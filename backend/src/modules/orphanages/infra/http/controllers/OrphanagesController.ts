import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrphanageService from '@modules/orphanages/services/CreateOrphanageService';
import ListOrphanagesService from '@modules/orphanages/services/ListOrphanagesService';
import FindOneOrphanageService from '@modules/orphanages/services/FindOneOrphanageService';

export default class OrphanagesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
    } = request.body;

    const requestImages = request.files as Express.Multer.File[];

    const createOrphanageService = container.resolve(CreateOrphanageService);

    const orphanage = await createOrphanageService.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
      requestImages,
    });

    return response.status(201).json(orphanage);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listOrphanagesService = container.resolve(ListOrphanagesService);

    const orphanages = await listOrphanagesService.execute();

    return response.json(orphanages);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findOneOrphanageService = container.resolve(FindOneOrphanageService);

    const orphanage = await findOneOrphanageService.execute({ id });

    return response.json(orphanage);
  }
}
