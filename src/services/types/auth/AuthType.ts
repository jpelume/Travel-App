export interface EmailType {
  email: string;
}

export interface LoginType extends EmailType {
  password: string;
}

export interface UpdateProfileType {
  data: {
    name: string;
    gender: string;
    weight: string;
    height: string;
    userType: string;
  };
  id: string;
}
