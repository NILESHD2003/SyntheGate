import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

export class CreateServiceClusterDto {
  @IsNotEmpty()
  @IsString()
  project_slug: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class RegisterServiceNodeDto {
  @IsNotEmpty()
  @IsUrl()
  proxy_url: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  cluster_slug: string;

  @IsNotEmpty()
  @IsString()
  project_slug: string;

  @IsOptional()
  @IsBoolean()
  is_healthy?: boolean;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  weight?: number;
}

export class GetAllClusterQueryDto {
  @IsNotEmpty()
  @IsString()
  project_slug: string;
}

export class GetClusterQueryDto {
  @IsNotEmpty()
  @IsString()
  cluster_slug: string;

  @IsNotEmpty()
  @IsString()
  project_slug: string;
}

export class UpdateClusterDto {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  config_slug?: string;
}

export class ServiceNodeQueryDto {
  @IsNotEmpty()
  @IsString()
  node_id: string;
}
