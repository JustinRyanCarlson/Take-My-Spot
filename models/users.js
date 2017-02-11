var passportLocalSequelize = require('passport-local-sequelize');

module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        hash: {
            type: DataTypes.TEXT
        },
        salt: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                // Associating Author with Posts
                Users.hasMany(models.Properties, {
                    onDelete: "cascade"
                });
            }
        }
    });

    passportLocalSequelize.attachToUser(Users, {
        usernameField: 'email',
        hashField: 'hash',
        saltField: 'salt'
    });

    return Users;
};
