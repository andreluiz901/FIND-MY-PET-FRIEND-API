import { OrgsRepository } from '@/repositories/orgs-repository';
import { Org } from '@prisma/client';
import { randomUUID } from 'node:crypto';

interface CreateOrgUseCaseRequest {
  email: string;
  password_hash: string;
  phone?: number;
  description?: string;
  city: string;
  state: string;
  zip_code: number;
  country: string;
  address_line_1?: string;
  address_line_2: string;
}

interface CreateOrgUseCaseResponse {
  org: Org;
}

export class CreateOrgUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    email,
    password_hash,
    city,
    state,
    zip_code,
    address_line_1,
    address_line_2,
    country,
    description,
  }: CreateOrgUseCaseRequest): Promise<CreateOrgUseCaseResponse> {
    const org = await this.orgsRepository.create({
      id: randomUUID(),
      email,
      password_hash,
      city,
      state,
      zip_code,
      address_line_1,
      address_line_2,
      country,
      description,
    });

    return { org };
  }
}
