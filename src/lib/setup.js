/* eslint no-param-reassign: 0 */
export default (klass, methods) => {
  Object.keys(methods).forEach((name) => {
    klass[name] = methods[name];
  });
};
