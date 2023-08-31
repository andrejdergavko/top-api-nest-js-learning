import { Controller, HttpCode, Post, Body } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  @HttpCode(201) // можно не ставить так как по дефолту код 201
  @Post('register')
  async register(@Body() dto: AuthDto) {}

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {}
}
