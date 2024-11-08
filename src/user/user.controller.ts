// src/user/user.controller.ts
import { Controller, Post, Body, Get, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { Request } from 'express';

@Controller('auth')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  // Register a new user
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.userService.create(createUserDto);

    // Convert the Mongoose document to a plain object
    const { username, _id } = newUser.toObject();
    const token = await this.authService.generateTokenForUser({ username, _id });
    console.log('Token saved to localStorage:', token);

    return { newUser, ...token };
  }

  // Login to get a JWT
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    // Validate the user's credentials
    const user = await this.userService.validateUser(body.username, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }
  
    // Generate a JWT token for the user
    const { access_token } = await this.authService.generateTokenForUser({
      username: user.username,
      _id: user._id.toString() // Ensure _id is a string
    });
  
    // Log the access token for debugging
    console.log(`Access token generated on login: ${access_token}`);
  
    // Return the token in the response
    return { access_token };
  }
  


  // Protected route that requires a valid JWT
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req: Request) {
    return req.user;
  }

  // Retrieve all users (example route without protection)
  @Get()
  async findAll() {
    return this.userService.findAll();
  }
}
