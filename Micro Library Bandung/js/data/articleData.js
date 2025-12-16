const articleData = {
    id: 1,
    title: "Micro Library Alun-alun Bandung",
    excerpt: "Pengalaman jalan-jalan dan belajar dengan membaca buku di perpustakaan.",
    category: "Literasi",
    date: "14 November 2025",
    author: {
        name: "Sammy",
        avatar: "./Penulis/Sammy.jpg",
        bio: "Perjalanan di Micro Library Alun-alun Bandung"
    },
    heroImage: "./images/Foto 1.jpg",
    tags: ["Literasi", "Jalan-jalan", "Perpustakaan"],
    content: [
        {
            type: "section",
            id: "pendahuluan",
            title: "Apa itu Perpustakaan?",
            content: `
                <p>Perpustakaan adalah sebuah tempat di mana kita bisa membaca buku. Perpustakaan memiliki berbagai macam jenis buku mulai dari ilmu pengetahuan, fiksi, dan nonfiksi.</p>
            `
        },
        {
            type: "section", 
            id: "pendahuluan II",
            title: "Apa itu Micro Library Alun-alun Bandung?",
            content: `
                <p>Micro Library Alun-alun Bandung adalah sebuah perpustakaan yang berada di alun-alun Bandung. Micro Library ini diresmikan oleh walikota bandung Muhammad Farhan pada tanggal 19 Mei 2025. Micro Library Alun-alun Bandung ini bukan hanya sekedar tempat membaca buku tapi juga sebagai tempat melestarikan sejarah KAA (Konferensi Asia Afrika).</p>

                <img src="./images/Foto 6.jpg" alt="image" class="content-image">
                
            `
        },
        {
            type: "section",
            id: "fungsi",
            title: "Fungsi Micro Library Alun-alun Bandung", 
            content: `

                <img src="./images/Foto 5.jpg" alt="image" class="content-image">

                <p>Fungsi dari Micro Library adalah untuk menarik minat orang-orang guntuk membaca buku serta menyimpan sejarah dari KAA (Konferensi Asia Afrika).</p>
            `
        }
    ]
};

const relatedPosts = [
    {
        id: 2,
        title: "Pabrik Mochi Arjuna Wijaya Sukabumi",
        date: "28 Mei 2025", 
        image: "../Foto (5).jpg",
        href : "https://pabrik-mochi-sukabumi-blog-verse.vercel.app/"
    }
];
