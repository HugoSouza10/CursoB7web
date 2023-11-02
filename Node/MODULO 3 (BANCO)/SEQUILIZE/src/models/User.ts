import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';


//CRIANDO OS TYPES DO BANCO
export interface UserInstance extends Model {
    id: number,
    name: string,
    age: number
}

//DEFININDO A TABELA DO BANCO
export const User = sequelize.define<UserInstance>("User", {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    name: {
        type: DataTypes.STRING
    },

    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    },
},{
    tableName: 'users',
    timestamps: false
})


