import { v4 as uuidV4 } from 'uuid';

const requestId = (options = {}) => (ctx, next) => {
  const {
    header = 'X-Request-Id',
    propertyName = 'reqId',
    generator = uuidV4
  } = options;
  const reqId = ctx.request.get(header) || generator();
  ctx[propertyName] = reqId;
  ctx.set(header, reqId);
  return next();
};

export default requestId;
