import { PrismaOrgsRepository } from '@/repositories/prisma/orgs-prisma-repository';
import { CreateOrgUseCase } from '../create-org';

export function makeCreateOrguseCase() {
  const orgsRepository = new PrismaOrgsRepository();
  const createOrgsUseCase = new CreateOrgUseCase(orgsRepository);

  return createOrgsUseCase;
}
