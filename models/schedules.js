module.exports = function(sequelize, DataTypes) {
	var Schedules = sequelize.define("Schedules", {
		days : {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		time_0: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_1: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_2: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_3: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_4: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_5: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_6: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_7: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_8: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_9: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_10: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_11: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_12: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_13: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_14: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_15: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_16: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_17: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_18: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_19: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_20: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_21: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_22: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        time_23: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
	}, {
        // We're saying that we want our Author to have Posts
        classMethods: {
            associate: function(models) {
                // When we delete an Author, we'll also delete their Posts "cascade"
                // An Author (foreignKey) is required or a Post can't be made
                // console.log(models.Users);
                Schedules.belongsTo(models.Properties);
            }
        }
	});
	return Schedules;
};