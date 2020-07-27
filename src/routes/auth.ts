import { Router, Request, Response } from 'express';
import { auth } from '../controllers';

const router = Router();

router.post('/', async function signupRoute(req: Request, res: Response) {
  const data = req.body;
  try {
    const token = await auth.signup(data);

    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
});

export default router;
