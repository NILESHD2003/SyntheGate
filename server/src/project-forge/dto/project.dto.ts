import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  slug: string;

  @IsOptional()
  base_url: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}
