module.exports = function (sequelize, DataTypes) {
    var Owners = sequelize.define("Owners", {
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        monday: {
            // Will there be an instance in which an owner will not have any available spot, but will store his parking address for future availabilities?
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        tuesday: {
            // Will there be an instance in which an owner will not have any available spot, but will store his parking address for future availabilities?
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        wednesday: {
            // Will there be an instance in which an owner will not have any available spot, but will store his parking address for future availabilities?
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        thursday: {
            // Will there be an instance in which an owner will not have any available spot, but will store his parking address for future availabilities?
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        friday: {
            // Will there be an instance in which an owner will not have any available spot, but will store his parking address for future availabilities?
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        saturday: {
            // Will there be an instance in which an owner will not have any available spot, but will store his parking address for future availabilities?
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        sunday: {
            // Will there be an instance in which an owner will not have any available spot, but will store his parking address for future availabilities?
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        },

        0: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        1: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        2: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        3: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        4: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        5: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        6: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        7: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        8: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        9: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        10: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        11: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        12: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        13: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        14: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        15: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        16: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        17: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        18: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        19: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        20: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        21: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        22: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        23: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function (models) {
                // When we delete an Author, we'll also delete their Posts "cascade"
                // An Author (foreignKey) is required or a Post can't be made
                // console.log(models.Users);
                Owners.belongsTo(models.Users);
            }
        }
    });
    return Owners;
};