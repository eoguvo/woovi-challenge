import * as yup from "yup";

import isValidDocument from "./isValidDocument";

yup.addMethod(yup.string, "isValidDocument", isValidDocument);

export default yup;
