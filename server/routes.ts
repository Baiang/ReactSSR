import Router from 'koa-router';

// import mockController from './controllers/mock.controller';

const router = new Router();
// router.get('/api/get-welcome', mockController.welcome);

router.nextRoute = (handle) => {
  router.get(/^(?!\/api)/, async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });
};


export default router
