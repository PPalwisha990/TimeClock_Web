import { log } from "../commons/Common";
import Toast from "../componnets/Toast";
import { login } from "../connectivity/Api";
import {
  saveCredetntials,
  saveLoginTime,
  saveUser,
} from "../helpers/LocalStorageHelper";

export const onLoginPressed = async (
  domain,
  username,
  password,
  onSetLoading,
  onSetUser
) => {
  try {
    let response = await login(domain, username, password);
    onSetLoading(false);
    if (response.includes("INACTIVE")) {
      Toast.warning("User is Inactive!");
    } else if (response.includes("AUTHFAIL")) {
      Toast.warning("Invalid username, password or domain!");
    } else if (response.includes("AUTHSUCCESS")) {
      let credentialsSaved = await saveCredetntials({
        username,
        password,
      });
      let userData = JSON.parse(response);
      log("Saving user: ", userData);
      let userSaved = await saveUser(userData[0]);
      if (credentialsSaved && userSaved) {
        saveLoginTime();
        //saveLogs(userData[0]);
        onSetUser(userData[0]);
        //signInFirebase();
      } else {
        Toast.error("Something went wrong!");
      }
    }
  } catch (ex) {
    onSetLoading(false);
    log("error== ", ex);
    Toast.error("Something went wronggggg!");
  }
};
