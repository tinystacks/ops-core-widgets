import { Models, TinyStacksError } from '@tinystacks/ops-core';
import isEmpty from 'lodash.isempty';

import Provider = Models.Provider;

export function findProvider<T extends Provider> (providers: Provider[] = [], providerType: string): T {
  if (!providers || isEmpty(providers)) {
    throw TinyStacksError.fromJson({
      message: 'No providers are available!',
      status: 400
    });
  }

  const provider = providers.find(p => p.type === providerType);
  if (!provider) {
    throw TinyStacksError.fromJson({
      message: `No ${providerType}s are available!`,
      status: 400
    });
  }

  return provider as T;
}