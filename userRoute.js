const readUser = require("./readUser.js");

router.get('/:username', readUser);

const readUserAll = require("./readUserAll.js");

router.get('/:usernameall', readUserAll);
