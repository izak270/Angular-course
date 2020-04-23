export class UserSevice {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];
  activeToInactive = {'a': 0};
  inactiveToActive = {'a': 0};

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  CounterService(active) {
    if (active === 1) {
      this.activeToInactive.a++;
    } else {
      this.inactiveToActive.a++;
    }
  }
}
