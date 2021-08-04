//Checks if the user is logged in
const loggedInController = {};

loggedInController.check = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

module.exports = loggedInController;