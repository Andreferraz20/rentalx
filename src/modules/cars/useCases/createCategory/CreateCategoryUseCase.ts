import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * Definir o tipo de retorno X
 * Alterar o retorno de erro X
 * Acessar o repositório X
 */

class CreateCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists = this.categoriesRepository.findByName(
            name
        );
        if (categoryAlreadyExists) {
            throw new Error("Category Already Exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
