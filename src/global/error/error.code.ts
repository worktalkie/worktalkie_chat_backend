import { ErrorCode, TObj } from '../type';
import { HttpStatus } from '@nestjs/common';

export const ErrorCodes: TObj<ErrorCode> = {
  /**
   * MEMBER 도메인
   */
  NOT_EXIST_MEMBER: {
    httpStatus: HttpStatus.NOT_FOUND,
    code: 'MEM-001',
    message: '존재하지 않는 멤버입니다',
  },
};
