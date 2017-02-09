module.exports = function(sequelize, DataTypes) {
	var Schedules = sequelize.define("Schedules", {
		days: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		 zero: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        one: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        two: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        three: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        four: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        five: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        six: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        seven: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        eight: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        nine: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        ten: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        eleven: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        twelve: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        thirteen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        fourteen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        fifteen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        sixteen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        seventeen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        eighteen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        nineteen: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        twenty: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        twentyone: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        twentytwo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        twentythree: {
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