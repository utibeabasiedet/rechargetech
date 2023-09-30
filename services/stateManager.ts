import { hookstate, useHookstate } from "@hookstate/core";

interface StateManager {
  fullname: string;
  phoneNumber: string;
  emailAddress: string;
  applicationName: string;
}

const state = hookstate<StateManager>({
  applicationName: "My Recharge NG",
  fullname: "",
  phoneNumber: "",
  emailAddress: "",
});

export default function useStateManager() {
  return useHookstate(state);
}
