// isso aqui é um exemplo de model criando com typescript e sequelize
// o erro que ta dando na linha 18 é pq n configurei o banco de dados ainda, ignorem.

import { Model, DataTypes } from 'sequelize';
// import { sequelize } from '../database'; almir vai configurar dps xD

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface UserInstance extends Model<UserAttributes>, UserAttributes {}

const User = sequelize.define<UserInstance>('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'users', // Nome da tabela no banco de dados
  timestamps: false
});

export default User;
