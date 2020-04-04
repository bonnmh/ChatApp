window.console.ignoredYellowBox = ['Setting a timer'];

const info = (...params) => {
  // We only log on dev mode
  if (__DEV__) {
    window.console.log('INFO LOG', ...params);
  }
};

const error = (...params) => {
  if (__DEV__) {
    window.console.warn('ERROR LOG', ...params);
  } else {
    // TODO: send error data to crash report serivce
  }
};
const create = name => ({
  info: (...params) => info(`${name}:`, ...params),
  error: (...params) => error(`${name}:`, ...params),
});

const Logg = {
  create,
  info,
  error,
};

export default Logg;
