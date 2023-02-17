export function onylMobileInput() {
    let mobile = window.document.getElementById("onlyMobile");
    if (mobile) {
        mobile.addEventListener("input", function () {
            if (/\D/g.test(this.value)) {
                this.value = this.value.replace(/\D/g, "");
            }
        })
    }
}
export function isNumberOnly(evt) {
    evt = (evt) ? evt : window?.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault();
    }
    return true;
}
export function getToken() {
    if (typeof window !== "undefined" && localStorage.getItem("hsbp-token")) {
      let token = localStorage.getItem("hsbp-token");
      return token;
    }
};
export function setToken(token) {
    if (typeof window !== "undefined") {
      localStorage.setItem("hsbp-token", token);
    }
};
export function deleteToken(token) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("hsbp-token");
    }
};