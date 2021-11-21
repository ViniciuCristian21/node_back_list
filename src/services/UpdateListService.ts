import prismaClient  from '../prisma';

class UpdateListService {
    async execute(id: string, text: string){
        const list = await prismaClient.list.update({
            data: {
                text: text,
            },
            where: {
                id: id,
            },
        });

        return list;
    }

}

export { UpdateListService };