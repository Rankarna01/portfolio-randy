// import UIUX_Apps from "../assets/projects/Sosmed-2.png"
import Latahzan from "../assets/Projects/1.png"
import Logo from "../assets/Projects/logo.png"
import ITechno from "../assets/Projects/weblomba.png"
import Store_Online from "../assets/Projects/webstore.jpg"
import React_Store from "../assets/Projects/Produk 1.jpg"
import Codifyhub from "../assets/Projects/codifyhub.png"
import Kappdrs from "../assets/Projects/kaap.png"
// import Sacco from "../assets/Projects/saccoo.png"
import Coffe from "../assets/Projects/cofee.png"
import web_mi from "../assets/Projects/web mi.png"




const projects = [
    // {
    //     img: UIUX_Apps,
    //     name: "UI UX Apps Online Shop",
    //     demo: "https://www.instagram.com/p/C_0pASpSo_s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    //     code: "https://www.instagram.com/p/C_0pASpSo_s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    //     description: "Ini Merupakan Projek UI UX Saya yakni UI UX Apps Store Online.",
    //     style: {
    //         shadow: "shadow-[#3498AB]",
    //         cover: "from-[#3498AB]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    {
        img: Latahzan,
        name: "Website Tim Basket Latahzan",
        demo: "https://latahzan-reborn.vercel.app/",
        code: "https://github.com/Rankarna01",
        description: "Ini Merupakan Website Profile Tim Basket Latahzan, yang berisi tentang Profile Tim, Jadwal Pertandingan,Gallery, dan Lain-Lain",
        style: {
            shadow: "shadow-[#5E4746]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Logo,
        name: "Logo Kabinet Evolutionare",
        // demo: "https://dev-news-793.vercel.app/",
        // code: "https://github.com/dhawal-793/Dev_News",
        description: "Ini Merupakan Projek Logo Kabinet Evolutionare Yang di buat untuk Organisasi di kampus saya yang bernama HMPS MI",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: ITechno,
        name: "Website Lomba ITechno",
        demo: "https://www.instagram.com/p/C-iN6eUSqRr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        code: "https://www.instagram.com/p/C-iN6eUSqRr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        description: "Ini Adalah Projek Website Lomba ITechno Yang di Gelar Oleh Politeknik Negeri Jakarta Skala Nasional.",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Store_Online,
        name: "Sisetem Toko Online",
        demo: "https://lynk.id/codifyhub/wnp00m1d2re5",
        code: "https://lynk.id/codifyhub/wnp00m1d2re5",
        description: "Website Toko Online  Ini Adalah Projek Dari PLatform Produk DIgital saya sendiri yang Bernama CODIFYHUB Website ini Di Buat Menggunaakn PHP Native dan Tailwind css yang memiliki banyak fitur ",
        style: {
            shadow: "shadow-[#23CEEE]",
            cover: "from-[#23CEEE]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: React_Store,
        name: "Landing Page Store Online",
        demo: "https://spam-detector-793.vercel.app",
        code: "https://github.com/dhawal-793/spam-detection-next",
        description: "Ini Adalah Website Landing Page Toko Online yang di buat menggunakan React JS dan Tailwind CSS",
        style: {
            shadow: "shadow-[#277AF8]",
            cover: "from-[#277AF8]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Codifyhub,
        name: "Codifyhub Profile",
        demo: "https://codify-hub-one.vercel.app/",
        code: "https://codify-hub-one.vercel.app/",
        description: "Website Profile CODIFYHUB Platform Yang Menyediakan Jasa Pembuatan Website Dan Penjualan Source Code Yang Terjangkau.",
        style: {
            shadow: "shadow-[#FFD43B]",
            cover: "from-[#FFD43B]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Kappdrs,
        name: "Website Company Profile",
        demo: "https://kapdssr.com/",
        code: "https://kapdssr.com/",
        description: "Ini Adalh Website Magang Saya Di salah satu perusahaan akuntan publik di medan, yang bernama KAP DRSC",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
    
    {
        img: Coffe,
        name: "Landing Page Cafe Coffee",
        // demo: "https://dhawal-793.github.io/E-Commerce-Website-Front-End-Design/",
        // code: "https://github.com/dhawal-793/E-Commerce-Website-Front-End-Design",
        description: "Website Ini di buat Menggunakan React+Vite js dan Tailwind CSS",
        style: {
            shadow: "shadow-[#CEC3FB]",
            cover: "from-[#CEC3FB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: web_mi,
        name: "Maintance Website Prodi Manajemen Informatika",
        demo: "https://mi.polmed.ac.id/",
        code: "https://mi.polmed.ac.id/",
        description: "Ini Merupakan Projek Saya yang Dimana Maintance Website Prodi Saya Dengan Jobdesk Penambahan Fitur Pada Website.",
        style: {
            shadow: "shadow-[#763145]",
            cover: "from-[#763145]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: Sacco,
    //     name: "Logo Sacco",
    //     demo: "https://www.instagram.com/sacco.polmed/",
    //     code: "https://www.instagram.com/sacco.polmed/",
    //     description: "Ini Adalah Projek Logo saya Untuk Logo Dari Acara Event Perlombaan Akuntansi.",
    //     style: {
    //         shadow: "shadow-[#A582E2]",
    //         cover: "from-[#A582E2]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    // {
    //     img: "",
    //     name: "WordCloud Generator",
    //     demo: "https://github.com/dhawal-793/Wordcloud-maker",
    //     code: "https://github.com/dhawal-793/Wordcloud-maker",
    //     description: "This is a WordCloud Maker, Created using Python. User can create WordCloud by giving paragraph of text as Input.   ",
    //     style: {
    //         shadow: "shadow-emerald-500",
    //         cover: "from-emerald-500",
    // display:" hidden group-hover:flex"
    //     }
    // },
]
export default projects;