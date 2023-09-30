import { QuickLoginRequest } from "@/types/account";
import http from "../httpServices";

const relative_path = "myrecharge/account/";

export async function quick_register(form: QuickLoginRequest) {
  return http.post(relative_path + "quick-register", form);
}
