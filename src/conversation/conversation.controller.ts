import { Controller, HttpStatus } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { TypedBody, TypedParam, TypedRoute } from '@nestia/core';
import { BaseResponse, ConversationType } from '../global/type';
import { createResponse } from '../global/util/mapper';

@Controller('/api/conversations/sessions')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  /**
   * @summary 채팅 시작 API
   * @tag conversation
   * @param input
   */
  @TypedRoute.Post('')
  async startConversation(
    @TypedBody() input: ConversationType.CreateRequestDto,
  ): Promise<BaseResponse<object>> {
    const result = await this.conversationService.startConversation(input);
    return createResponse(HttpStatus.CREATED, result);
  }

  /**
   * @summary 채팅 API
   * @tag conversation
   * @param sessionId
   * @param input
   */
  @TypedRoute.Post('/:sessionId/message')
  async chat(
    @TypedParam('sessionId') sessionId: string,
    @TypedBody() input: ConversationType.ChatRequestDto,
  ): Promise<BaseResponse<ConversationType.ChatResponseDto>> {
    const response = await this.conversationService.chat(sessionId, input);
    return createResponse(HttpStatus.OK, response);
  }

  /**
   * @summary 채팅 종료 API
   * @tag conversation
   * @param sessionId
   */
  @TypedRoute.Post('/:sessionId/end')
  async endConversation(
    @TypedParam('sessionId') sessionId: string,
  ): Promise<BaseResponse<ConversationType.EndResponseDto>> {
    const result = await this.conversationService.endConversation(sessionId);
    return createResponse(HttpStatus.OK, result);
  }

  /**
   * @summary 채팅 기록 조회 API
   * @tag conversation
   * @param sessionId
   */
  @TypedRoute.Get('/:sessionId/histories')
  async getChatHistory(
    @TypedParam('sessionId') sessionId: string,
  ): Promise<BaseResponse<ConversationType.ChatHistoryDto[]>> {
    const history = await this.conversationService.getChatHistory(sessionId);
    return createResponse(HttpStatus.OK, history);
  }
}
