export class AI {
  render() {
    const aicontent = document.getElementById("content");
    aicontent.innerHTML = `<header>
      <h2 class="h2 article-title">AI</h2>
    </header>
  
    <section class="projects">
      <ul class="filter-list">
        <li class="filter-item">
          <button class="active" data-filter-btn>All</button>
        </li>
  
        <li class="filter-item">
          <button data-filter-btn>Chat box</button>
        </li>
  
        <li class="filter-item">
          <button data-filter-btn>Code</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Image-Video</button>
        </li>

        <li class="filter-item">
          <button data-filter-btn>Music</button>
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
          <a href="https://openfuture.ai">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
  
              <img
                src="./assets/images/AI/ai-1.png"
                alt="finance"
                loading="lazy"
              />
            </figure>
  
            <h3 class="project-title">Từ điển AI (OpenFuture)</h3>
  
            <p class="project-category">All</p>
          </a>
        </li>
  
        <li
          class="project-item active"
          data-filter-item
          data-category="Design"
        >
          <a href="https://gptfy.co/home">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
  
              <img
                src="./assets/images/AI/ai-2.png"
                alt="orizon"
                loading="lazy"
              />
            </figure>
  
            <h3 class="project-title">Botmate</h3>
  
            <p class="project-category">Chat box</p>
          </a>
        </li>
  
        <li
          class="project-item active"
          data-filter-item
          data-category="Design"
        >
          <a href="https://app.artflow.ai">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
  
              <img
                src="./assets/images/AI/ai-3.png"
                alt="fundo"
                loading="lazy"
              />
            </figure>
  
            <h3 class="project-title">Art flow</h3>
  
            <p class="project-category">Image-Video</p>
          </a>
        </li>
  
        <li
          class="project-item active"
          data-filter-item
          data-category="Design"
        >
          <a href="https://www.bandlab.com/">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
  
              <img
                src="./assets/images/AI/ai-4.png"
                alt="dsm."
                loading="lazy"
              />
            </figure>
  
            <h3 class="project-title">BandLab</h3>
  
            <p class="project-category">Music</p>
          </a>
        </li>
  
      </ul>
    </section>`;
  }
}
