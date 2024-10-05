import { HttpStatus } from '@nestjs/common';
import { BaseResponse, ErrorCode } from '../type';

const isErrorCode = (target: ErrorCode | HttpStatus): target is ErrorCode => {
  return (target as ErrorCode).code !== undefined;
};

export function createResponse<T>(
  codeObject: HttpStatus | ErrorCode,
  data?: T,
): BaseResponse<T> {
  if (isErrorCode(codeObject)) {
    return {
      isSuccess: true,
      code: codeObject.code,
      message: codeObject.message,
      data,
    };
  }

  return {
    isSuccess: true,
    code: getHttpStatusKey(codeObject.valueOf()),
    message: codeObject.valueOf().toString(),
    data,
  };
}

export function getEnumKey<T extends object>(
  enumObj: T,
  key: string | number,
): string | undefined {
  const result = Object.entries(enumObj).find(([, value]) => value === key);
  return result ? result[0] : undefined;
}

export function getHttpStatusKey(key: number): string {
  const result = Object.entries(HttpStatus).find(([, value]) => value === key);
  return result![0];
}
