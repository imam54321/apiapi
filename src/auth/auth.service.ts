import { Injectable } from '@nestjs/common';
import { RegisterDto } from '../auth/dto/register.dto.js';
import { User } from '../auth/entities/user-entity.js';
import { LoginDto } from './dto/login.dto.js';


@Injectable()
export class AuthService {
    //register
    register(registerDto: RegisterDto): User {
        const newUser = new User();
        newUser.id = 1;
        newUser.username = registerDto.username;
        newUser.email = registerDto.email;
        newUser.password = registerDto.password;
        return newUser;
    }

    //login
    login(loginDto: LoginDto): string {
        const user = new User();
        user.email = loginDto.email;
        user.password = loginDto.password;
        return "User berhasil login";
    }

    //forgot password
    forgotPassword(){
        return "Link reset password berhasil dikirim ke email";
    }

    //password recovery
    resetPassword(){
        return "Password berhasil diubah";
    }
}
