1. **암호화 방식**
    - 비밀번호를 DB에 저장할 때 Hash를 이용했는데, Hash는 단방향 암호화와 양방향 암호화 중 어떤 암호화 방식에 해당할까요?
    - 단방향
    - 비밀번호를 그냥 저장하지 않고 Hash 한 값을 저장 했을 때의 좋은 점은 무엇인가요?
    - 암호화되어서 비밀번호가 저장될때 해쉬값으로 저장이됨
2. **인증 방식**
    - JWT(Json Web Token)을 이용해 인증 기능을 했는데, 만약 Access Token이 노출되었을 경우 발생할 수 있는 문제점은 무엇일까요?
    - 모르는 사용자가 와서 사용할수잇음,탈취
    - 해당 문제점을 보완하기 위한 방법으로는 어떤 것이 있을까요?
    - 유효기간을 짧게하여서 리프레쉬토큰 이용
    - 
3. **인증과 인가**
    - 인증과 인가가 무엇인지 각각 설명해 주세요.
    - 인증 - 사용자를 인증
    - 인가 - 권한에 대한 인가
    - 과제에서 구현한 Middleware는 인증에 해당하나요? 인가에 해당하나요? 그 이유도 알려주세요.
    - 인증  이유 : 사용자를 판별하는 과정이기때문
4. **Http Status Code**
    - 과제를 진행하면서 사용한 Http Status Code를 모두 나열하고, 각각이 의미하는 것과 어떤 상황에 사용했는지 작성해 주세요.
    - res.status(200) - 성공적 수행
    - res.status(201) - 성공적 수행하고 새로운 정보가 생김
    - res.status(400) - 클라이언트의 요청이 잘못됨
    - res.status(401) - 인증이 필요
    - res.status(403) - 권한부족
    - res.status(404) - 정보를 찾을수 없음
    - res.status(409) - 클라이언트가 입력한 정보가 이미 잇을때
    - res.status(500) - 서버가 요청을 처리 할수 없음
5. **리팩토링**
    - MySQL, Prisma로 개발했는데 MySQL을 MongoDB로 혹은 Prisma 를 TypeORM 로 변경하게 된다면 많은 코드 변경이 필요할까요? 주로 어떤 코드에서 변경이 필요한가요?
    - 네 /  모델,쿼리 
    - 만약 이렇게 DB를 변경하는 경우가 또 발생했을 때, 코드 변경을 보다 쉽게 하려면 어떻게 코드를 작성하면 좋을 지 생각나는 방식이 있나요? 있다면 작성해 주세요.
    - 1. 리포지토리 패턴 사용
      2. 서비스 계층 사용
      3. 의존성 주입 사용
      4. ORM/DB 독립적인 비즈니스 로직 작성
      5. 단위 테스트 및 통합 테스트

    - 
6. **API 명세서**
    - notion 혹은 엑셀에 작성하여 전달하는 것 보다 [swagger](https://swagger.io/) 를 통해 전달하면 장점은 무엇일까요?
    - Swagger는 코드나 주석에서 직접 API 문서를 자동으로 생성할 수 있습니다. 이는 개발자가 수동으로 문서를 업데이트하는 데 드는 시간과 노력을 크게 줄여 줍니다.
  
   erd cloud : https://www.erdcloud.com/d/LwezDtxDRnMoDM3PS
   api 명세서 : https://www.notion.so/9-37cf27ed43764adca13f07603b386a01 (두번쨰 보시면 잇습니다)
