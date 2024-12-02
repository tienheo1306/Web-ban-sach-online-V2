function validatePhoneNumber(phone) {
  // Kiểm tra nếu số điện thoại có đúng 10 ký tự và bắt đầu bằng số 0
  const regex = /^0\d{9}$/;
  return regex.test(phone);
}
function validateName(name) {
  const regex = /^[\p{L}\s.,\-'"()\[\]{}0-9]+$/u;
  return regex.test(name);
}
function validatePublishedYear(yearInput) {
  const currentYear = new Date().getFullYear();
  if (!/^\d{4}$/.test(yearInput)) {
    return false;
  }
  if (parseInt(yearInput) > currentYear) {
    alert("Năm xuất bản phải nhỏ hơn hoặc bằng năm hiện tại.");
    return false;
  }
  return true;
}
// Hàm kiểm tra giá sản phẩm
function validatePrice(priceInput) {
  if (!/^\d+(\.\d+)?$/.test(priceInput) || parseFloat(priceInput) <= 0) {
    return false;
  }
  return true;
}
// ===============================================================
//Xuan Mai
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".taskbar a");
  const sections = document.querySelectorAll(".content");

  // ẩn, hiện section
  function showSection(sectionId) {
    sections.forEach((section) => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
  }

  // click
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const page = this.getAttribute("data-page");
      showSection(page);

      links.forEach((link) => link.classList.remove("selected"));
      this.classList.add("selected");
    });
  });

  showSection("products");
});
// ---------------------------------------------------
//Thêm sửa xóa chi tiết sản phẩm
// Tải danh sách sản phẩm mặc định chỉ khi localStorage chưa có dữ liệu
function loadDefaultProducts() {
  if (!localStorage.getItem("products")) {
    const defaultProducts = [
      {
        id: 1,
        status: "Bị ẩn",
        name: "Bài tập toán 1",
        img: "/assets/img/book/giaokhoagiaotrinh/baitaptoan1.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Giáo Dục Việt Nam",
        author: "GS. TS. Lê Anh Vinh (chủ biên)",
        isBestSeller: true,
        desc: "Sách tiểu học",
      },
      {
        id: 2,
        status: "Bị ẩn",
        name: "Bộ đề kiểm tra đánh giá năng lực học sinh lớp 1",
        img: "/assets/img/book/giaokhoagiaotrinh/bodekiemtradanhgianangluchsl1.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Giáo Dục Việt Nam",
        publishedYear: 2019,
        author: "Nguyễn Thị Minh Thu (chủ biên)",
        isBestSeller: true,
        desc: "",
      },
      {
        id: 3,
        status: "Hoạt động",
        name: "Củng cố ôn luyện hóa học",
        img: "/assets/img/book/giaokhoagiaotrinh/cungcoonluyenhoahoc.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Giáo Dục Việt Nam",
        publishedYear: 2020,
        author: "Trần Thanh Hải",
        isBestSeller: true,
        desc: "",
      },
      {
        id: 4,
        status: "Hoạt động",
        name: "Giáo dục công dân 9",
        img: "/assets/img/book/giaokhoagiaotrinh/giaoduccongdan9.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Giáo Dục",
        publishedYear: 2018,
        author: "Lê Văn Hùng",
        desc: "",
      },
      {
        id: 5,
        status: "Hoạt động",
        name: "Giáo dục thể chất 1",
        img: "/assets/img/book/giaokhoagiaotrinh/giaoducthechat1.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Thể Dục Thể Thao",
        publishedYear: 2017,
        author: "Nguyễn Văn Bình",
        desc: "",
      },
      {
        id: 6,
        status: "Hoạt động",
        name: "Giáo trình đàm phán quốc tế",
        img: "/assets/img/book/giaokhoagiaotrinh/giaotrinhdamphanquocte.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Kinh Tế Quốc Dân",
        publishedYear: 2021,
        author: "Lê Anh Tuấn",
        desc: "",
      },
      {
        id: 7,
        status: "Hoạt động",
        name: "Khoa học 4",
        img: "/assets/img/book/giaokhoagiaotrinh/khoahoc4.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Giáo Dục",
        publishedYear: 2020,
        author: "Nguyễn Hữu Đức",
        desc: "",
      },
      {
        id: 8,
        status: "Hoạt động",
        name: "Tập làm văn 2",
        img: "/assets/img/book/giaokhoagiaotrinh/taplamvan2.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Giáo Dục Việt Nam",
        publishedYear: 2019,
        author: "Lê Thị Thu Hà",
        desc: "",
      },
      {
        id: 9,
        status: "Hoạt động",
        name: "Tự học toán 11 tập 1",
        img: "/assets/img/book/giaokhoagiaotrinh/taplamvan2.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Đại Học Quốc Gia",
        publishedYear: 2022,
        author: "Phạm Văn Thanh",
        desc: "",
      },
      {
        id: 10,
        status: "Hoạt động",
        name: "Vở chính tả lớp 2",
        img: "/assets/img/book/giaokhoagiaotrinh/vochinhtalop2.webp",
        category: "Sách Giáo Khoa - Giáo Trình",
        price: 200000,
        publisher: "NXB Giáo Dục Việt Nam",
        publishedYear: 2016,
        author: "Nguyễn Thị Thu Thủy",
        desc: "",
      },
      {
        id: 22,
        status: "Hoạt động",
        name: "Frieren - Pháp sư tiễn táng - Tập 12",
        img: "/assets/img/book/mangacomic/frieren_phap_su_tien_tang_ban_thuong_bia_tap_12.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Kim Đồng",
        author: "Kanehito Yamada, Tsukasa Abe",
        publishedYear: 2023,
        desc: "",
      },
      {
        id: 23,
        status: "Hoạt động",
        name: "Haikyuu - Tập 41",
        img: "/assets/img/book/mangacomic/haikyutap41.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Trẻ",
        author: "Haruichi Furudate",
        publishedYear: 2021,
        desc: "",
      },
      {
        id: 24,
        status: "Hoạt động",
        name: "Haikyuu - Tập 42",
        img: "/assets/img/book/mangacomic/haikyutap42.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Trẻ",
        author: "Haruichi Furudate",
        publishedYear: 2021,
        desc: "",
      },
      {
        id: 25,
        status: "Hoạt động",
        name: "Haikyuu - Tập 45",
        img: "/assets/img/book/mangacomic/haikyutap45.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Trẻ",
        author: "Haruichi Furudate",
        publishedYear: 2022,
        desc: "",
      },
      {
        id: 26,
        status: "Hoạt động",
        name: "Historie - Tập 11",
        img: "/assets/img/book/mangacomic/historietap11.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Kim Đồng",
        author: "Hitoshi Iwaaki",
        publishedYear: 2020,
        desc: "",
      },
      {
        id: 27,
        status: "Hoạt động",
        name: "Sakamoto Day - Tập 7",
        img: "/assets/img/book/mangacomic/sakamotodaytap7.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Kim Đồng",
        author: "Yuto Suzuki",
        publishedYear: 2023,
        desc: "",
      },
      {
        id: 28,
        status: "Hoạt động",
        name: "Sakamoto Day - Tập 9",
        img: "/assets/img/book/mangacomic/sakamotodaytap9.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Kim Đồng",
        author: "Yuto Suzuki",
        publishedYear: 2023,
        desc: "",
      },
      {
        id: 29,
        status: "Hoạt động",
        name: "Spy x Family - Tập 10",
        img: "/assets/img/book/mangacomic/spyxfamily_bia_tap_10.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Kim Đồng",
        author: "Tatsuya Endo",
        publishedYear: 2023,
        desc: "",
      },
      {
        id: 30,
        status: "Hoạt động",
        name: "Wind Breaker - Tập 1",
        img: "/assets/img/book/mangacomic/windbreakertap1.webp",
        category: "Manga, Comic",
        price: 200000,
        publisher: "NXB Trẻ",
        author: "Satoru Nii",
        publishedYear: 2021,
        desc: "",
      },
      {
        id: 31,
        status: "Hoạt động",
        name: "120 Bài Luận Tiếng Anh",
        img: "/assets/img/book/ngoaingu/120bailuantienganh.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Đại Học Quốc Gia Hà Nội",
        publishedYear: 2020,
        author: "Nguyễn Văn A",
        desc: "",
      },
      {
        id: 32,
        status: "Hoạt động",
        name: "420 Động Từ Bất Quy Tắc",
        img: "/assets/img/book/ngoaingu/420dongtubatquytac.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Giáo Dục Việt Nam",
        publishedYear: 2019,
        author: "Trần Văn B",
        desc: "",
      },
      {
        id: 33,
        status: "Hoạt động",
        name: "Giáo Trình Hán Ngữ - Tập 2 - Quyển 2",
        img: "/assets/img/book/ngoaingu/giaotrinhhanngutap2quyen2.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Thế Giới",
        publishedYear: 2021,
        author: "Lý Văn C",
        desc: "",
      },
      {
        id: 34,
        status: "Hoạt động",
        name: "Giáo Trình Hán Ngữ - Tập 3 - Quyển 1",
        img: "/assets/img/book/ngoaingu/giaotrinhhanngutap3quyen1.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Văn Học",
        publishedYear: 2021,
        author: "Ngô Văn D",
        desc: "",
      },
      {
        id: 35,
        status: "Hoạt động",
        name: "Kỳ Thi Năng Lực Nhật Ngữ - JLPT 3",
        img: "/assets/img/book/ngoaingu/kythinanglucnhatngu-jlpt3.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Khoa Học",
        publishedYear: 2022,
        author: "Hà Văn E",
        desc: "",
      },
      {
        id: 36,
        status: "Hoạt động",
        name: "Ngữ Nghĩa Học Tiếng Anh",
        img: "/assets/img/book/ngoaingu/ngunghiahoctienganh.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Tổng Hợp",
        publishedYear: 2021,
        author: "Lê Thị F",
        desc: "",
      },
      {
        id: 37,
        status: "Hoạt động",
        name: "Sổ Tay Ngữ Pháp Tiếng Anh",
        img: "/assets/img/book/ngoaingu/sotaynguphaptienganh.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Giáo Dục Việt Nam",
        publishedYear: 2020,
        author: "Nguyễn Văn G",
        desc: "",
      },
      {
        id: 38,
        status: "Hoạt động",
        name: "Sổ Tay Tiếng Nhật Thương Mại",
        img: "/assets/img/book/ngoaingu/giaotrinhhanngutap2quyen2.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Kinh Tế",
        publishedYear: 2019,
        author: "Phạm Văn H",
        desc: "",
      },
      {
        id: 39,
        status: "Hoạt động",
        name: "Trạng Từ Trong Tiếng Anh",
        img: "/assets/img/book/ngoaingu/trangtutrongtienganh.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Văn Hóa",
        publishedYear: 2020,
        author: "Trần Thị I",
        desc: "",
      },
      {
        id: 40,
        status: "Hoạt động",
        name: "Từ Vựng Tiếng Nhật Cần Thiết",
        img: "/assets/img/book/ngoaingu/tuvungtiengnhatcanthiet.webp",
        category: "Sách Ngoại Ngữ",
        price: 200000,
        publisher: "NXB Đại Học Quốc Gia",
        publishedYear: 2021,
        author: "Đặng Văn J",
        desc: "",
      },
      {
        id: 41,
        status: "Hoạt động",
        name: "Cẩm Nang Canva",
        img: "/assets/img/book/phattrienbanthan/camnangcanva.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        publisher: "NXB Phụ Nữ Việt Nam",
        publishedYear: 2020,
        author: "Nguyễn Hồng Phương",
        desc: "",
      },
      {
        id: 42,
        status: "Hoạt động",
        name: "Đánh Bại Nỗi Lo",
        img: "/assets/img/book/phattrienbanthan/danhbainoilo.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        publisher: "NXB Lao Động",
        publishedYear: 2021,
        author: "Trần Văn Bình",
        desc: "",
      },
      {
        id: 43,
        status: "Hoạt động",
        name: "Đánh Thức Sức Mạnh Nội Tâm",
        img: "/assets/img/book/phattrienbanthan/danhthucsucmanhnoitam.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        publisher: "NXB Tổng Hợp TP.HCM",
        publishedYear: 2022,
        author: "Lê Minh Trí",
        desc: "",
      },
      {
        id: 44,
        status: "Hoạt động",
        name: "Human Design",
        img: "/assets/img/book/phattrienbanthan/humandesign.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        publisher: "NXB Trẻ",
        publishedYear: 2021,
        author: "Jessica Johnson",
        desc: "",
      },
      {
        id: 45,
        status: "Hoạt động",
        name: "Không Gì Là Không Thể",
        img: "/assets/img/book/phattrienbanthan/khonggilakhongthe.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        desc: "",
        publisher: "NXB Thế Giới",
        author: "John Doe",
        publishedYear: 2022,
      },
      {
        id: 46,
        status: "Hoạt động",
        name: "Không Sợ Thất Bại - Chỉ Sợ Bạn Nuông Chiều Bản Thân Chưa Nỗ Lực Hết Mình",
        img: "/assets/img/book/phattrienbanthan/khongsothatbai-chisobannuongchieubanthanchuanoluchetminh.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        desc: "",
        publisher: "NXB Văn Hóa",
        author: "Nguyễn Văn A",
        publishedYear: 2021,
      },
      {
        id: 47,
        status: "Hoạt động",
        name: "Nghịch Lý Của Thành Công",
        img: "/assets/img/book/phattrienbanthan/nghichlycuathanhcong.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        desc: "",
        publisher: "NXB Học Hỏi",
        author: "Trần Thị B",
        publishedYear: 2020,
      },
      {
        id: 48,
        status: "Hoạt động",
        name: "Thao Túng Tâm Lý Đám Đông",
        img: "/assets/img/book/phattrienbanthan/thaotungtamlydamdong.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        desc: "",
        publisher: "NXB Tri Thức",
        author: "Nguyễn Minh C",
        publishedYear: 2019,
      },
      {
        id: 49,
        status: "Hoạt động",
        name: "Tư Duy Nhanh Và Chậm",
        img: "/assets/img/book/phattrienbanthan/tuduynhanhvacham-biacung.webp",
        category: "Sách Phát Triển Bản Thân",
        price: 200000,
        desc: "",
        publisher: "NXB Kinh Tế",
        author: "Daniel Kahneman",
        publishedYear: 2018,
      },
      {
        id: 50,
        status: "Hoạt động",
        name: "Bách Khoa Thiếu Nhi Vũ Trụ",
        img: "/assets/img/book/sachthieunhi/bachkhoathieunhivutru.webp",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "NXB Thiếu Nhi",
        author: "Jane Smith",
        publishedYear: 2023,
      },
      {
        id: 51,
        status: "Hoạt động",
        name: "Chiếc Đũa Thần",
        img: "/assets/img/book/sachthieunhi/chiecduathan.jpg",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Kim Đồng",
        author: "Nguyễn Nhật Ánh",
        publishedYear: 2020,
      },
      {
        id: 52,
        status: "Hoạt động",
        name: "Chiếc Khăn Quàng Của Hụt Nhỏ",
        img: "/assets/img/book/sachthieunhi/chieckhanquangcuahuounho.jpg",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Trẻ",
        author: "Lý Lan",
        publishedYear: 2018,
      },
      {
        id: 53,
        status: "Hoạt động",
        name: "Chú Thỏ Tinh Khôn",
        img: "/assets/img/book/sachthieunhi/chuthotinhkhon.jpg",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Kim Đồng",
        author: "Vũ Quang Hưng",
        publishedYear: 2019,
      },
      {
        id: 54,
        status: "Hoạt động",
        name: "Cổ Tích Của Ba",
        img: "/assets/img/book/sachthieunhi/cotichcuaba.webp",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Văn Hóa Sài Gòn",
        author: "Đoàn Tuấn",
        publishedYear: 2021,
      },
      {
        id: 55,
        status: "Hoạt động",
        name: "Nàng Tiên Bóng Đêm",
        img: "/assets/img/book/sachthieunhi/nangtienbongdem.jpg",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Phụ Nữ",
        author: "Trần Minh Quân",
        publishedYear: 2020,
      },
      {
        id: 56,
        status: "Hoạt động",
        name: "Ngôi Nhà Gần Tấm Gương",
        img: "/assets/img/book/sachthieunhi/ngoinhangantamguong.webp",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Kim Đồng",
        author: "Nguyễn Thị Ngọc Bích",
        publishedYear: 2021,
      },
      {
        id: 57,
        status: "Hoạt động",
        name: "Sói Xám Chó Trắng",
        img: "/assets/img/book/sachthieunhi/soixamchotrang.webp",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Hội Nhà Văn",
        author: "Trần Vĩnh",
        publishedYear: 2022,
      },
      {
        id: 58,
        status: "Hoạt động",
        name: "Truyện Cổ Tích Thế Giới",
        img: "/assets/img/book/sachthieunhi/truyencotichthegioi.webp",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Thanh Niên",
        author: "Trương Thị Vân",
        publishedYear: 2020,
      },
      {
        id: 59,
        status: "Hoạt động",
        name: "Ước Mơ Của Sếu",
        img: "/assets/img/book/sachthieunhi/uocmocuaseu.webp",
        category: "Sách Thiếu Nhi",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Kim Đồng",
        author: "Lê Quang",
        publishedYear: 2021,
      },
      {
        id: 60,
        status: "Hoạt động",
        name: "Bóng Tối Giữa Chúng Ta",
        img: "/assets/img/book/vanhocnuocngoai/bongtoigiuachungta.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà Xuất Bản Văn Học",
        author: "John Grisham",
        publishedYear: 2019,
      },
      {
        id: 61,
        status: "Hoạt động",
        name: "Các Khía Cạnh Của Phật Giáo",
        img: "/assets/img/book/vanhocnuocngoai/cackhiacanhcuaphatgiao.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Văn Học",
        author: "Tác giả A",
        publishedYear: 2020,
      },
      {
        id: 62,
        status: "Hoạt động",
        name: "Đạo Đức Học Của ARISTOTE",
        img: "/assets/img/book/vanhocnuocngoai/daoduchoccuaaristote.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Tri Thức",
        author: "Aristote",
        publishedYear: 2019,
      },
      {
        id: 63,
        status: "Hoạt động",
        name: "Hiến Tặng",
        img: "/assets/img/book/vanhocnuocngoai/hientang.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Đà Nẵng",
        author: "Tác giả B",
        publishedYear: 2021,
      },
      {
        id: 64,
        status: "Hoạt động",
        name: "Những Con Cá Voi 52 Hertz",
        img: "/assets/img/book/vanhocnuocngoai/nhungconcavoi52hertz.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Thanh Niên",
        author: "Tác giả C",
        publishedYear: 2020,
      },
      {
        id: 65,
        status: "Hoạt động",
        name: "Những Tuyệt Tác Của Shakespeare",
        img: "/assets/img/book/vanhocnuocngoai/nhungtuyettaccuashakspeare.jpg",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Văn Học",
        author: "William Shakespeare",
        publishedYear: 2018,
      },
      {
        id: 66,
        status: "Hoạt động",
        name: "Romeo And Juliet",
        img: "/assets/img/book/vanhocnuocngoai/romeoandjuliet.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Kim Đồng",
        author: "William Shakespeare",
        publishedYear: 2020,
      },
      {
        id: 67,
        status: "Hoạt động",
        name: "Thánh Giá Rỗng",
        img: "/assets/img/book/vanhocnuocngoai/thanhgiarong.jpg",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Thanh Niên",
        author: "Tác giả D",
        publishedYear: 2019,
      },
      {
        id: 68,
        status: "Hoạt động",
        name: "The Little Prince",
        img: "/assets/img/book/vanhocnuocngoai/thelittleprince.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Văn Học",
        author: "Antoine de Saint-Exupéry",
        publishedYear: 2017,
      },
      {
        id: 69,
        status: "Hoạt động",
        name: "Triết Học Đức",
        img: "/assets/img/book/vanhocnuocngoai/triethocduc.webp",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Tri Thức",
        author: "Friedrich Nietzsche",
        publishedYear: 2016,
      },
      {
        id: 70,
        status: "Hoạt động",
        name: "Trường Ca Achilles",
        img: "/assets/img/book/vanhocnuocngoai/truongca.png",
        category: "Sách Văn Học Nước Ngoài",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Lao động",
        author: "Tác giả E",
        publishedYear: 2018,
      },
      {
        id: 71,
        status: "Hoạt động",
        name: "Có Hai Con Mèo Ngồi Bên Cửa Sổ",
        img: "/assets/img/book/vanhoctrongnuoc/cohaiconmeongoibencuaso.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Hội Nhà Văn",
        author: "Tác giả F",
        publishedYear: 2021,
      },
      {
        id: 72,
        status: "Hoạt động",
        name: "Đời Thừa",
        img: "/assets/img/book/vanhoctrongnuoc/doithua.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Sự Thật",
        author: "Tác giả G",
        publishedYear: 2020,
      },
      {
        id: 73,
        status: "Hoạt động",
        name: "Lão Hạc",
        img: "/assets/img/book/vanhoctrongnuoc/laohac.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Kim Đồng",
        author: "Nam Cao",
        publishedYear: 2017,
      },
      {
        id: 74,
        status: "Hoạt động",
        name: "Ngôi Trường Mọi Khi",
        img: "/assets/img/book/vanhoctrongnuoc/ngoitruongmoikhi.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Giáo Dục",
        author: "Tác giả H",
        publishedYear: 2018,
      },
      {
        id: 75,
        status: "Hoạt động",
        name: "Nỗi Buồn Chiến Tranh",
        img: "/assets/img/book/vanhoctrongnuoc/noibuonchientranh.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Tự Do",
        author: "Tác giả I",
        publishedYear: 2019,
      },
      {
        id: 76,
        status: "Hoạt động",
        name: "Thơ Tố Hữu",
        img: "/assets/img/book/vanhoctrongnuoc/thotohuu.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Văn Học",
        author: "Tố Hữu",
        publishedYear: 2017,
      },
      {
        id: 77,
        status: "Hoạt động",
        name: "Thơ Văn Nguyễn Đình Chiểu",
        img: "/assets/img/book/vanhoctrongnuoc/thovannguyendinhchieu.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Tri Thức",
        author: "Nguyễn Đình Chiểu",
        publishedYear: 2020,
      },
      {
        id: 78,
        status: "Hoạt động",
        name: "Thơ Xuân Diệu",
        img: "/assets/img/book/vanhoctrongnuoc/thoxuandieu.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Giáo Dục",
        author: "Xuân Diệu",
        publishedYear: 2018,
      },
      {
        id: 79,
        status: "Hoạt động",
        name: "Thơ Xuân Quỳnh",
        img: "/assets/img/book/vanhoctrongnuoc/thoxuanquynh.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Văn Học",
        author: "Xuân Quỳnh",
        publishedYear: 2021,
      },
      {
        id: 80,
        status: "Hoạt động",
        name: "Tuyển Tập Năm Cao",
        img: "/assets/img/book/vanhoctrongnuoc/tuyentapnamcao.webp",
        category: "Sách Văn Học Trong Nước",
        price: 200000,
        desc: "",
        publisher: "Nhà xuất bản Văn học",
        author: "Năm Cao",
        publishedYear: 2020,
      },
    ];

    localStorage.setItem("products", JSON.stringify(defaultProducts));
  }
}
//Thêm sửa xóa chi tiết sản phẩm
function renderProducts(filteredProducts = []) {
  const productList = document.querySelector(".product-list tbody");
  const products = filteredProducts.length
    ? filteredProducts
    : JSON.parse(localStorage.getItem("products")) || [];
  const rowsPerPage = 5;
  const pageCount = Math.ceil(products.length / rowsPerPage);

  let currentPage = 1;

  // Hiển thị bảng sản phẩm cho trang hiện tại
  function displayTable(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = products.slice(start, end);

    productList.innerHTML = paginatedData
      .map(
        (product) => `
       <tr>
        <td>${product.id}</td>
        <td>
          <img src="${product.img}" alt="${
          product.name
        }" style="width: 50px; height: 50px; object-fit: cover;">
        </td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
          <span class="status ${
            product.status === "Hoạt động" ? "active" : "bian"
          }">
            ${product.status}
          </span>
        </td>
        <td class="btn-action-group">
          <button class="btn-status btn-info" onclick="showDetailFormProduct('${
            product.id
          }')">
            <i class="fa-solid fa-info"></i>
          </button>
          <button class="btn-status btn-primary" onclick="showSuaFormProduct('${
            product.id
          }')">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn-status btn-danger" onclick="deleteProduct('${
            product.id
          }')">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
      `
      )
      .join("");
  }

  // Hiển thị phân trang
  function displayPagination(page) {
    const pagination = document.getElementById("paginationProduct");
    pagination.innerHTML = "";

    const prevButton = document.createElement("button");
    prevButton.innerText = "❮";
    prevButton.classList.add("pagination-btn");
    prevButton.disabled = page === 1;
    prevButton.addEventListener("click", () => {
      if (page > 1) {
        currentPage--;
        displayTable(currentPage);
        displayPagination(currentPage);
      }
    });
    pagination.appendChild(prevButton);

    const pageButtons = [];
    const startPage = Math.max(1, page - 2); // Xác định trang bắt đầu
    const endPage = Math.min(pageCount, page + 2); // Xác định trang kết thúc
    // Hiển thị trang đầu tiên nếu không có dấu "..."
    if (startPage > 1) {
      const firstPageButton = document.createElement("button");
      firstPageButton.innerText = 1;
      firstPageButton.classList.add("pagination-btn");
      firstPageButton.addEventListener("click", () => {
        currentPage = 1;
        displayTable(currentPage);
        displayPagination(currentPage);
      });
      pagination.appendChild(firstPageButton);
    }
    // Nếu số trang giữa trang đầu tiên và trang hiện tại quá lớn, hiển thị dấu "..."
    if (startPage > 2) {
      const dotsButton = document.createElement("button");
      dotsButton.innerText = "...";
      dotsButton.classList.add("pagination-btn");
      dotsButton.disabled = true; // Dấu "..." không phải là nút nhấn
      pagination.appendChild(dotsButton);
    }

    for (let i = startPage; i <= endPage; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.classList.add("pagination-btn");
      if (i === currentPage) button.classList.add("active");
      button.addEventListener("click", () => {
        currentPage = i;
        displayTable(currentPage);
        displayPagination(currentPage);
      });
      pagination.appendChild(button);
    }

    if (endPage < pageCount - 1) {
      const dotsButton = document.createElement("button");
      dotsButton.innerText = "...";
      dotsButton.classList.add("pagination-btn");
      dotsButton.disabled = true; // Dấu "..." không phải là một nút có thể nhấn
      pagination.appendChild(dotsButton);
    }

    // Hiển thị trang cuối cùng
    if (endPage < pageCount) {
      const lastPageButton = document.createElement("button");
      lastPageButton.innerText = pageCount;
      lastPageButton.classList.add("pagination-btn");
      lastPageButton.addEventListener("click", () => {
        currentPage = pageCount;
        displayTable(currentPage);
        displayPagination(currentPage);
      });
      pagination.appendChild(lastPageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.innerText = "❯";
    nextButton.classList.add("pagination-btn");
    nextButton.disabled = currentPage === pageCount;
    nextButton.addEventListener("click", () => {
      if (currentPage < pageCount) {
        currentPage++;
        displayTable(currentPage);
        displayPagination(currentPage);
      }
    });
    pagination.appendChild(nextButton);
  }

  // Hiển thị bảng và phân trang lần đầu
  displayTable(currentPage);
  displayPagination(currentPage);
}

function displayPagination(page) {
  const pagination = document.getElementById("paginationProduct");
  pagination.innerHTML = "";

  const prevButton = document.createElement("button");
  prevButton.innerText = "❮";
  prevButton.classList.add("pagination-btn");
  prevButton.disabled = page === 1;
  prevButton.addEventListener("click", () => {
    if (page > 1) {
      currentPage--;
      displayTable(currentPage);
      displayPagination(currentPage);
    }
  });
  pagination.appendChild(prevButton);

  const pageButtons = [];
  const startPage = Math.max(1, page - 2); // Xác định trang bắt đầu
  const endPage = Math.min(pageCount, page + 2); // Xác định trang kết thúc

  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement("button");
    button.innerText = i;
    button.classList.add("pagination-btn");
    if (i === currentPage) button.classList.add("active");
    button.addEventListener("click", () => {
      currentPage = i;
      displayTable(currentPage);
      displayPagination(currentPage);
    });
    pagination.appendChild(button);
  }

  // Hiển thị trang cuối cùng
  if (endPage < pageCount) {
    const lastPageButton = document.createElement("button");
    lastPageButton.innerText = pageCount;
    lastPageButton.classList.add("pagination-btn");
    lastPageButton.addEventListener("click", () => {
      currentPage = pageCount;
      displayTable(currentPage);
      displayPagination(currentPage);
    });
    pagination.appendChild(lastPageButton);
  }

  const nextButton = document.createElement("button");
  nextButton.innerText = "❯";
  nextButton.classList.add("pagination-btn");
  nextButton.disabled = currentPage === pageCount;
  nextButton.addEventListener("click", () => {
    if (currentPage < pageCount) {
      currentPage++;
      displayTable(currentPage);
      displayPagination(currentPage);
    }
  });
  pagination.appendChild(nextButton);
}

// Lắng nghe sự kiện DOMContentLoaded để khởi tạo
document.addEventListener("DOMContentLoaded", function () {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  renderProducts(products);
});

// Hàm thêm sản phẩm
function addproduct() {
  const name = document.getElementById("themTenSach").value;
  const img = document.getElementById("themHinhAnh").value;
  const category = document.getElementById("themTheLoai").value;
  const publisher = document.getElementById("themTenNXB").value;
  const author = document.getElementById("themTacGia").value;
  const publishedYear = document.getElementById("themNamXB").value;
  const price = document.getElementById("themGiaBia").value;
  const desc = document.getElementById("themMoTa").value;
  if (
    !name ||
    !img ||
    !category ||
    !publisher ||
    !author ||
    !publishedYear ||
    !price ||
    !desc
  ) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (!validateName(name)) {
    alert("Tên sách không đúng định dạng!");
    return;
  } else if (!validateName(publisher)) {
    alert("Tên nhà xuất bản không đúng định dạng!");
    return;
  } else if (!validateName(author)) {
    alert("Tên tác giả không đúng định dạng!");
    return;
  } else if (!validateName(category)) {
    alert("Tên thể loại không đúng định dạng!");
    return;
  } else if (!validatePublishedYear(publishedYear)) {
    alert("Năm xuất bản phải có 4 chữ số và nhỏ hơn năm hiện tại!");
    return;
  } else if (!validatePrice(price)) {
    alert("Giá bìa phải lớn hơn 0!");
    return;
  }

  const products = JSON.parse(localStorage.getItem("products")) || [];
  const id = String(products.length + 1).padStart(2, "0"); // Tự động tạo ID
  const status = "Hoạt động"; // Mặc định trạng thái là "Hoạt động"

  products.push({
    id,
    status,
    name,
    img,
    category,
    price,
    publisher,
    author,
    publishedYear,
    desc,
  });
  localStorage.setItem("products", JSON.stringify(products));

  renderProducts();
  alert("Sản phẩm đã thêm thành công!");
  closeThemFormProduct();
}

// Hiển thị thông tin sản phẩm chi tiết
function showDetailFormProduct(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const product = products.find((emp) => emp.id === Number(id));

  if (product) {
    // Hiển thị ảnh hiện tại
    const previewImage = document.getElementById("xemPreviewImage");
    previewImage.src = product.img; 
    document.getElementById("xemHinhAnh").textContent = product.img;
    document.getElementById("xemTenSach").textContent = product.name;
    document.getElementById("xemTenNXB").textContent = product.publisher;
    document.getElementById("xemTacGia").textContent = product.author;
    document.getElementById("xemTheLoai").textContent = product.category;
    document.getElementById("xemNamXB").textContent = product.publishedYear;
    document.getElementById("xemGiaBia").textContent = product.price;
    document.getElementById("xemMoTa").textContent = product.desc;

    document.getElementById("formxemSanPham").style.display = "flex";
  }
}

// Hiển thị form thêm sản phẩm
function showThemFormProduct() {
  document.getElementById("formThemSanPham").style.display = "flex";
}

// Đóng form thêm sản phẩm
function closeThemFormProduct() {
  document.getElementById("formThemSanPham").style.display = "none";
  document.getElementById("themSanPham").reset(); // Reset lại form
}

// Hiển thị form sửa sản phẩm
function showSuaFormProduct(id) {
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);
  console.log(product);
  if (product) {
    // Hiển thị ảnh hiện tại
    const previewImage = document.getElementById("suaPreviewImage");
    previewImage.src = product.img; 
    document.getElementById("suaTenSach").value = product.name;
    document.getElementById("suaHinhAnh").src = product.img;   
    document.getElementById("suaTheLoai").value = product.category;
    document.getElementById("suaTenNXB").value = product.publisher;
    document.getElementById("suaTacGia").value = product.author;
    document.getElementById("suaNamXB").value = product.publishedYear;
    document.getElementById("suaGiaBia").value = product.price;
    document.getElementById("suaMoTa").value = product.desc;
    document.getElementById("suaTrangThaiSanPham").checked =
    product.status === "Hoạt động";

    // Lưu ID vào dataset để cập nhật
    document.getElementById("suaSanPham").dataset.id = id;
    document.getElementById("formSuaSanPham").style.display = "flex";
  }
}

// Đóng form sửa sản phẩm
function closeSuaFormProduct() {
  document.getElementById("formSuaSanPham").style.display = "none";
  // document.getElementById("overlay").style.display = "none"; // Ẩn overlay
}
// Đóng form chi tiết sản phẩm
function closeDetailFormProduct() {
  document.getElementById("formxemSanPham").style.display = "none";
  // document.getElementById("overlay").style.display = "none"; // Ẩn overlay
}

// Cập nhật sản phẩm
function updateProduct() {
  
  const id = document.getElementById("suaSanPham").dataset.id;
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return;
  }

  product.name = document.getElementById("suaTenSach").value;
  product.img = document.getElementById("suaHinhAnh").src;
  product.category = document.getElementById("suaTheLoai").value;
  product.publisher = document.getElementById("suaTenNXB").value;
  product.author = document.getElementById("suaTacGia").value;
  product.publishedYear = document.getElementById("suaNamXB").value;
  product.price = document.getElementById("suaGiaBia").value;
  product.desc = document.getElementById("suaMoTa").value;
  document.getElementById("suaTrangThaiSanPham").checked
    ? "Hoạt động"
    : "Bị ẩn";
  if (
    !product.name ||
    !product.img ||
    !product.category ||
    !product.publisher ||
    !product.author ||
    !product.publishedYear ||
    !product.price ||
    !product.desc
  ) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }  
  if (!validateName(product.name)) {
    alert("Tên sách không đúng định dạng!");
    return;
  } else if (!validateName(product.publisher)) {
    alert("Tên nhà xuất bản không đúng định dạng!");
    return;
  } else if (!validateName(product.author)) {
    alert("Tên tác giả không đúng định dạng!");
    return;
  } else if (!validateName(product.category)) {
    alert("Tên thể loại không đúng định dạng!");
    return;
  } else if (!validatePublishedYear(product.publishedYear)) {
    alert("Năm xuất bản phải có 4 chữ số và nhỏ hơn năm hiện tại!");
    return;
  } else if (!validatePrice(product.price)) {
    alert("Giá bìa phải lớn hơn 0!");
    return;
  }

  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
  alert("Sản phẩm đã cập nhật thành công!");
  closeSuaFormProduct();
}

//Xóa sản phẩm
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  console.log('id:', id);
  products = products.map((p) => {
    if (p.id === Number(id)) { 
      alert(`Đã tìm thấy sản phẩm với id: ${id}`);
      p.status = "Bị ẩn";  
    }
    return p;
  });

  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

// Hàm tìm kiếm sản phẩm theo tên và giá
function searchProduct() {
  const searchTerm = document.getElementById("tenSPTim").value.trim().toLowerCase();
  const startPrice = document.getElementById('khoangGiaTimBD').value.trim();
  const endPrice = document.getElementById('khoangGiaTimKT').value.trim();
  
  // Kiểm tra xem startPrice có lớn hơn endPrice không
  if (startPrice && endPrice && parseFloat(startPrice) > parseFloat(endPrice)) {
    alert("Giá bắt đầu không được lớn hơn giá kết thúc!");
    return;
  }

  // Lấy danh sách sản phẩm từ localStorage
  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Kiểm tra điều kiện tìm kiếm theo tên và giá
  let filteredProducts = products;

  if (searchTerm !== "" && startPrice === "" && endPrice === "") {
    // Tìm kiếm chỉ theo tên
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );
  } else if (searchTerm === "" && startPrice !== "" && endPrice !== "") {
    // Tìm kiếm chỉ theo giá
    filteredProducts = filteredProducts.filter((product) =>
      product.price >= parseFloat(startPrice) && product.price <= parseFloat(endPrice)
    );
  } else if (searchTerm !== "" && startPrice !== "" && endPrice !== "") {
    // Tìm kiếm theo cả tên và giá
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm) &&
      product.price >= parseFloat(startPrice) && product.price <= parseFloat(endPrice)
    );
  }

  // Nếu không có sản phẩm nào phù hợp, hiển thị thông báo
  if (filteredProducts.length === 0) {
    document.querySelector(".product-list tbody").innerHTML =
      "<tr><td colspan='6'>Không tìm thấy sản phẩm nào.</td></tr>";
  } else {
    // Render lại danh sách sản phẩm sau khi lọc
    renderProducts(filteredProducts);
  }
}

// Lắng nghe sự kiện click vào nút "Thêm"
const formaddProduct = document.getElementById("submit-btn-themSanPham");
formaddProduct.addEventListener("click", function (event) {
  event.preventDefault(); // Ngừng hành động mặc định của form (nếu có)
  addproduct();
});

// Khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  loadDefaultProducts(); // Chỉ gọi nếu localStorage chưa có dữ liệu
  renderProducts();
});

// Sự kiện nút tìm sản phẩm
const btnSearchProduct = document.getElementById("searchProductBtn");
btnSearchProduct.addEventListener("click", function (event) {
  event.preventDefault(); // Ngừng hành động mặc định của form (nếu có)
  searchProduct();
});
//-------------------------------------------------------
//Thêm sửa xóa chi tiết nhân viên
document.getElementById("suaTrangThai").addEventListener("change", function () {
  const statusText = document.getElementById("suaTrangThaiLabel");
  if (this.checked) {
    statusText.textContent = "Đang hoạt động";
  } else {
    statusText.textContent = "Bị ẩn";
  }
});

//hóa đơn
// Lấy các nút và form
const editBtns = document.querySelectorAll(".edit-btn");
const editForm = document.getElementById("editForm");
const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");

// Hiển thị form khi nhấn "edit-btn"
editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    editForm.classList.remove("hidden");
  });
});

// Ẩn form khi nhấn "Hủy"
cancelBtn.addEventListener("click", () => {
  editForm.classList.add("hidden");
});

// Xử lý nút "Lưu" (tùy chỉnh theo yêu cầu)
saveBtn.addEventListener("click", () => {
  // Thu thập dữ liệu từ form
  const clientID = document.getElementById("clientID").value;
  const clientName = document.getElementById("clientName").value;
  const clientPhone = document.getElementById("clientPhone").value;
  const createDate = document.getElementById("createDate").value;
  const totalAmount = document.getElementById("totalAmount").value;
  const status = document.getElementById("status").value;

  console.log("Dữ liệu chỉnh sửa:", {
    clientID,
    clientName,
    clientPhone,
    createDate,
    totalAmount,
    status,
  });

  // Tắt popup
  editForm.classList.add("hidden");
});

// Lấy các nút và popup
const infoBtns = document.querySelectorAll(".info-btn");
const detailPopup = document.getElementById("detailPopup");
const overlay = document.getElementById("overlay");
const closeDetailBtn = document.getElementById("closeDetailBtn");

// Hiển thị popup và overlay khi nhấn "info-btn"
infoBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Lấy dữ liệu từ dòng hiện tại
    const row = e.target.closest("tr");
    const id = row.children[0].textContent;
    const name = row.children[1].textContent;
    const phone = row.children[2].textContent;
    const date = row.children[3].textContent;
    const total = row.children[4].textContent;
    const status = row.children[5].textContent;

    // Điền dữ liệu vào popup
    document.getElementById("detailID").textContent = id;
    document.getElementById("detailName").textContent = name;
    document.getElementById("detailPhone").textContent = phone;
    document.getElementById("detailDate").textContent = date;
    document.getElementById("detailTotal").textContent = total;
    document.getElementById("detailStatus").textContent = status;

    // Hiển thị overlay và popup
    overlay.classList.remove("hidden");
    detailPopup.classList.remove("hidden");
  });
});

// Ẩn popup và overlay khi nhấn "Đóng"
closeDetailBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
  detailPopup.classList.add("hidden");
});

// Ẩn popup khi nhấn vào overlay (tùy chọn)
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  detailPopup.classList.add("hidden");
});
//end hóa đơn

// Load nhân viên và js cho nhân viên ( tiến )
// Hiển thị danh sách nhân viên
// Cập nhật hàm renderEmployees để sử dụng phân trang
function renderEmployees(filteredEmployees = []) {
  const employeeList = document.querySelector(".client-list tbody");
  const employees = filteredEmployees.length
    ? filteredEmployees
    : JSON.parse(localStorage.getItem("employees")) || [];
  const rowsPerPage = 5; // Số lượng nhân viên mỗi trang
  const pageCount = Math.ceil(employees.length / rowsPerPage);

  let currentPage = 1;

  // Hiển thị bảng nhân viên cho trang hiện tại
  function displayTable(page) {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = employees.slice(start, end);

    employeeList.innerHTML = paginatedData
      .map(
        (employee) => `
        <tr>
          <td>${employee.id}</td>
          <td>${employee.name}</td>
          <td>${employee.phone}</td>
          <td>${employee.position}</td>
          <td>
            <span class="status ${
              employee.status === "Hoạt động" ? "active" : "bian"
            }">
              ${employee.status}
            </span>
          </td>
          <td class="btn-action-group">
            <button class="btn-status btn-info" onclick="showDetail('${
              employee.id
            }')">
              <i class="fa-solid fa-info"></i>
            </button>
            <button class="btn-status btn-primary" onclick="showSuaForm('${
              employee.id
            }')">
              <i class="fas fa-edit"></i>
            </button>
            <button class="btn-status btn-danger" onclick="deleteEmployee('${
              employee.id
            }')">
              <i class="fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>`
      )
      .join("");
  }

  // Hiển thị phân trang
  function displayPagination(page) {
    const pagination = document.getElementById("paginationEmployee");
    pagination.innerHTML = "";

    const prevButton = document.createElement("button");
    prevButton.innerText = "❮";
    prevButton.classList.add("pagination-btn");
    prevButton.disabled = page === 1;
    prevButton.addEventListener("click", () => {
      if (page > 1) {
        currentPage--;
        displayTable(currentPage);
        displayPagination(currentPage);
      }
    });
    pagination.appendChild(prevButton);

    const pageButtons = [];
    const startPage = Math.max(1, page - 2); // Xác định trang bắt đầu
    const endPage = Math.min(pageCount, page + 2); // Xác định trang kết thúc
    // Hiển thị trang đầu tiên nếu không có dấu "..."
    if (startPage > 1) {
      const firstPageButton = document.createElement("button");
      firstPageButton.innerText = 1;
      firstPageButton.classList.add("pagination-btn");
      firstPageButton.addEventListener("click", () => {
        currentPage = 1;
        displayTable(currentPage);
        displayPagination(currentPage);
      });
      pagination.appendChild(firstPageButton);
    }
    // Nếu số trang giữa trang đầu tiên và trang hiện tại quá lớn, hiển thị dấu "..."
    if (startPage > 2) {
      const dotsButton = document.createElement("button");
      dotsButton.innerText = "...";
      dotsButton.classList.add("pagination-btn");
      dotsButton.disabled = true; // Dấu "..." không phải là nút nhấn
      pagination.appendChild(dotsButton);
    }

    for (let i = startPage; i <= endPage; i++) {
      const button = document.createElement("button");
      button.innerText = i;
      button.classList.add("pagination-btn");
      if (i === currentPage) button.classList.add("active");
      button.addEventListener("click", () => {
        currentPage = i;
        displayTable(currentPage);
        displayPagination(currentPage);
      });
      pagination.appendChild(button);
    }

    if (endPage < pageCount - 1) {
      const dotsButton = document.createElement("button");
      dotsButton.innerText = "...";
      dotsButton.classList.add("pagination-btn");
      dotsButton.disabled = true; // Dấu "..." không phải là một nút có thể nhấn
      pagination.appendChild(dotsButton);
    }

    // Hiển thị trang cuối cùng
    if (endPage < pageCount) {
      const lastPageButton = document.createElement("button");
      lastPageButton.innerText = pageCount;
      lastPageButton.classList.add("pagination-btn");
      lastPageButton.addEventListener("click", () => {
        currentPage = pageCount;
        displayTable(currentPage);
        displayPagination(currentPage);
      });
      pagination.appendChild(lastPageButton);
    }

    const nextButton = document.createElement("button");
    nextButton.innerText = "❯";
    nextButton.classList.add("pagination-btn");
    nextButton.disabled = currentPage === pageCount;
    nextButton.addEventListener("click", () => {
      if (currentPage < pageCount) {
        currentPage++;
        displayTable(currentPage);
        displayPagination(currentPage);
      }
    });
    pagination.appendChild(nextButton);
  }
  // Hiển thị bảng và phân trang lần đầu
  displayTable(currentPage);
  displayPagination(currentPage);
}

// Lắng nghe sự kiện DOMContentLoaded để khởi tạo
document.addEventListener("DOMContentLoaded", function () {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  renderEmployees(employees);
});

// Hàm thêm nhân viên
function addEmployee() {
  const name = document.getElementById("themName").value;
  const phone = document.getElementById("themPhone").value;
  const position = document.getElementById("themChucVu").value;

  if (!name || !phone || !position) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (!validatePhoneNumber(phone)) {
    alert("Số điện thoại không đúng định dạng!");
    return;
  } else if (!validateName(name)) {
    alert("Tên không đúng định dạng!");
    return;
  } else if (!validatePosition(position)) {
    alert("Chức vụ không đúng định dạng!");
    return;
  }

  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const id = String(employees.length + 1).padStart(2, "0"); // Tự động tạo ID
  const status = "Hoạt động"; // Mặc định trạng thái là "Hoạt động"

  employees.push({ id, name, phone, position, status });
  localStorage.setItem("employees", JSON.stringify(employees));

  renderEmployees();
  closeThemForm();
}

// Hiển thị thông tin nhân viên chi tiết
function showDetail(id) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = employees.find((emp) => emp.id === id);

  if (employee) {
    document.getElementById("detailName").textContent = employee.name;
    document.getElementById("detailPhone").textContent = employee.phone;
    document.getElementById("detailChucVu").textContent = employee.position;
    document.getElementById("detailTrangThai").textContent = employee.status;

    document.getElementById("formDetailNhanVien").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
}

// Hiển thị form thêm nhân viên
function showThemForm() {
  document.getElementById("formThemNhanVien").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// Đóng form thêm nhân viên
function closeThemForm() {
  document.getElementById("overlay").style.display = "none"; // Ẩn overlay
  document.getElementById("formThemNhanVien").style.display = "none";
  document.getElementById("themNhanVien").reset(); // Reset lại form
}

// Hiển thị form sửa nhân viên
function showSuaForm(id) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const employee = employees.find((emp) => emp.id === id);

  if (employee) {
    document.getElementById("suaName").value = employee.name;
    document.getElementById("suaPhone").value = employee.phone;
    document.getElementById("suaChucVu").value = employee.position;
    document.getElementById("suaTrangThai").checked =
      employee.status === "Hoạt động";

    // Lưu ID vào dataset để cập nhật
    document.getElementById("suaNhanVien").dataset.id = id;

    document.getElementById("formSuaNhanVien").style.display = "block";
  }
  document.getElementById("overlay").style.display = "block";
}

// Đóng form sửa nhân viên
function closeSuaForm() {
  document.getElementById("formSuaNhanVien").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Ẩn overlay
}
// Đóng form chi tiết nhân viên
function closeDetailForm() {
  document.getElementById("formDetailNhanVien").style.display = "none";
  document.getElementById("overlay").style.display = "none"; // Ẩn overlay
}

// Cập nhật nhân viên
function updateNhanVien() {
  const id = document.getElementById("suaNhanVien").dataset.id;
  const employees = JSON.parse(localStorage.getItem("employees")) || [];

  const employee = employees.find((emp) => emp.id === id);

  if (!employee) {
    return;
  }

  employee.name = document.getElementById("suaName").value;
  employee.phone = document.getElementById("suaPhone").value;
  employee.position = document.getElementById("suaChucVu").value;
  employee.status = document.getElementById("suaTrangThai").checked
    ? "Hoạt động"
    : "Bị ẩn";

  if (!employee.name || !employee.phone || !employee.position) {
    alert("Vui lòng nhập đầy đủ thông tin.");
    return;
  }

  if (!validatePhoneNumber(employee.phone)) {
    alert("Số điện thoại không đúng định dạng!");
    return;
  } else if (!validateName(employee.name)) {
    alert("Tên không đúng định dạng!");
    return;
  } else if (!validatePosition(employee.position)) {
    alert("Chức vụ không đúng định dạng!");
    return;
  }

  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
  closeSuaForm();
}

function validatePosition(position) {
  const validPositions = ["Quản lý", "Nhân viên"];
  return validPositions.includes(position);
}
// Xóa nhân viên
function deleteEmployee(id) {
  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  employees = employees.map((emp) => {
    if (emp.id === id) {
      emp.status = "Bị ẩn";
    }
    return emp;
  });
  localStorage.setItem("employees", JSON.stringify(employees));
  renderEmployees();
}

// Hàm tìm kiếm nhân viên theo tên
function searchEmployee() {
  const searchTerm = document
    .getElementById("timTen")
    .value.trim()
    .toLowerCase();
  // Nếu không có từ khóa tìm kiếm, trả lại toàn bộ danh sách nhân viên
  if (searchTerm === "") {
    renderEmployees();
    return;
  }
  console.log("Tìm kiếm theo từ khóa:", searchTerm); // Kiểm tra từ khóa tìm kiếm
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  // Lọc nhân viên theo tên, bỏ qua chữ hoa/chữ thường và khoảng trắng thừa
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm)
  );

  // Nếu không có nhân viên nào phù hợp, hiển thị thông báo
  if (filteredEmployees.length === 0) {
    // Xóa các hàng trong bảng
    document.querySelector(".client-list tbody").innerHTML =
      "<tr><td colspan='6'>Không tìm thấy nhân viên nào.</td></tr>";
  } else {
    // Render lại danh sách nhân viên sau khi lọc
    renderEmployees(filteredEmployees);
  }
}

// Tải danh sách nhân viên mặc định chỉ khi localStorage chưa có dữ liệu
function loadDefaultEmployees() {
  if (!localStorage.getItem("employees")) {
    const defaultEmployees = [
      {
        id: "01",
        name: "Võ Xuân Mai",
        phone: "0100203045",
        position: "Quản lý",
        status: "Bị ẩn",
      },
      {
        id: "02",
        name: "Trần Kim Yến",
        phone: "0100203045",
        position: "Quản lý",
        status: "Hoạt động",
      },
      {
        id: "03",
        name: "Trương Phúc Hoàng Anh",
        phone: "0100203045",
        position: "Quản lý",
        status: "Hoạt động",
      },
      {
        id: "04",
        name: "Trần Quỳnh Hương",
        phone: "0100203045",
        position: "Quản lý",
        status: "Bị ẩn",
      },
      {
        id: "05",
        name: "Trần Minh Nhật",
        phone: "0100203045",
        position: "Quản lý",
        status: "Hoạt động",
      },
      {
        id: "06",
        name: "Võ Hoàng Yến",
        phone: "0100203045",
        position: "Quản lý",
        status: "Hoạt động",
      },
    ];

    localStorage.setItem("employees", JSON.stringify(defaultEmployees));
  }
}

// Lắng nghe sự kiện click vào nút "Thêm"
const formaddNV = document.getElementById("addNV");
formaddNV.addEventListener("click", function (event) {
  event.preventDefault(); // Ngừng hành động mặc định của form (nếu có)
  addEmployee();
});

// Khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  loadDefaultEmployees(); // Chỉ gọi nếu localStorage chưa có dữ liệu
  renderEmployees();
});

// Sự kiện nút tìm nhân viên
const formtimNV = document.getElementById("timNV");
formtimNV.addEventListener("click", function (event) {
  event.preventDefault(); // Ngừng hành động mặc định của form (nếu có)
  searchEmployee();
});

// thongke
// Ẩn popup khi nhấn vào overlay (tùy chọn)
overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  detailPopup.classList.add("hidden");
});
// Tùy chọn tháng
const filter = document.getElementById("filter-type");
filter.addEventListener("change", function () {
  const timeType = document.getElementById("time-select");
  timeType.innerHTML = ""; // Xóa các tùy chọn cũ
  const filterText = document.getElementById("filter-type").value;
  console.log(filterText);
  if (filterText === "month") {
    // Hiển thị các tháng trong năm 2024
    for (let i = 1; i <= 12; i++) {
      timeType.innerHTML += `<option value="${i}-2024">${i}/2024</option>`;
    }
  } else if (filterText === "years") {
    // Hiển thị các năm
    timeType.innerHTML += `<option value="2024">2024</option>`;
    timeType.innerHTML += `<option value="2025">2025</option>`;
  }
});