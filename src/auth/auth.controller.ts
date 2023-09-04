import {
  Controller,
  HttpCode,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  BadRequestException,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { ALREADY_REGISTERED_ERROR } from './auth.constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //@HttpCode(201) // можно не ставить так как по дефолту код 201
  @UsePipes(new ValidationPipe())
  @Post('register')
  async register(@Body() dto: AuthDto) {
    const oldUser = await this.authService.findUser(dto.login);

    if (oldUser) {
      throw new BadRequestException(ALREADY_REGISTERED_ERROR);
    } else {
      return this.authService.createUser(dto);
    }
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('login')
  async login(@Body() { login, password }: AuthDto) {
    const user = await this.authService.validateUser(login, password);
    return this.authService.login(user.email);
  }
}
