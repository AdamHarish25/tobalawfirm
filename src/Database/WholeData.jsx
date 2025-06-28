import Logo from "../Attachments/Image/Logo.jpg";
import Profile from "../Attachments/Image/profile.jpg";
import { AiOutlineMessage } from "react-icons/ai";
import { FaClock, FaCompass, FaEnvelope, FaFacebook, FaFacebookF, FaHandshake, FaHome, FaInstagram, FaPhone, FaShieldAlt, FaStar, FaWallet, FaYoutube } from "react-icons/fa";
import hammer from '../Attachments/Image/judgesHammer.jpg';
import secretary from '../Attachments/Image/noteTaker.jpg';
import background from '../Attachments/Image/background.jpg';


import handshaking from '../Attachments/Image/businessmenShakingHands.jpg';

import hourglass from '../Attachments/Image/hourglass.jpg';

import teamMember1 from '../Attachments/Image/Team/team1.jpeg';
import teamMember2 from "../Attachments/Image/Team/team2.jpeg";
import teamMember3 from "../Attachments/Image/Team/member3.jpg";

export const Database = {
  NavbarData: {
    navigateList: [
      {
        title: "Beranda",
        link: "/",
      },
      {
        title: "Layanan",
        link: "/Service",
      },
      {
        title: "Tentang",
        link: "/About",
      },
      {
        title: "Tim",
        link: "/Team",
      },
      {
        title: "Blog kami",
        link: "/Artikel",
      }
    ],

    logo: Logo,

    button: {
      icon: <AiOutlineMessage />,
      title: "Hubungi Kami",
      link: "/Contact",
    },
  },

  FooterData: {
    contact: {
      title: "Kontak",
      address:
        "Madison Square SHC 2/51 kota wisata, Gn. putri, Bogor, Jawa Barat 16720",
      list: [
        {
          title: "+62-858-1116-5429",
          link: "https://wa.me/6285811165429",
        },
        {
          title: "+62-838-7766-2277",
          link: "https://wa.me/6283877662277",
        },
        {
          title: "tobalawfirm01@tobalaw.my.id",
          link: "mailto:tobalawfirm01@tobalaw.my.id",
        },
      ],
    },

    links: {
      title: "Links",
      list: [
        {
          title: "Layanan Kami",
          link: "/Service",
        },
        {
          title: "Tentang Kami",
          link: "/About",
        },
        {
          title: "Tim Kami",
          link: "/Team",
        },
        {
          title: "Beranda",
          link: "/",
        },
      ],

      socialList: [
        {
          icon: <FaYoutube />,
          link: "https://youtube.com",
        },
        {
          icon: <FaFacebookF />,
          link: "https://Facebook.com",
        },
        {
          icon: <FaInstagram />,
          link: "https://Instagram.com",
        },
      ],
    },
  },

  HomeData: {
    page_1: {
      title: "Penuhi semua kebutuhan investigasi dan litigasi Anda",
      subtitle:
        "Kantor Hukum kami terdiri dari tim advokat & legal consultant mempunyai integritas tinggi yang mampu dan berpengalaman menangani berbagai perkara hukum.",
      button: [
        {
          link: "/Service",
          title: "Layanan Kami",
        },
        {
          link: "/Contact",
          title: "Kontak Kami",
        },
      ],
    },

    page_2: {
      title: "Tentang Kami",
      subtitle: `Toba Law Firm adalah lembaga konsultan hukum yang didirikan pada tahun 2024 dengan visi dan misi untuk memberikan bantuan hukum yang berkualitas dan profesional kepada individu dan perusahaan yang menghadapi kesulitan hukum. Kami percaya bahwa setiap orang berhak mendapatkan keadilan dan perlindungan hukum yang sama, dan kami berkomitmen untuk memberikan layanan hukum yang terbaik kepada klien kami.

Dengan tim pengacara yang berpengalaman dan berdedikasi, Toba Law Firm siap membantu klien kami dalam menyelesaikan kasus hukum yang kompleks dan memberikan solusi yang efektif dan efisien. Kami memiliki keahlian dalam berbagai bidang hukum, termasuk litigasi, kontrak, dan hukum bisnis, dan kami siap untuk memberikan bantuan hukum yang tepat kepada klien kami.

Kami memahami bahwa setiap kasus hukum memiliki keunikan dan kompleksitas tersendiri, dan kami berkomitmen untuk memberikan perhatian yang personal dan profesional kepada setiap klien kami. Kami percaya bahwa dengan kerja sama yang erat antara klien dan pengacara, kami dapat mencapai hasil yang terbaik dan memberikan keadilan kepada klien kami.

Toba Law Firm adalah mitra yang dapat diandalkan bagi individu dan perusahaan yang membutuhkan bantuan hukum yang berkualitas dan profesional. Kami siap untuk membantu Anda dalam menyelesaikan kasus hukum Anda dan memberikan solusi yang efektif dan efisien. Hubungi kami hari ini untuk mengetahui lebih lanjut tentang bagaimana kami dapat membantu Anda.`,
      button: {
        link: "/Service",
        title: "Layanan Kami",
      },

      img: Profile,
    },

    page_3: {
      title: "Keuntungan menggunakan Jasa Kami",
      subtitle:
        "Tim kami terdiri dari advokat dan konsultan hukum berintegritas dengan pengalaman luas dalam menangani beragam kasus hukum. Pendekatan kami didasarkan pada hukum dan peraturan yang mengatur setiap bidang, dan kami memberikan pelatihan hukum kepada advokat dan masyarakat. ",

      cards: [
        {
          title: "Pengelolaan Biaya Perlindungan Terencana",
          subtitle:
            "Memperkirakan biaya perlindungan hukum untuk setiap aktivitas bisnis tahunan.",
          icon: <FaWallet />,
        },
        {
          title: "Dukungan Hukum Proaktif",
          subtitle:
            "Memberikan nasihat dan bantuan hukum berkala sesuai kebutuhan.",
          icon: <FaHandshake />,
        },
        {
          title: "Solusi Hukum Tepat Waktu",
          subtitle:
            "Tersedia untuk dihubungi saat aktivitas bisnis dilakukan, baik untuk pencegahan maupun masalah hukum yang muncul.",
          icon: <FaClock />,
        },
        {
          title: "Perlindungan Berkelas Atas Masalah Hukum",
          subtitle:
            "Bertindak cepat dalam menangani masalah hukum yang dapat berdampak pada aset dan citra perusahaan.",
          icon: <FaShieldAlt />,
        },
      ],
    },

    page_4: {
      title: "Layanan Kami",
      button: {
        link: "/Service",
        title: "Lihat Lebih Banyak",
      },
      services: [
        {
          title: "Hukum pidana",
          // subtitle:
          //   "Yaitu menyangkut pendirian firma, CV dan PT, termasuk juga pembuatan perjanjian keagenan, perjanjian distributor dan hal - hal lain yang berkaitan dengannya",
        },
        {
          title: "Hukum perdata",
        //   subtitle:
        //     "Yaitu menyangkut pembuatan dan pemeriksaan segala bentuk perjanjian yang menyangkut aktivitas perusahaan dibidang perdagangan dan industry",
        },
        {
          title: "Hukum arbitrase",
          // subtitle:
          //   "Yaitu pendampingan, konsultan dalam kontrak Pengadaan, dan memberikan pelayanan hukum kepada PA / KPA / PPK / ULP / Pejabat Pengadaan / PPHP / PPSPM/ Bendahara / APIP yang sedang mengadapi permasalahan hukum Pengadaan",
        },
        {
          title: "Layanan bantuan hukum untuk perusahaan atau korporasi ",
          // subtitle:
          //   "Yaitu menyangkut penanganan segala masalah hukum dibidang keuangan, termasuk permasalahan yang berkaitan dengan lembaga Perbankan, Leasing, Factoring, Asuransi dan Perpajakan",
        },
        
      ],
    },

    page_5: {
      title: "Klien Kami",

      tabs: [
        {
          id: 1,
          tabTitle: "Tipe 1",
          title: "Klien Tetap",
          content:
            "Klien (baik perorangan atau perusahaan) yang menunjuk Kantor Kami sebagai pengacara tetap (In House Lawyer) selama jangka waktu tertentu, untuk menangani segala aspek hukum terutama untuk mencegah timbulnya sengketa / masalah hukum.",
          img: background,
        },
        {
          id: 2,
          tabTitle: "Tipe 2",
          title: "Klien Tidak Tetap",
          content:
            "Klien (baik perorangan atau badan hukum) yang secara insidentil menunjuk Kantor Hukum Kami untuk menangani masalah hukum yang dihadapi baik untuk penyelesaian di luar maupun di dalam pengadilan.",
          img: secretary,
        },
        {
          id: 3,
          tabTitle: "Tipe 3",
          title: "Pendampingan dan Pelayanan Hukum",
          content:
            "Bagi PA / KPA / PPK / ULP / Pejabat Pengadaan / PPHP/ PPSPM / Bendahara / APIP yang sedang mengadapi permasalahan hukum Pengadaan.",
          img: hammer,
        },
      ],
    },

    page_6: [
      {
        title: "Visi",
        icon: <FaStar />,
        content: [
          {
            title:
              "Mewujudkan penegakan hukum yang benar, adil, bermartabat serta jasa pelayanan hukum prima dan partisipatif",
          },
          {
            title:
              "Menjadi Pusat Pelatihan yang dipilih untuk kualitas dan kinerja yang kami tawarkan melalui produk dan layanan kami",
          },
        ],
      },
      {
        title: "Misi",
        icon: <FaCompass />,
        content: [
          {
            title:
              "Menyelesaikan perkara/kasus melalui jalur litigasi & non-litigasi",
          },
          {
            title: "Pendokumentasian serta akses informasi yang komprehensif",
          },
          {
            title:
              "Jaringan kerjasama yang kooperatif dan akomodatif dengan berprinsip pada kode etik profesi, pengembangan sumber daya hukum internal yang progresif, egaliter dan profesional",
          },
          {
            title:
              "Untuk secara konsisten memberikan dan meningkatkan nilai bagi klien dan karyawan kami dengan berkomitmen untuk terus memiliki keunggulan kompetitif, melalui kegiatan harian yang terperinci yang didorong oleh wawasan dunia nyata dan tetap bertanggung jawab terhadap tujuan kami",
          },
        ],
      },
    ],

    page_7: {
      title: "Hubungi Kami",

      form: {
        placeholder: "Nama Lengkap",
        type: "text",
      },

      form1: {
        placeholder: "No.Telp",
        type: "number",
      },

      form2: {
        placeholder: "Layanan",
        type: "text",
      },

      form3: {
        placeholder: "Email",
        type: "email",
      },

      placeholder: "Tulis pesan mu disini...",

      submit: {
        title: "Kirim Pesan",
        link: "/",
      },
    },
  },

  ServiceData: {
    page_1: {
      title: "Layanan Kami",
    },

    page_2: [
      {
        title: "Hukum pidana",
        // subtitle:
          // "Yaitu menyangkut pendirian firma, CV dan PT, termasuk juga pembuatan perjanjian keagenan, perjanjian distributor dan hal - hal lain yang berkaitan dengannya",
      },
      {
        title: "Hukum perdata",
        // subtitle:
          // "Yaitu menyangkut pembuatan dan pemeriksaan segala bentuk perjanjian yang menyangkut aktivitas perusahaan dibidang perdagangan dan industry",
      },
      {
        title: "Hukum arbitrase",
        // subtitle:
          // "Yaitu pendampingan, konsultan dalam kontrak Pengadaan, dan memberikan pelayanan hukum kepada PA / KPA / PPK / ULP / Pejabat Pengadaan / PPHP / PPSPM/ Bendahara / APIP yang sedang mengadapi permasalahan hukum Pengadaan",
      },
      {
        title: "Layanan bantuan hukum untuk perusahaan atau korporasi",
        // subtitle:
          // "Surat teguran/peringatan yang didasarkan atas pikiran bahwa debitur memang masih beritikad baik untuk berprestasi",
      },
      
    ],
  },

  AboutData: {
    page_1: {
      title: "Tentang Kami",
    },

    page_2: {
      title: "About Us",
      subtitle: `Toba Law Firm adalah lembaga konsultan hukum yang didirikan pada tahun 2024 dengan visi dan misi untuk memberikan bantuan hukum yang berkualitas dan profesional kepada individu dan perusahaan yang menghadapi kesulitan hukum. Kami percaya bahwa setiap orang berhak mendapatkan keadilan dan perlindungan hukum yang sama, dan kami berkomitmen untuk memberikan layanan hukum yang terbaik kepada klien kami.

Dengan tim pengacara yang berpengalaman dan berdedikasi, Toba Law Firm siap membantu klien kami dalam menyelesaikan kasus hukum yang kompleks dan memberikan solusi yang efektif dan efisien. Kami memiliki keahlian dalam berbagai bidang hukum, termasuk litigasi, kontrak, dan hukum bisnis, dan kami siap untuk memberikan bantuan hukum yang tepat kepada klien kami.

Kami memahami bahwa setiap kasus hukum memiliki keunikan dan kompleksitas tersendiri, dan kami berkomitmen untuk memberikan perhatian yang personal dan profesional kepada setiap klien kami. Kami percaya bahwa dengan kerja sama yang erat antara klien dan pengacara, kami dapat mencapai hasil yang terbaik dan memberikan keadilan kepada klien kami.

Toba Law Firm adalah mitra yang dapat diandalkan bagi individu dan perusahaan yang membutuhkan bantuan hukum yang berkualitas dan profesional. Kami siap untuk membantu Anda dalam menyelesaikan kasus hukum Anda dan memberikan solusi yang efektif dan efisien. Hubungi kami hari ini untuk mengetahui lebih lanjut tentang bagaimana kami dapat membantu Anda. `,
      button: {
        link: "/Service",
        title: "Layanan Kami",
      },

      img: teamMember3,
    },

    page_3: [
      {
        title: "Visi",
        icon: <FaStar />,
        content: [
          {
            title:
              "Mewujudkan penegakan hukum yang benar, adil, bermartabat serta jasa pelayanan hukum prima dan partisipatif",
          },
          {
            title:
              "Menjadi Pusat Pelatihan yang dipilih untuk kualitas dan kinerja yang kami tawarkan melalui produk dan layanan kami",
          },
        ],
      },
      {
        title: "Misi",
        icon: <FaCompass />,
        content: [
          {
            title:
              "Menyelesaikan perkara/kasus melalui jalur litigasi & non-litigasi",
          },
          {
            title: "Pendokumentasian serta akses informasi yang komprehensif",
          },
          {
            title:
              "Jaringan kerjasama yang kooperatif dan akomodatif dengan berprinsip pada kode etik profesi, pengembangan sumber daya hukum internal yang progresif, egaliter dan profesional",
          },
          {
            title:
              "Untuk secara konsisten memberikan dan meningkatkan nilai bagi klien dan karyawan kami dengan berkomitmen untuk terus memiliki keunggulan kompetitif, melalui kegiatan harian yang terperinci yang didorong oleh wawasan dunia nyata dan tetap bertanggung jawab terhadap tujuan kami",
          },
        ],
      },
    ],
  },

  TeamData: {
    page_1: {
      title: "Tim Kami",
    },

    page_2: {
      title: "About Us",
      subtitle: `Toba Law Firm adalah lembaga konsultan hukum yang didirikan pada tahun 2024 dengan visi dan misi untuk memberikan bantuan hukum yang berkualitas dan profesional kepada individu dan perusahaan yang menghadapi kesulitan hukum. Kami percaya bahwa setiap orang berhak mendapatkan keadilan dan perlindungan hukum yang sama, dan kami berkomitmen untuk memberikan layanan hukum yang terbaik kepada klien kami.

Dengan tim pengacara yang berpengalaman dan berdedikasi, Toba Law Firm siap membantu klien kami dalam menyelesaikan kasus hukum yang kompleks dan memberikan solusi yang efektif dan efisien. Kami memiliki keahlian dalam berbagai bidang hukum, termasuk litigasi, kontrak, dan hukum bisnis, dan kami siap untuk memberikan bantuan hukum yang tepat kepada klien kami.

Kami memahami bahwa setiap kasus hukum memiliki keunikan dan kompleksitas tersendiri, dan kami berkomitmen untuk memberikan perhatian yang personal dan profesional kepada setiap klien kami. Kami percaya bahwa dengan kerja sama yang erat antara klien dan pengacara, kami dapat mencapai hasil yang terbaik dan memberikan keadilan kepada klien kami.

Toba Law Firm adalah mitra yang dapat diandalkan bagi individu dan perusahaan yang membutuhkan bantuan hukum yang berkualitas dan profesional. Kami siap untuk membantu Anda dalam menyelesaikan kasus hukum Anda dan memberikan solusi yang efektif dan efisien. Hubungi kami hari ini untuk mengetahui lebih lanjut tentang bagaimana kami dapat membantu Anda. `,
      button: {
        link: "/Service",
        title: "Layanan Kami",
      },

      img: handshaking,
    },

    page_3: [
      {
        name: "Melanie Ivone",
        img: teamMember1,
        class: "",
        role: "Konsultan Hukum",
        socials: [
          {
            icon: <FaInstagram />,
            link: "https://instagram.com",
          },
          {
            icon: <FaFacebookF />,
            link: "https://facebook.com",
          },
        ],
      },
      {
        name: "Adv Diansyah Putra Gumay, SH,MM,.",
        img: teamMember2,
        class: "",
        role: "Konsultan & Law Partner",
        socials: [
          {
            icon: <FaInstagram />,
            link: "https://instagram.com",
          },
          {
            icon: <FaFacebookF />,
            link: "https://facebook.com",
          },
        ],
      },
    ],
  },

  ContactData: {
    page_1: {
      title: "Kontak Kami",
    },

    page_2: {
      title: "Hubungi Kami",

      lists: [
        {
          icon: <FaHome />,
          content:
            "Graha Mustika Ratu; Jalan Gatot Subroto No.1 Menteng Dalam, lantai 6, RT.2/RW.1, Menteng Dalam, Tebet, South Jakarta City, Jakarta 12780",
        },
        {
          icon: <FaPhone />,
          content: "+62-858-1116-5429",
        },
        {
          icon: <FaEnvelope />,
          content: "tobalawfirm01@tobalaw.my.id",
        },
      ],

      form: {
        placeholder: "Nama Lengkap",
        type: "text",
      },

      form1: {
        placeholder: "No.Telp",
        type: "number",
      },

      form2: {
        placeholder: "Layanan",
        type: "text",
      },

      form3: {
        placeholder: "Email",
        type: "email",
      },

      placeholder: "Tulis pesan mu disini...",

      submit: {
        title: "Send Message",
        link: "/",
      },
    },
  },
};
