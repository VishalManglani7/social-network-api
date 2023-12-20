const router = require('express').Router();
const {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController');

router.route("/").post(createUser).get(getUser);

router.route("/:userId").get(getSingleUser).put(updateUser);  

// router.route("/:userId/friends/:friendId")
//     .delete(deleteFriend)
//     .post(createFriend)
module.exports = router