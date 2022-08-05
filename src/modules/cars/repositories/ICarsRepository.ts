import { ICreateCarDTO } from "../dtos/ICreateCarDTO";

interface ICarsRepository {
    create(data: ICreateCarDTO);
}

export { ICarsRepository };
