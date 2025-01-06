import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
} from 'class-validator';

enum ClusterMode {
  primary_standby = 'primary_standby',
  partial_primary_standby = 'partial_primary_standby',
}

enum LoadBalancingType {
  round_robin = 'round_robin',
  least_connections = 'least_connections',
  weighted_round_robin = 'weighted_round_robin',
  random = 'random',
  ip_hash = 'ip_hash',
  least_response_time = 'least_response_time',
  none = 'none',
}

export class CreateClusterConfigDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  cluster_slug: string;

  @IsNotEmpty()
  @IsString()
  project_slug: string;

  @IsOptional()
  @IsEnum(ClusterMode)
  clusterMode: ClusterMode;

  @IsOptional()
  @IsEnum(LoadBalancingType)
  load_balancing_type: LoadBalancingType;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(900)
  health_check_interval: number;

  @IsOptional()
  @IsBoolean()
  failover_enabled: boolean;
}

export class GetProjectConfigsQueryDto {
  @IsNotEmpty()
  @IsString()
  project_slug: string;
}

export class GetProjectConfigQueryDto {
  @IsNotEmpty()
  @IsString()
  project_slug: string;

  @IsNotEmpty()
  @IsString()
  config_slug: string;
}

export class UpdateConfigQueryDto {
  @IsNotEmpty()
  @IsString()
  project_slug: string;

  @IsNotEmpty()
  @IsString()
  config_slug: string;
}

export class UpdateConfigBodyDto {
  @IsOptional()
  @IsEnum(ClusterMode)
  clusterMode: ClusterMode;

  @IsOptional()
  @IsEnum(LoadBalancingType)
  load_balancing_type: LoadBalancingType;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(900)
  health_check_interval: number;

  @IsOptional()
  @IsBoolean()
  failover_enabled: boolean;
}
