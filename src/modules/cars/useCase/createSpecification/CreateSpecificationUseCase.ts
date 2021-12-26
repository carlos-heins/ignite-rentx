import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

/**
 * Definir o tipo de retorno
 * Alterar o retorno do erro
 * instanciar a clase categoriesRepository?
 *  Retornar algo?
 */
@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationsRepository
    ) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAreadyExists) {
            throw new AppError("Specifications Already exists!");
        }

        await this.specificationRepository.create({
            name,
            description,
        });
    }
}

export { CreateSpecificationUseCase };
