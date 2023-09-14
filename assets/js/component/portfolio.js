export class Portfolio {
  render() {
    const portfoliocontent = document.getElementById("content");
    portfoliocontent.innerHTML = `<header>
    <h2 class="h2 article-title">Portfolio</h2>
  </header>

  <section class="projects">
    <ul class="filter-list">
      <li class="filter-item">
        <button class="active" data-filter-btn>All</button>
      </li>

      <li class="filter-item">
        <button data-filter-btn>Web</button>
      </li>

      <li class="filter-item">
        <button data-filter-btn>Design</button>
      </li>
    </ul>

    <div class="filter-select-box">
      <button class="filter-select" data-select>
        <div class="select-value" data-selecct-value>
          Select category
        </div>

        <div class="select-icon">
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </button>

      <ul class="select-list">
        <li class="select-item">
          <button data-select-item>All</button>
        </li>

        <li class="select-item">
          <button data-select-item>Web</button>
        </li>

        <li class="select-item">
          <button data-select-item>Design</button>
        </li>

      </ul>
    </div>

    <ul class="project-list">
      <li
        class="project-item active"
        data-filter-item
        data-category="Design"
      >
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img
              src="./assets/images/project/project-1.png"
              alt="finance"
              loading="lazy"
            />
          </figure>

          <h3 class="project-title">Bìa sách</h3>

          <p class="project-category">Design</p>
        </a>
      </li>

      <li
        class="project-item active"
        data-filter-item
        data-category="Design"
      >
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img
              src="./assets/images/project/project-2.png"
              alt="orizon"
              loading="lazy"
            />
          </figure>

          <h3 class="project-title">Trung Thu Cho Em</h3>

          <p class="project-category">Design</p>
        </a>
      </li>

      <li
        class="project-item active"
        data-filter-item
        data-category="Design"
      >
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img
              src="./assets/images/project/project-3.png"
              alt="fundo"
              loading="lazy"
            />
          </figure>

          <h3 class="project-title">Thứ 7 tình nguyện</h3>

          <p class="project-category">Design</p>
        </a>
      </li>

      <li
        class="project-item active"
        data-filter-item
        data-category="Design"
      >
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img
              src="./assets/images/project/project-4.png"
              alt="dsm."
              loading="lazy"
            />
          </figure>

          <h3 class="project-title">Card visit</h3>

          <p class="project-category">Design</p>
        </a>
      </li>

      <li
        class="project-item active"
        data-filter-item
        data-category="Web"
      >
        <a href="#">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>

            <img
              src="./assets/images/project/project-5.png"
              alt="metaspark"
              loading="lazy"
            />
          </figure>

          <h3 class="project-title">Tự hào Việt Nam</h3>

          <p class="project-category">Web</p>
        </a>
      </li>

    </ul>
  </section>`;
  }
}
