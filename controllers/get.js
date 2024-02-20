// Home page
const homePage = (req, res) => { res.render('index') }
    // Contact page
const contactPage = (req, res) => { res.render('contact') }
    // About page
const aboutPage = (req, res) => { res.render('about') }
    // Team page
const teamPage = (req, res) => { res.render('team') }
    // Qoute page
const quotePage = (req, res) => { res.render('quote') }
    // Feature page
const featurePage = (req, res) => { res.render('feature') }
    // Service page
const servicePage = (req, res) => { res.render('service') }
const penetrationPage = (req, res) => { res.render('penetration') }
const whiteboxTestingPage = (req, res) => { res.render('whitebox') }
const blackboxTestingPage = (req, res) => { res.render('blackbox') }
const networkSecurityPage = (req, res) => { res.render('network') }
const forensicPage = (req, res) => { res.render('forensic') }
const devopsPage = (req, res) => { res.render('devops') }
const webDevelopmentPage = (req, res) => { res.render('webdevelopment') }
    // Blog pages
const blogPage = (req, res) => { res.render('blog') }
const blogBehindTheScenes = (req, res) => { res.render('scenes') }
const blogHumanElement = (req, res) => { res.render('human-element') }
const blogThreatsPage = (req, res) => { res.render('threats') }
const blogDemyPage = (req, res) => { res.render('demy') }
const blogRamsomeawarenessPage = (req, res) => { res.render('ramsomeawareness') }
const cloudPage = (req, res) => { res.render('cloud') }

// Export modules
module.exports = {
    homePage,
    contactPage,
    aboutPage,
    servicePage,
    teamPage,
    quotePage,
    blogPage,
    featurePage,
    penetrationPage,
    whiteboxTestingPage,
    blackboxTestingPage,
    networkSecurityPage,
    forensicPage,
    devopsPage,
    webDevelopmentPage,
    blogBehindTheScenes,
    blogHumanElement,
    blogThreatsPage,
    blogDemyPage,
    blogRamsomeawarenessPage,
    cloudPage,
}