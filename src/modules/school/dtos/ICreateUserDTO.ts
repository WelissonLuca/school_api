interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  teacher?: boolean;
}

export { ICreateUserDTO };
