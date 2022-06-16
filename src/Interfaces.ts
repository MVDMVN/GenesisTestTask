interface IUser {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  [propName: string]: any;
}

export default IUser;