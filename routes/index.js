const express = require('express');
const router = express.Router();
const getControllers = require('../controllers/get');
const postControllers = require('../controllers/post');



router.get('/', getControllers.homePage);
router.get('/about-us', getControllers.aboutPage);
router.get('/contact', getControllers.contactPage);
router.get('/blog', getControllers.blogPage);
router.get('/service', getControllers.servicePage);
router.get('/feature', getControllers.featurePage);
router.get('/team', getControllers.teamPage);
router.get('/quote', getControllers.quotePage);
router.get('/penetration', getControllers.penetrationPage);
router.get('/whitebox-testing', getControllers.whiteboxTestingPage);
router.get('/blackbox-testing', getControllers.blackboxTestingPage);
router.get('/network-security', getControllers.networkSecurityPage)
router.get('/forensic', getControllers.forensicPage)
router.get('/devops', getControllers.devopsPage)
router.get('/web-development', getControllers.webDevelopmentPage);
router.get('/blog-scenes', getControllers.blogBehindTheScenes);
router.get('/blog-helement', getControllers.blogHumanElement);
router.get('/blog-threats', getControllers.blogThreatsPage);
router.get('/blog-demy', getControllers.blogDemyPage)

router.post('/register', postControllers.register);
router.post('/login', postControllers.login);

// Exporting router
module.exports = router;