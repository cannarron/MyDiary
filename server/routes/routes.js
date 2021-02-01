import userController from '../controllers/userController';
// import validation from '../middleware/validation';
import authenticate from '../middleware/authenticate';
import entryController from '../controllers/entryController';

const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('/index.html');
  });
  app.get('/api/v1/entries', authenticate.checkToken, entryController.getAll);
  app.get('/api/v1/entries/:id', authenticate.checkToken, entryController.getOne);
  app.post('/api/v1/entries', authenticate.checkToken, entryController.addNew);
  app.put('/api/v1/entries', authenticate.checkToken, entryController.updateEntry);
  app.delete('/api/v1/entries/:id', authenticate.checkToken, entryController.deleteEntry);

  /** Auth routes */
  app.post('/api/v1/auth/signup', userController.findUser, userController.createUser);
  app.post('/api/v1/auth/login', userController.loginUser);
};


export default router;
