export interface TestCredential {
  username: string;
  password: string;
}

export interface TestUser {
  email: string;
  name: string;
}

export interface TestDataFixture {
  baseUrl: string;
  users: TestUser[];
  credentials: TestCredential[];
}
