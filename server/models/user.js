const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        userName: {
        type: DataTypes.STRING,
        unique: true,
        },
        email: {
        type: DataTypes.STRING,
        unique: true,
        },
        password: {
        type: DataTypes.STRING,
        unique: false,
        },
        firstName: {
        type: DataTypes.STRING,
        unique: false,
        },
        lastName: {
        type: DataTypes.STRING,
        unique: false,
        },
        telephoneNumber: {
        type: DataTypes.STRING,
        unique: false,
        },
        streetAddress: {
        type: DataTypes.STRING,
        unique: false,
        },
        city: {
        type: DataTypes.STRING,
        unique: false,
        },
        state: {
        type: DataTypes.STRING,
        unique: false,
        },
        zip: {
        type: DataTypes.STRING,
        unique: false,
        },
    });


    User.findByLogin = async login => {
        let user = await User.findOne({
        where: { username: login },
    });

    if (!user) {
        user = await User.findOne({
            where: { email: login },
        });
    }

    return user;
    };

    return User;
};

export default user;