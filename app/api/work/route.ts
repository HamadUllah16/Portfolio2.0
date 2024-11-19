import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET() {

    try {
        const allWork = await prisma.work.findMany();
        return NextResponse.json({ message: 'All work fetched.', allWork }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { title, image, description, technologies, github, preview } = await req.json();

        const work = await prisma.work.create({
            data: { title, description, image, technologies: technologies.split(', '), github, preview },
        });

        return NextResponse.json({ message: 'Work added successfully', work }, { status: 200 });
    } catch (error) {
        console.error('Error adding work:', error);
        return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
    }
}


// export async function deleteWork(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { id } = req.body;
//         if (id) {
//             try {

//                 const work = await prisma.work.delete({ where: id });
//                 return res.status(200).json({ message: 'Work deleted', work });
//             } catch (error) {
//                 res.status(500).json({ message: 'Internal Server Error', error })
//             }
//         }
//         return res.status(401).json({ message: 'No id provided' });
//     }
// }