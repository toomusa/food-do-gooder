const router = require("express").Router();
const authRoutes = require("./authRoutes");
const todoRoutes = require("./todoRoutes");

const passportService = require("../../services/passport")
const authMiddlewares = require("../../middlewares/authMiddlewares");

// /api prepended to these routes

router.route("/test")
    .get(authMiddlewares.requireAuth, (req, res) => {
        res.send(req.user);
    })

router.use("/auth", authRoutes);
router.use("/todo", todoRoutes);

module.exports = router;
