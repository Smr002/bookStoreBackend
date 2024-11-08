// user/dto/create-user.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  password: string;
}
