// what is class?
// state -> action

type Role = "manager" | "member"
class Developer {
  private name: string
  private role: Role

  constructor(name: string, role: Role) {
    this.name = name
    this.role = role
  }

  get developerName() {
    return this.name
  }

  set changeName(afterName: string) {
    this.name = afterName
  }

  introduceYourSelf() {
    console.log(`Hello I am ${this.name}`)
  }

  coding() {
    console.log(`${this.developerName} is coding now`)
  }

  testing() {
    console.log(`${this.developerName} is testing app`)
  }

  meeting() {
    if (this.role === "manager") {
      console.log(`${this.name} sets a meeting`)
    } else {
      console.log("権限がありません")
    }
  }
}

class BackendDeveloper extends Developer {
  private language: string
  constructor(name: string, role: Role, language: string) {
    super(name, role)
    this.language = language
  }

  coding() {
    console.log(`${this.developerName} is coding by ${this.language}`)
  }
}

class FrontendDeveloper extends Developer {
  private fw: string
  constructor(name: string, role: Role, fw: string) {
    super(name, role)
    this.fw = fw
  }

  coding() {
    console.log(`${this.developerName} is coding by ${this.fw}`)
  }
}

const suzuki = new FrontendDeveloper("suzuki", "member", "Vue")
const morita = new FrontendDeveloper("morita", "member", "Java")
const yamada = new FrontendDeveloper("yamada", "member", "React")

type SaAMember = FrontendDeveloper | BackendDeveloper
class SaA {
  static TEAM_NAME = "start-and-action"
  private members: SaAMember[]

  constructor(members: SaAMember[]) {
    this.members = members
  }

  introduceOurMember() {
    this.members.forEach(member => console.log(member.introduceYourSelf()))
  }

  set addMember(newMember: SaAMember) {
    this.members.push(newMember)
  }
}

const saa = new SaA([suzuki, morita, yamada])
saa.introduceOurMember()
saa.addMember = new FrontendDeveloper("yamada", "member", "JavaScript")
console.log(SaA.TEAM_NAME)
