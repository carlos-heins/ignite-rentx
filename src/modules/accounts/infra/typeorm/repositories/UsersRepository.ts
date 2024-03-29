import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }
    async create({
        name,
        email,
        driver_licence,
        password,
        avatar,
        id,
    }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            email,
            driver_licence,
            password,
            avatar,
            id,
        });

        await this.repository.save(user);
    }
    async findByEmail(email: string): Promise<User> {
        const user = this.repository.findOne({ email });

        return user;
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id); // O ID pode ser passado direto
        return user;
    }
}

export { UsersRepository };
