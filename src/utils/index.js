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