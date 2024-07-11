declare module "yup" {
  interface StringSchema {
    isValidDocument(message?: string): StringSchema;
  }
}
