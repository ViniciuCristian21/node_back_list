import prismaClient  from '../prisma';

class CreateListService {
    async execute(text: string, id: string){
        const list =  await prismaClient.list.create({
            data: {
                id,
                text 
            }
        });
        
        return list;
    }
}

export { CreateListService };