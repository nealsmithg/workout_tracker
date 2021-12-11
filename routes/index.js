const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./apiRoutes");
const router = require("./htmlRoutes");

router.use("/", htmlRoutes);
router.use("/api", apiRoutes);

module.exports = router;
