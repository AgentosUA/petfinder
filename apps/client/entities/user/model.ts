import { makeAutoObservable } from 'mobx';

class UserModel {
  public isAuthorized = false;

  constructor() {
    makeAutoObservable(this);

    const isAuthorized = true;

    if (isAuthorized) {
      this.setAuthorized(isAuthorized);
    }
  }

  async getInfo() {
    const response = await fetch('/api/user/info');
    const data = await response.json();

    return data;
  }

  setAuthorized = (isAuthorized: boolean) => {
    this.isAuthorized = isAuthorized;
  };

  logout = () => {
    this.setAuthorized(false);
  };
}

const User = new UserModel();

export { User, UserModel };
