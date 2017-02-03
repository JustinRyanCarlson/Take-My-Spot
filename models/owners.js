module.exports = function(sequelize, DataTypes) {
    var Owners = sequelize.define("owners", {
        address: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
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
        },
    });
    return Owners;
};
