interface IUser<T extends React.ComponentType<any>> {
  id: number;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  website?: string;
  [propName: string]: any;
  component?: T;
  componentProps?: React.ComponentProps<T>;
}

export default IUser;