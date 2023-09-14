export class Contact {
  render() {
    const Contactcontent = document.getElementById("content");
    Contactcontent.innerHTML = `<section>
    <header>
      <h2 class="h2 article-title">Contact</h2>
    </header>
    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form action="#" class="form" data-form>
        <div class="input-wrapper">
          <input
            id="name"
            type="text"
            name="fullname"
            class="form-input"
            placeholder="Full name"
            required  
            data-form-input
          />

          <input
            id="email"
            type="email"
            name="email"
            class="form-input"
            placeholder="Email address"
            required
            data-form-input
          />
        </div>

        <textarea
          id="message"
          name="message"
          class="form-input"
          placeholder="Your Message"
          required
          data-form-input
        ></textarea>

        <button class="form-btn" type="submit" id="btn">
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>`;

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const sendbtn = document.getElementById("btn");
  }
}
