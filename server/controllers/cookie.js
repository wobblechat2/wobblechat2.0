const cookieController = {};

// Set cookie on user (of their ID) upon successful sign up or log in.
cookieController.setCookies = (_req, res, next) => {
  try {
    let id = res.locals.id;
    if (!id) id = _req.user.id;
    res.cookie("ssid", id, {
      expires: new Date(Date.now() + 1200000),
      httpOnly: true,
    });

    res.cookie("loggedIn", true, {
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

// cookieController.oAuthSetCookie = (_req, res, next) => {
//   try {
//     const gID = _req.user.id
//     res.cookie("giD", gID, {
//       expires: new Date(Date.now() + 1200000),
//       httpOnly: true,
//     });

//     res.cookie("loggedIn", true, {
//       expires: new Date(Date.now() + 1200000),
//       httpOnly: false,
//     });

//   } catch (err) {
//     return next({
//       status: 500,
//       message: err.message
//     });
//   }
  
// };

// Unset cookies on logout
cookieController.unsetCookies = (_req, res, next) => {
  res.cookie("ssid", "", { maxAge: 0 });
  res.cookie("loggedIn", false, { maxAge: 0 });
  return next();
};

module.exports = cookieController;
