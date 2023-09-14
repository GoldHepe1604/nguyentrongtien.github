export class About {
  render() {
    const Aboutcontent = document.getElementById("content");
    Aboutcontent.innerHTML = ` <header>
    <h2 class="h2 article-title">About me</h2>
  </header>

  <section class="about-text">
    <p>
      Tôi là học sinh lớp 12 với niềm đam mê lập trình web, thiết kế và
      thi đấu lập trình, quản lý cơ sở dữ liệu. Tôi có kiến thức về
      HTML, CSS, JavaScript và kỹ năng thiết kế đồ họa. Tôi thích tạo ra
      các trang web đẹp và dễ sử dụng, cũng như tham gia thi đấu lập
      trình để giải quyết các bài toán phức tạp. Tôi là người nhiệt
      huyết, luôn tìm kiếm cơ hội để học hỏi và phát triển kỹ năng trong
      lĩnh vực công nghệ.
    </p>
  </section>

  <!--
  - service
-->

  <section class="service">
    <h3 class="h3 service-title">What i'm doing</h3>

    <ul class="service-list">
      <li class="service-item">
        <div class="service-icon-box">
          <img
            src="./assets/images/icon/icon-design.svg
        "
            alt="design icon"
            width="40"
          />
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Web design</h4>

          <p class="service-item-text">
            Thiết kế hiện đại và chất lượng cao được thực hiện ở mức độ
            trung bình khá
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img
            src="./assets/images/icon/icon-dev.svg"
            alt="Web development icon"
            width="40"
          />
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Web development</h4>

          <p class="service-item-text">
            Phát triển các trang web chất lượng ở mức độ trung bình khá
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img
            src="./assets/images/icon/design.png"
            alt="Design icon"
            width="40"
          />
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Design</h4>

          <p class="service-item-text">
            Có kĩ năng sử dụng các phần mềm cơ bản như Adobe
            illustrator, Photoshop và biết ứng dụng các AI vào sản phẩm
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img
            src="./assets/images/icon/math.png"
            alt="math icon"
            width="40"
          />
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Competitive Programming</h4>
          <p class="service-item-text">
            Có khả năng giải các bài toán trung bình, khó bằng nhiều
            ngôn ngữ như Python, C++, JavaScript
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img
            src="./assets/images/icon/database.png"
            alt="database icon"
            width="40"
          />
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">Database Management</h4>
          <p class="service-item-text">
            Có khả năng quản lý cơ sở dữ liệu bằng sử dụng các công cụ
            trực tuyến như Firebase, SQL và nhiều công nghệ khác.
          </p>
        </div>
      </li>

      <li class="service-item">
        <div class="service-icon-box">
          <img
            src="./assets/images/icon/office.png"
            alt="database icon"
            width="40"
          />
        </div>

        <div class="service-content-box">
          <h4 class="h4 service-item-title">
            Proficient Office Skills
          </h4>
          <p class="service-item-text">
            Thành thạo nhiều ứng dụng tin học văn phòng như Excel, Word,
            PowerPoint, và nhiều ứng dụng khác được sử dụng trong môi
            trường văn phòng.
          </p>
        </div>
      </li>
    </ul>
  </section>

  <div class="modal-container" data-modal-container></div>

  <!--
  - clients
-->

  <section class="clients">
    <h3 class="h3 clients-title">Clients</h3>

    <ul class="clients-list has-scrollbar">
      <li class="clients-item">
        <h1 style="color: #e4e0e0">Chưa có khách hàng</h1>
      </li>
    </ul>
  </section>`;
  }
}
