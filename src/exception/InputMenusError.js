class InputMenusError extends Error {
  //Error를 상속

  static ERROR_MESSAGE =
    "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.";

  constructor() {
    super(InputMenusError.ERROR_MESSAGE); //부모(에러)의 생성자 호출
  }
}

export default InputMenusError;
