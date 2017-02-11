module.exports = function(sequelize, DataTypes) {
    var Properties = sequelize.define("Properties", {
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        zipcode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        longitude: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        }
    }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // When we delete an Author, we'll also delete their Posts "cascade"
                // An Author (foreignKey) is required or a Post can't be made
                // console.log(models.Users);
                Properties.belongsTo(models.Users);

            }
        }

    }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // When we delete an Author, we'll also delete their Posts "cascade"
                // An Author (foreignKey) is required or a Post can't be made
                // console.log(models.Users);
                Properties.hasMany(models.Schedules);

            }
        }

    }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // When we delete an Author, we'll also delete their Posts "cascade"
                // An Author (foreignKey) is required or a Post can't be made
                // console.log(models.Users);
                Properties.hasMany(models.renters);

            }
        }

    });
    return Properties;
};
