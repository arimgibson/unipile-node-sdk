import { Static } from '@sinclair/typebox';
import {
  AccountCreateBody,
  AccountCreateLinkedinBasicBodySchema,
  AccountCreateTwitterBodySchema,
  AccountCreateLinkedinCookieBodySchema,
  AccountCreateInstagramBodySchema,
  AccountCreateMessengerBodySchema,
} from '../../accounts/accounts-create.types.js';
import { SupportedProvider } from '../client.js';

export type GetAccountsInput = {
  limit?: number;
  cursor?: string;
};

/** ConnectAccountInput */
export type ConnectAccountInput = AccountCreateBody;

/** ReconnectAccountInput */
export type ReconnectAccountInput = ConnectAccountInput & { account_id: string };

export type LinkedinBasicAuthenticationInput = Omit<Static<typeof AccountCreateLinkedinBasicBodySchema>, 'provider'>;
export type LinkedinCookieAuthenticationInput = Omit<Static<typeof AccountCreateLinkedinCookieBodySchema>, 'provider'>;

/** PostInstagramAccountInput */
export type PostInstagramAccountInput = Omit<Static<typeof AccountCreateInstagramBodySchema>, 'disabled_features' | 'provider'>;

/** PostTwitterAccountInput */
export type PostTwitterAccountInput = Omit<Static<typeof AccountCreateTwitterBodySchema>, 'disabled_features' | 'provider'>;

/** PostMessengerAccountInput */
export type PostMessengerAccountInput = Omit<Static<typeof AccountCreateMessengerBodySchema>, 'disabled_features' | 'provider'>;

/** PostCodeCheckpointInput */
type ProviderUsingCodeCheckpoint = 'LINKEDIN' | 'INSTAGRAM' | 'TWITTER' | 'MESSENGER';

export type PostCodeCheckpointInput = {
  provider: ProviderUsingCodeCheckpoint;
  account_id: string;
  code: string;
};

/** PostHostedAuthLinkInput */

type HostedAuthConnectionLinkInput = {
  type: 'create';
  expiresOn: string;
  api_url: string;
  providers: '*' | Array<SupportedProvider>;
  name?: string;
  success_redirect_url?: string;
  failure_redirect_url?: string;
  notify_url?: string;
};

type HostedAuthReconnectionLinkInput = {
  type: 'reconnect';
  expiresOn: string;
  api_url: string;
  reconnect_account: string;
  name?: string;
  success_redirect_url?: string;
  failure_redirect_url?: string;
  notify_url?: string;
};

export type PostHostedAuthLinkInput = HostedAuthConnectionLinkInput | HostedAuthReconnectionLinkInput;
