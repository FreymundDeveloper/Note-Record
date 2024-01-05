import express, { Request, Response } from 'express';
import { Sequelize, DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3001;

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
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

sequelize.sync({ force: true }).then(() => {
    console.log("Database synchronized.");
});

app.use(express.json());


app.get('/results', async (req: Request, res: Response) => {
    try {
        const resultados = await Resultado.findAll();
        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching results' });
    }
});

app.post('/results', async (req: Request, res: Response) => {
    const { bimestre, disciplina, nota } = req.body;
    
    try {
        const resultado = await Resultado.create({
            bimestre,
            disciplina,
            nota,
            criadoEm: new Date(),
            atualizadoEm: new Date(),
            id: uuidv4(),
      });
  
      res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: "Error creating result" });
    }
});  

app.put('/results/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { bimestre, disciplina, nota } = req.body;

    try {
        const resultado = await Resultado.findByPk(id);

        if (!resultado) {
            return res.status(404).json({ error: "Result not found" });
        }

        resultado.bimestre = bimestre || resultado.bimestre;
        resultado.disciplina = disciplina || resultado.disciplina;
        resultado.nota = nota || resultado.nota;
        resultado.atualizadoEm = new Date();

        await resultado.save();

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error updating result' });
    }
});

app.delete('/results/:id', async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const resultado = await Resultado.findByPk(id);

        if (!resultado) {
            return res.status(404).json({ error: "Result not found" });
        }

        await resultado.destroy();
        res.json({ message: "Result deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting result' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
