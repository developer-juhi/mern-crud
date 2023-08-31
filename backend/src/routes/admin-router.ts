import { Router } from "express";

import decMiddleware from "../helper/decryptData";

import categoryService from "../controllers/admin/category";
import categoryValidation from "../validation/admin/category-validation";
import commonValidation from "../validation/common-validation";

// Constants
const adminRouter = Router();
adminRouter.use(decMiddleware.DecryptedData);

// *******************************************************************************************
// ================================== Start category Route =======================================
// *******************************************************************************************

adminRouter.get("/category/get", categoryService.get);
adminRouter.post("/category/store", categoryValidation.store, categoryService.store);
adminRouter.get("/category/edit-get", commonValidation.idRequiredQuery, categoryService.edit);
adminRouter.delete("/category/delete", commonValidation.idRequiredQuery, categoryService.destroy);
adminRouter.post("/category/change-status", commonValidation.idRequired, categoryService.changeStatus);

// *******************************************************************************************
// ================================== End category Route =========================================
// *******************************************************************************************

// Export default
export default adminRouter;
