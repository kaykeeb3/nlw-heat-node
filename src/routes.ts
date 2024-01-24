import { Router } from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreatemessageController } from "./controller/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreatemessageController().handle
);

export { router };
