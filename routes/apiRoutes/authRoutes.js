const router = require("express").Router();
const authController = require("../../controllers/authController")

router.route("/signup")
    .post(authController.signUp);

router.route("/signin")
    .post(authController.signIn);

// Auth protected routes
// router.route("/")
//     .get(authMiddlewares.requireAuth, todoController.getTodos)
//     .post(authMiddlewares.requireAuth, todoController.createTodo);

module.exports = router;