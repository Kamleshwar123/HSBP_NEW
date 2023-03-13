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
export function getLocalCity() {
    if (typeof window !== "undefined" && localStorage.getItem("hsbp-cityId")) {
      let cityId = localStorage.getItem("hsbp-cityId") || "";
      return cityId;
    }
    return ""
};
export function setLocalCity(cityId) {
    if (typeof window !== "undefined") {
      localStorage.setItem("hsbp-cityId", cityId);
    }
};
export function deleteLocalCity() {
    if (typeof window !== "undefined") {
      localStorage.removeItem("hsbp-cityId");
    }
};