module.exports = function(sequelize, DataTypes) {
    var Reservations = sequelize.define("Reservations", {
        date: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        revAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        revCity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        revPrice: {
            type: DataTypes.STRING,
            allowNull: false
        },
        revZipcode: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // When we delete an Author, we'll also delete their Posts "cascade"
                // An Author (foreignKey) is required or a Post can't be made
                // console.log(models.Users);
                Reservations.belongsTo(models.Properties);
                Reservations.belongsTo(models.Users);
            }
        }
    });
    return Reservations;
};
