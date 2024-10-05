/* eslint-disable @typescript-eslint/no-namespace */

import { HttpStatus } from '@nestjs/common';

export type TG<T> = T[] | T;
export type TObj<T extends object> = { [key: string]: T };

export declare namespace MemberType {
  interface CreateRequestDto {
    name: string;
    email: string;
    loginId: string;
    password: string;
  }

  interface MemberDto {
    id: string;
    name: string;
    email: string;
  }

  interface LoginRequestDto {
    loginId: string;
    password: string;
  }

  interface ProficiencyDto {
    score: number;
    dailyResult?: object[];
  }
}

export declare namespace ScenarioType {
  type ScenarioPagingDto = ListType;

  interface DetailScenarioDto {
    title: string;
    contents: string;
    missions: object[];
    tips: object[];
  }
}

export declare namespace MissionType {
  interface missionResultResponseDto {
    id: string;
    title: string;
    result: boolean;
  }

  interface MissionDto {
    id: string;
    title: string;
  }
}

// conversation은 유저가 대화하는 엔티티. scenario는 유저가 선택할 대화 내용의 정보 엔티티
export declare namespace ConversationType {
  interface ConversationDto {
    id: string;
    title: string;
    category: string;
    eta: number;
  }

  interface CreateRequestDto {
    memberId: string;
    scenarioId: string;
  }

  interface CreateResponseDto {
    sessionId: string;
  }

  interface ChatRequestDto {
    request: string;
  }

  interface ChatResponseDto {
    response: string;
  }

  interface ChatHistoryDto {
    sessionId: string;
    isAI: boolean;
    chat: string;
    feedback?: string;
    isGood?: boolean;
    createdAt: string;
  }

  interface EndResponseDto {
    sessionId: string;
    result: AnalysisType.ResultResponseDto;
  }
}

export declare namespace AnalysisType {
  interface ResultResponseDto {
    sessionId: string;
    successFlag: boolean;
    missionRate: number;
    conversationRate: number;
    mannerRate: number;
    missionResult: MissionType.missionResultResponseDto[];
    conversationProficiency: object;
    conversationHistory: ConversationType.ChatHistoryDto[];
  }
}

export interface BaseResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data?: T;
}

export interface ErrorCode {
  httpStatus: HttpStatus;
  code: string;
  message: string;
}

export interface EnumType {
  key: string;
  value: string;
}

export interface ListType {
  data: any[];
  count: number;
}

export interface PaginationDto {
  /**
   * 페이지네이션의 페이지 값
   * @minimum 1
   */
  page: number;

  /**
   * @maximum 100
   */
  limit: number;
}
