module.exports = function(sequelize, DataTypes) {
    var Renters = sequelize.define("Renters", {
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
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
                Renters.belongsTo(models.Users);
            }
        }
    });
    return Renters;
};
