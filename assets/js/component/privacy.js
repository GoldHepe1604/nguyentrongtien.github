export class Privacy {
  render() {
    const privacycontent = document.getElementById("privacy");
    privacycontent.innerHTML = `
    <div id="password"><input
            type="password"
            name="fullname"
            class="form-input"
            placeholder="Nhập mật khẩu"
            required
            data-form-password
          /></div>
    `;
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" || event.keyCode === 27) {
        const privacycontent = document.getElementById("privacy");
        privacycontent.innerHTML = ``;
      }
    });
  }
}
