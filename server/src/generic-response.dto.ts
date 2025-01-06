export class HealthDto {
  status: number;
  message: string;
}

export class AcknowledgementDto {
  status: number;
  success: boolean;
  message: string;
}

export class DataResponseDto<T> {
  status: number;
  success: boolean;
  message: string;
  data: T;
}
