import { Sequelize, DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

const dbPath = path.resolve(__dirname, '..', 'data', 'database.sqlite');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: dbPath,
});

interface ResultadoAttributes {
    bimestre: string;
    disciplina: string;
    nota: number;
    criadoEm: Date;
    atualizadoEm: Date;
    id: string;
}

class Resultado extends Model<ResultadoAttributes> implements ResultadoAttributes {
    public bimestre!: string;
    public disciplina!: string;
    public nota!: number;
    public criadoEm!: Date;
    public atualizadoEm!: Date;
    public id!: string;
}

Resultado.init({
    bimestre: {
        type: DataTypes.ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO'),
        allowNull: false,
    },
    disciplina: {
        type: DataTypes.ENUM('Biologia', 'Artes', 'Geografia', 'Sociologia'),
        allowNull: false,
        unique: 'uniqueBimestreDisciplina',
    },
    nota: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    criadoEm: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    atualizadoEm: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
    },
}, {
    sequelize,
    modelName: 'Resultado',
});

Resultado.addHook('beforeDefine', (attributes, options) => {
    options.indexes = [{ unique: true, fields: ['bimestre', 'disciplina'], name: 'uniqueBimestreDisciplina' }];
});

export { sequelize, Resultado };
