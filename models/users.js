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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
}, {        classMethods: {
            associate: function (models) {
                // Associating Author with Posts

                Users.hasMany(models.Owners, {
                    onDelete: "cascade"
                });
            }
        }
    });
    return Users;
};
