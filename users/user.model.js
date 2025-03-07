const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false },  // ✅ FIXED
        passwordHash: { type: DataTypes.STRING, allowNull: false },  // ✅ FIXED
        title: { type: DataTypes.STRING, allowNull: false },  // ✅ FIXED
        firstName: { type: DataTypes.STRING, allowNull: false },  // ✅ FIXED
        lastName: { type: DataTypes.STRING, allowNull: false },  // ✅ FIXED
        role: { type: DataTypes.STRING, allowNull: false },  // ✅ FIXED
    };

    const options = {
        defaultScope: {
            attributes: { exclude: ['passwordHash'] }
        },
        scopes: {
            withHash: { attributes: {} }
        }
    };

    return sequelize.define('User', attributes, options);
}
