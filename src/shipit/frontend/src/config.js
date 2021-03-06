const { CONFIG } = process.env;

export default require(`./configs/${CONFIG}`); // eslint-disable-line import/no-dynamic-require, global-require

const getConfigFromBody = (name, _default) => {
  let url = document.body.getAttribute(`data-${name}`);
  if (url === null) {
    url = _default;
  }
  if (url === undefined) {
    throw Error(`You need to set "data-${name}"`);
  }
  return url;
};

export const BACKEND_URL = getConfigFromBody('shipit-api-url', process.env.SHIPIT_WORKFLOW_URL);
export const RELEASE_CHANNEL = getConfigFromBody('release-channel', process.env.RELEASE_CHANNEL);
export const RELEASE_VERSION = getConfigFromBody('release-version', process.env.RELEASE_VERSION);
export const SENTRY_DSN = getConfigFromBody('sentry-dsn', process.env.SENTRY_DSN || null);
