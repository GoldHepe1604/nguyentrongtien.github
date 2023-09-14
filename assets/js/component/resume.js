export class Resume {
  render() {
    const Resumecontent = document.getElementById("content");
    Resumecontent.innerHTML = `<header>
    <h2 class="h2 article-title">Resume</h2>
  </header>

  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <ion-icon name="book-outline"></ion-icon>
      </div>

      <h3 class="h3">Education</h3>
    </div>

    <ol class="timeline-list">
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">
          Trường THPT Nguyễn Bĩnh Khiêm
        </h4>

        <span>2021-Present</span>

        <p class="timeline-text">
          Làm quen được nhiều bạn mới, học hỏi được nhiều kĩ năng hơn, rèn luyện được tin thần tự giác, có trách nhiệm với bản thân hơn
        </p>
      </li>

      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">Trường học công nghệ MINDX</h4>

        <span>2022-Present</span>

        <p class="timeline-text">
         Học hỏi được nhiều kĩ năng chuyên môn như html, css, js, firebase, boostrap, ...
        </p>
      </li>
    </ol>
  </section>

  <section class="timeline">
    <div class="title-wrapper">
      <div class="icon-box">
        <ion-icon name="briefcase-outline"></ion-icon>
      </div>

      <h3 class="h3">Experience</h3>
    </div>

    <ol class="timeline-list">
      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">Design</h4>

        <span>2020 — Present</span>

        <p class="timeline-text">
         Tham gia các cuộc thi thiết kế online, thiết kế chính cho hình ảnh của câu lạc bộ xanh "Hạt Giấy Yêu Thương, thích tự tạo các sản phẩm thuyết trình"
        </p>
      </li>

      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">Web designer</h4>

        <span>2021 — Present</span>

        <p class="timeline-text">
          Tự thiết kế một số trang web cá nhân, học hỏi nhiều kĩ năng lập trình web
        </p>
      </li>

      <li class="timeline-item">
        <h4 class="h4 timeline-item-title">Programming contestant</h4>

        <span>2022 — Present</span>

        <p class="timeline-text">
            Tham gia nhiều cuộc thi lập trình thi đấu, có một câu lạc bộ lập trình riêng 
            <a href="https://www.facebook.com/groups/1249689579065676" style="color: #C2A756; font-size:1.5em; margin-left:5em;"><b>PCP</b></a>
        </p>
      </li>
    </ol>
  </section>
  <section class="certificate">

          <h3 class="h3 certificate-title">Certificate</h3>

          <ul class="certificate-list has-scrollbar">

            <li class="certificate-item">
              <h3 style="color: #e4e0e0">Chưa có chứng chỉ</h3>
            </li>

          </ul>

        </section>`;
  }
}
