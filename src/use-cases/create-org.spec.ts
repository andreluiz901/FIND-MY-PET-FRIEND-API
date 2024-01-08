import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository';
import { expect, describe, it, beforeEach } from 'vitest';
import { CreateOrgUseCase } from './create-org';

let orgsRepository: InMemoryOrgsRepository;
let sut: CreateOrgUseCase;

describe('Create Org use-case', () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository();
    sut = new CreateOrgUseCase(orgsRepository);
  });

  it('Should be create a Org', async () => {
    const { org } = await sut.execute({
      city: 'valid_city',
      email: 'valid_email@email.com',
      password_hash: 'valid_password',
      country: 'Brasil',
      state: 'valid_state',
      address_line_1: 'valide address line 123132',
      address_line_2: 'valid address line 1123',
      zip_code: 15235894,
      description: 'valid description',
      phone: 11123456789,
    });

    expect(org.id).toEqual(expect.any(String));
  });
});
