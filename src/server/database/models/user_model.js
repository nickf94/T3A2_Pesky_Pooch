// Seperating out the model generation from the schema itself in case we need to add any instance, class or query methods to the model in the future.

const mongoose = require("mongoose");

const UserSchema = require("./../schemas/user_schema");

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;