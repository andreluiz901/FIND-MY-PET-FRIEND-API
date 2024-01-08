import { Prisma, Org } from '@prisma/client';
import { OrgsRepository } from '../orgs-repository';
import { randomUUID } from 'node:crypto';

export class InMemoryOrgsRepository implements OrgsRepository {
  public items: Org[] = [];

  async create(data: Prisma.OrgCreateInput) {
    const org = {
      id: data.id ?? randomUUID(),
      email: data.email,
      password_hash: data.password_hash,
      phone: data.phone ?? null,
      city: data.city,
      state: data.state,
      zip_code: data.zip_code,
      address_line_1: data.address_line_1 ?? null,
      address_line_2: data.address_line_2 ?? null,
      country: data.country ?? 'Brasil',
      description: data.address_line_2 ?? null,
      created_at: new Date(),
      role: data.role ?? 'ORG',
    };

    this.items.push(org);

    return org;
  }
}
