import { ConversationType } from '../global/type';

export class ConversationService {
  async startConversation(
    input: ConversationType.CreateRequestDto,
  ): Promise<ConversationType.CreateResponseDto> {
    // TODO: input validation. 데이터 저장 및 대화 서버에 데이터 가져오기
    console.log(input);

    return {
      sessionId: '1번째',
    };
  }

  async chat(
    sessionId: string,
    input: ConversationType.ChatRequestDto,
  ): Promise<ConversationType.ChatResponseDto> {
    // TODO: 메시지 전송. AI 응답 기다리기
    console.log(sessionId, input);

    return {
      response: 'gpt가 준 응답',
    };
  }

  async endConversation(
    sessionId: string,
  ): Promise<ConversationType.EndResponseDto> {
    // TODO: 채팅 종료 메시지 저장. 결과 응답 생성 및 응답 기다리기

    return {
      sessionId: sessionId,
      result: {
        sessionId: '1',
        successFlag: true,
        missionRate: 70,
        conversationRate: 50,
        mannerRate: 30,
        missionResult: [
          {
            id: '1',
            title: '아무튼 이거임',
            result: true,
          },
          {
            id: 'adasd2',
            title: '아무튼 이거임22',
            result: true,
          },
        ],
        conversationProficiency: { hi: '어몰랑' },
        conversationHistory: [
          {
            sessionId: '2',
            isAI: true,
            chat: '윤떙떙님 하이요',
            createdAt: '아몰랑',
          },
          {
            sessionId: '2',
            isAI: false,
            chat: '그래 부장아 하이',
            feedback: '이렇게 말하면 클남',
            isGood: false,
            createdAt: '아몰랑',
          },
        ],
      },
    };
  }

  async getChatHistory(sessionId: string) {
    // TODO: 채팅 기록 조회
    console.log(sessionId);

    return [
      {
        sessionId: '2',
        isAI: true,
        chat: '윤떙떙님 하이요',
        createdAt: '아몰랑',
      },
      {
        sessionId: '2',
        isAI: false,
        chat: '그래 부장아 하이',
        feedback: '이렇게 말하면 클남',
        isGood: false,
        createdAt: '아몰랑',
      },
    ];
  }
}
