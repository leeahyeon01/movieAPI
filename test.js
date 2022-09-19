// 함수
function OldConstructor(id, name, type) {
  this.id = id;
  this.name = name;
  this.type = type;
}

const oldInstance = new OldConstructor(1, "이상해씨", "풀");
console.log(oldInstance);

//class안에 객체가 !
class NewConstructor {
  //constructor은 인스턴스를 생성하고 초기화 하기 위한 특수한 메서드 이다!
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const newInstance = new NewConstructor(4, "파이리", "불");
console.log(newInstance);
