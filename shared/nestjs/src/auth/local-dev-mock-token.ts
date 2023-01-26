import { Request } from 'express';
import { sign } from 'jsonwebtoken';

/**
 * Simulates a local development token
 *
 * @param req The request to mock the token on
 */
export function injectMockToken(req: Request) {
  req.headers['X-Auth-Request-Access-Token'] = sign(
    {
      exp: 1645702259,
      iat: 1645701959,
      auth_time: 1645700924,
      jti: '422636a5-ea0b-4b2b-a406-0bbdd8c7aac4',
      iss: 'https://development.shopfloor.io/auth/realms/shopfloor',
      aud: 'account',
      sub: '134433c6-dd47-4967-97ba-d56b28efd0d1',
      typ: 'Bearer',
      azp: 'oauth2-proxy',
      session_state: 'a026080d-f619-439a-931f-d20dab389bf8',
      acr: '0',
      realm_access: {
        roles: [
          'urn:sio:right:ad:use',
          'urn:sio:right:user:roles',
          'urn:sio:right:mm:use',
          'urn:sio:right:user:delete',
          'urn:sio:right:tenant:use',
          'urn:sio:right:cm:edit',
          'urn:sio:right:asset:hierarchy',
          'urn:sio:right:tenant:create',
          'urn:sio:right:asset:type',
          'urn:sio:right:general:user',
          'offline_access',
          'uma_authorization',
          'urn:sio:right:cm:use',
          'urn:sio:right:asset:asset:delete:self',
          'urn:sio:right:user:edit',
          'urn:sio:role:super-admin',
          'urn:sio:right:asset:asset:create',
          'urn:sio:right:user:use',
          'urn:sio:right:asset:use',
          'urn:sio:right:grafana:use',
          'urn:sio:right:asset:asset:edit:self',
          'urn:sio:right:hub:use',
          'urn:sio:right:hub:edit',
          'default-roles-shopfloor',
          'urn:sio:right:asset:asset:edit',
          'urn:sio:right:user:create',
          'urn:sio:right:user:edit:self',
          'urn:sio:right:asset:asset:delete',
        ],
      },
      resource_access: {
        account: {
          roles: ['manage-account', 'manage-account-links', 'view-profile'],
        },
      },
      scope: 'openid profile email',
      sid: 'a026080d-f619-439a-931f-d20dab389bf8',
      email_verified: true,
      tenantId: '8e640e8c-12e2-4725-b16a-c6ba889c5fb1',
      name: 'elunic Admin',
      'sio-roles': [
        'urn:sio:right:ad:use',
        'urn:sio:right:user:roles',
        'urn:sio:right:mm:use',
        'urn:sio:right:user:delete',
        'urn:sio:right:tenant:use',
        'urn:sio:right:cm:edit',
        'urn:sio:right:asset:hierarchy',
        'urn:sio:right:tenant:create',
        'urn:sio:right:asset:type',
        'urn:sio:right:general:user',
        'offline_access',
        'uma_authorization',
        'urn:sio:right:cm:use',
        'urn:sio:right:asset:asset:delete:self',
        'urn:sio:right:user:edit',
        'urn:sio:role:super-admin',
        'urn:sio:right:asset:asset:create',
        'urn:sio:right:user:use',
        'urn:sio:right:asset:use',
        'urn:sio:right:grafana:use',
        'urn:sio:right:asset:asset:edit:self',
        'urn:sio:right:hub:use',
        'urn:sio:right:hub:edit',
        'default-roles-shopfloor',
        'urn:sio:right:asset:asset:edit',
        'urn:sio:right:user:create',
        'urn:sio:right:user:edit:self',
        'urn:sio:right:asset:asset:delete',
      ],
      groups: [
        '/tenant/0bfd22e4-88c5-4f73-bcdb-6bb4ae9aa7ed',
        '/tenant/8e640e8c-12e2-4725-b16a-c6ba889c5fb1',
      ],
      preferred_username: 'elunic_admin',
      given_name: 'elunic',
      family_name: 'Admin',
      email: 'technik@elunic.de',
    },
    'any-random-string-does-not-matter',
  );
}