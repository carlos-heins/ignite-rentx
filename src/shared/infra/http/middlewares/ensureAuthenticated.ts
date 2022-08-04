import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "../../../errors/AppError";

interface IPayLoad {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    // Bearer djnfjdnafnd-dfdfdas0jd
    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "66ca12baea589a6c048e70fc20feae5e"
        ) as IPayLoad;

        const usersRepository = new UsersRepository();
        const user = usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        request.user = {
            id: user_id,
        };

        next();
    } catch {
        throw new AppError("Invalid token!", 401);
    }
}
