function auth() {
  let user;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("hsbp-UserData") && localStorage.getItem("hsbp-UserData") != null ? localStorage.getItem("hsbp-UserData") : "";
  }
  return user
}
export default auth;
