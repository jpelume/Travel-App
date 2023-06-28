export interface EmailType {
  email: string;
}

export interface LoginType extends EmailType {
  password: string;
}
