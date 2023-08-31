import { Router } from 'express';
import commonService from '../controllers/common/common';
import decMiddleware from "../helper/decryptData";

// Constants
const commonRouter = Router();
commonRouter.use(decMiddleware.DecryptedData);

commonRouter.get('/category', commonService.getCategory);

// Export default
export default commonRouter;
