import httpStatus from 'http-status';

const responseHandler = () => async (ctx, next) => {
  ctx.res.success = (data = null) => {
    ctx.body = {
      success: true,
      code: httpStatus.OK,
      data
    };
  };
  ctx.res.failure = (code = null) => (message = null) => {
    ctx.body = {
      success: false,
      code,
      message
    };
  };
  ctx.res.serverError = ctx.res.failure(httpStatus.INTERNAL_SERVER_ERROR);
  await next();
};

export default responseHandler;
