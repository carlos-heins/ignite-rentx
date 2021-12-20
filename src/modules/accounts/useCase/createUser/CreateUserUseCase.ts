import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_licence,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadyExits = this.usersRepository.findByEmail(email);

        if (userAlreadyExits) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            password: passwordHash,
            driver_licence,
        });
    }
}

export { CreateUserUseCase };