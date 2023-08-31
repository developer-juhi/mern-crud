import { Router } from "express";
import decMiddleware from "../helper/decryptData";

// Constants
const noAuthRouter = Router();
noAuthRouter.use(decMiddleware.DecryptedData);

// Export default
export default noAuthRouter;
