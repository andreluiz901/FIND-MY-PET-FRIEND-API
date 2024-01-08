import { prisma } from '@/lib/prisma';
import { OrgsRepository } from '@/repositories/orgs-repository';
import { Prisma } from '@prisma/client';

export class PrismaOrgsRepository implements OrgsRepository {
  create(data: Prisma.OrgCreateInput) {
    const newOrg = prisma.org.create({ data });

    return newOrg;
  }
}
