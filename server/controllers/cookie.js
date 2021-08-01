const cookieController = {};

// Set cookie on user (of their ID) upon successful sign up or sign in.
cookieController.setCookie = (_req, res, next) => {
  try {
    const { id } = res.locals;
    res.cookie("ssid", id, {
      expires: new Date(Date.now() + 1200000),
      httpOnly: false,
    });
    return next();
  } catch (err) {
    return next({
      status: 500,
      message: err.message,
    });
  }
};

// setSSIDCookie - store the user id in a cookie
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
};

module.exports = cookieController;
