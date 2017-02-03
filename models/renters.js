module.exports = function(sequelize, DataTypes) {
    var Renters = sequelize.define("renters", {
        email: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    return Renters;
};
