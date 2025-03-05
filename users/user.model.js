const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        email: {tpye: DataType.String, allowNull: false },
        passwordHash: {tpye: DataType.String, allowNull: false },
        title: {tpye: DataType.String, allowNull: false },
        firstName: {tpye: DataType.String, allowNull: false },
        lastName: {tpye: DataType.String, allowNull: false },
        role: {tpye: DataType.String, allowNull: false },
    };

    const options = {
        defaultScope: {
            attributes: {exclude: ['passwordHash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}