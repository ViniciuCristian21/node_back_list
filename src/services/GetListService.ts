import prismaClient  from '../prisma';

class GetListService {
    async execute(){
        const lists = await prismaClient.list.findMany();

        return lists;
    }

}

export { GetListService };