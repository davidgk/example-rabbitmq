import * as faker from 'community-faker';
import { TestingModule } from '@nestjs/testing';

export function getRandomEmail(): string {
  return faker.internet.email();
}

export function getRandomUuid() {
  return faker.datatype.uuid();
}

// export const ENTITIES_TO_MAP = [Competition, Team, Player];
//
// export function getEntityManager(moduleRef: TestingModule): EntityManager {
//   return moduleRef.get(getEntityManagerToken('default'));
// }
