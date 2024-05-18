import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name } = req.body;
        try {
            const user = await prisma.user.create({
                data: {
                    name,
                },
            });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Error creating user' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
