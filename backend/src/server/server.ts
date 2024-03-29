import express, { Request, Response } from 'express';
import { sequelize, Resultado } from '../model/database';
import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';

const app = express();
const PORT = 3001;

sequelize.sync({ force: true }).then(() => {
    console.log('Database synchronized.');
});

app.use(express.json());
app.use(cors());

app.get('/results', async (req: Request, res: Response) => {
    try {
        const { bimester } = req.query;

        let whereCondition: Record<string, any> = {};

        if (bimester) {
            whereCondition.bimestre = bimester;
        }

        const resultados = await Resultado.findAll({
            where: whereCondition,
        });

        res.json(resultados);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching results' });
    }
});

app.post('/results', async (req: Request, res: Response) => {
    const { bimestre, disciplina, nota } = req.body;

    if (nota < 0 || nota > 10) {
        return res.status(400).json({ error: 'Invalid nota value. It should be between 0 and 10' });
    }

    try {
        const [resultado, created] = await Resultado.findOrCreate({
            where: {
                [Op.and]: [{ bimestre, disciplina }],
            },
            defaults: {
                bimestre,
                disciplina,
                nota,
                criadoEm: new Date(),
                atualizadoEm: new Date(),
                id: uuidv4(),
            },
        });

        if (!created) {
            return res.status(400).json({ error: 'Result with the same bimestre and disciplina already exists' });
        }

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Error creating result' });
    }
});


app.put('/results/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { bimestre, disciplina, nota } = req.body;

    if (nota !== undefined && (nota < 0 || nota > 10)) {
        return res.status(400).json({ error: 'Invalid nota value. It should be between 0 and 10' });
    }

    try {
        const existingResult = await Resultado.findOne({
            where: {
                bimestre,
                disciplina,
                id: { [Op.not]: id },
            },
        });

        if (existingResult) {
            return res.status(400).json({ error: 'Result with the same bimestre and disciplina already exists' });
        }

        const resultado = await Resultado.findByPk(id);

        if (!resultado) {
            return res.status(404).json({ error: 'Result not found' });
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


app.delete('/results/:bimester/:discipline', async (req: Request, res: Response) => {
    const { bimester, discipline } = req.params;

    try {
        const resultado = await Resultado.findOne({
            where: {
                bimestre: bimester,
                disciplina: discipline,
            },
        });

        if (!resultado) {
            return res.status(404).json({ error: 'Result not found' });
        }

        await resultado.destroy();
        res.json({ message: 'Result deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting result' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
