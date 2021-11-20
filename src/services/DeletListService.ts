import prismaClient  from '../prisma';

class DeletListService {
    async execute(id: string){
        const list = await prismaClient.list.delete({
            where: {
                id: id,
            }
        })

        return list;
    }
}

export { DeletListService };