import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOrphanageService from '@modules/orphanages/services/CreateOrphanageService';

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

    const createOrphanageService = container.resolve(CreateOrphanageService);

    const orphanage = await createOrphanageService.execute({
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends,
    });

    return response.status(201).json(orphanage);
  }
}
