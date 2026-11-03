import { ArrayNotEmpty, IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Nama harus diisi' })
  @IsString()
  readonly name: string;

  @IsNotEmpty({ message: 'ISBN harus diisi' })
  @IsString()
  readonly isbn: string;

  @IsOptional() @IsInt() @Min(0)
  readonly publishedYear?: number;

  @IsOptional() @IsNumber() @Min(0)
  readonly price?: number;

  @IsOptional() @IsInt() @Min(0)
  readonly stock?: number;

  @IsNotEmpty({ message: 'Publisher harus diisi' })
  @IsUUID('4', { message: 'publisherId harus berupa UUID' })
  readonly publisherId: string;

  @IsNotEmpty({ message: 'Category harus diisi' })
  @IsUUID('4')
  readonly categoryId: string;

  @IsArray() @ArrayNotEmpty({ message: 'Minimal satu penulis' })
  @IsUUID('4', { each: true })
  readonly authorIds: string[];
}