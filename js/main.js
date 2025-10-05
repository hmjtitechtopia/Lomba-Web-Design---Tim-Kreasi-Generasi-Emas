document.getElementById("btnExplore").addEventListener("click", function () {
  document.getElementById("explore").scrollIntoView({
    behavior: "smooth"
  });
});

const provinces = [
  {
    name: "Aceh",
    capital: "Banda Aceh",
    region: "Sumatera",
    image: "aceh.jpg",
    culture: "Budaya Aceh sangat kaya dan kental dengan nilai-nilai Islami, tercermin dalam kesenian seperti Tari Saman dan Seudati, tradisi adat yang beragam seperti Peusijuek (upacara syukur) dan Meugang (menyambut hari raya), serta kekayaan kuliner, sastra, dan arsitektur tradisional seperti Rumah Krong Bade. Kebudayaan Aceh juga memiliki ciri khas seperti Senjata Rencong dan pakaian adat, serta kearifan lokal dalam mengatur kehidupan masyarakat. ",
    food: "Mie Aceh, Sate Matang, Ayam Tangkap, Kuah Pliek U, dan Asam Keueng",
    house: "Rumah Krong Bade.",
    history: "Aceh pertama dikenal dengan nama Aceh Darussalam (1511–1945). Provinsi ini dibentuk pada 1956 dengan nama Aceh sebelum diubah menjadi Daerah Istimewa Aceh (1959–2001), Nanggroe Aceh Darussalam (2001–2009), dan kembali ke Aceh sejak 2009. Sebelumnya, nama Aceh biasa ditulis Acheh, Atjeh, dan Achin",
    link: "https://id.wikipedia.org/wiki/Aceh"
  },
  {
    name: "Sumatera Utara",
    capital: "Medan",
    region: "Sumatera",
    image: "sumatra-utara.jpg",
    culture: "Budaya Sumatera Utara sangat beragam, didominasi oleh Suku Batak dan Nias, serta suku lain seperti Melayu, dengan keunikan pada upacara adat seperti Fahombo (Lompat Batu) suku Nias dan Mangongkal Holi (pemindahan tulang belulang) suku Batak.",
    food: "Arsik, Mi Gomak, Soto Medan, Lontong Medan, Nasi Kentut, Bika Ambon",
    house: "Rumah Bolon.",
    history: "Sumatera Utara memiliki sejarah panjang yang dipengaruhi oleh berbagai kerajaan besar, seperti Kerajaan Aru, Panai, serta Kerajaan Batak di pedalaman, sebelum akhirnya wilayah pesisir dikuasai Kesultanan Deli, Serdang, dan Langkat. Kedatangan bangsa Eropa, khususnya Belanda, membawa pengaruh besar melalui pembukaan perkebunan tembakau, karet, dan teh yang menjadikan Sumatera Utara sebagai salah satu pusat ekonomi kolonial. Selain itu, kota Medan tumbuh pesat sebagai pusat perdagangan dan pemerintahan kolonial. Pada masa pergerakan nasional, tokoh-tokoh dari Sumatera Utara turut berperan penting dalam memperjuangkan kemerdekaan Indonesia.",
    link: "https://id.wikipedia.org/wiki/Sumatera_Utara"
  },

  {
    name: "Sumatera Barat",
    capital: "Padang",
    region: "Sumatera",
    image: "sumatra-barat.jpeg",
    culture: "Sumatra Barat terkenal dengan alat musik tradisional saluang, bansi, talempong, rabab, pupuik, serunai, dan gandang tabuik. Ada pula saluang jo dendang, yakni penyampaian dendang (cerita berlagu) yang diiringi saluang yang dikenal juga dengan nama sijobang.Minangkabau umumnya dipengaruhi oleh agama Islam, ada juga sebuah tari tradisi yang bersifat klasik, di antaranya Tari Pasambahan, Tari Piring, Tari Payung, dan Tari Indang. Selain itu, ada juga senjata tradisional Sumatera Barat adalah Keris dan Kurambiak atau Kerambit berbentuk seperti kuku harimau.",
    food: "Rendang, Sate Padang, dan Ayam Pop",
    house: "Rumah Gadang.",
    history: "Nama Provinsi Sumatera Barat bermula pada zaman Vereenigde Oostindische Compagnie (VOC), di mana sebutan wilayah untuk kawasan pesisir barat Sumatra adalah Hoofdcomptoir van Sumatra's westkust. Kemudian dengan semakin menguatnya pengaruh politik dan ekonomi VOC, sampai abad ke 18 wilayah administratif ini telah mencakup kawasan pantai barat Sumatra mulai dari Barus sampai Inderapura. Pada awal kemerdekaan Indonesia pada tahun 1945, wilayah Sumatera Barat tergabung dalam provinsi Sumatra yang berpusat di Bukittinggi. Empat tahun kemudian, Provinsi Sumatra dipecah menjadi tiga provinsi, yakni Sumatera Utara, Sumatra Tengah, dan Sumatera Selatan. Sumatera Barat beserta Riau dan Jambi merupakan bagian dari keresidenan di dalam Provinsi Sumatra Tengah.",
    link: "https://id.wikipedia.org/wiki/Sumatera_Barat"
  },
  {
    name: "Riau",
    capital: "Pekanbaru",
    region: "Sumatera",
    image: "riau.jpg",
    culture: "Budaya Riau sangat didominasi oleh kebudayaan Melayu, yang dicerminkan dalam bahasa, adat istiadat, seni, dan nilai-nilai kehidupannya yang berakar pada ajaran Islam dan bersifat sopan santun. Beberapa ciri khas budaya Riau meliputi upacara Tepuk Tepung Tawar, berbagai jenis tarian tradisional seperti Zapin dan Inai, serta seni sastra seperti Gurindam dan Syair. ",
    food: "Mie Sagu, Gulai Ikan Patin, Bolu Kemojo, dan Ikan Selais Asap.",
    house: "Rumah Selaso Jatuh Kembar.",
    history: "Riau diduga telah dihuni sejak masa antara 10.000-40.000 SM. Kesimpulan ini diambil setelah penemuan alat-alat dari zaman Pleistosin di Daerah Aliran Sungai (DAS) Sungai Sengingi di Kabupaten Kuantan Singingi pada bulan Agustus 2009. Invasi Belanda yang agresif ke pantai timur Sumatra tidak dapat dihadang oleh Siak. Belanda mempersempit wilayah kedaulatan Siak, dengan mendirikan Keresidenan Riau (Residentie Riouw) di bawah pemerintahan Hindia Belanda yang berkedudukan di Tanjung Pinang.",
    link: "https://id.wikipedia.org/wiki/Riau"
  },
  {
    name: "Kepulauan Riau",
    capital: "Tanjung Pinang",
    region: "Sumatera",
    image: "kepulauan-riau.jpg",
    culture: "Budaya Kepulauan Riau sangat dipengaruhi oleh budaya Melayu, Tionghoa, dan Islam, dengan keragaman dalam seni (tari, musik, teater seperti Makyong dan Boria), adat istiadat, upacara tradisional (seperti Merisik dan Tepuk Tepung Tawar), rumah adat (seperti Belah Bubung), serta berbagai ritual dan kepercayaan yang masih dilestarikan hingga kini.   ",
    food: "Mie Lendir dengan kuah kental kacang, Mie Tarempa, Lakse, dan Gonggong (siput laut).",
    house: "Rumah Belah Bubung.",
    history: "Kepulauan Riau sejak lama menjadi jalur perdagangan penting di Selat Malaka dan Laut Cina Selatan. Wilayah ini pernah berada di bawah Sriwijaya, Malaka, hingga berdirinya Kesultanan Riau-Lingga. Pada masa kolonial, Belanda dan Inggris membagi kekuasaan melalui Traktat London 1824. Setelah kemerdekaan, Kepulauan Riau bergabung dengan Provinsi Riau, lalu resmi menjadi provinsi sendiri pada tahun 2002 dengan Tanjungpinang sebagai ibu kota.",
    link: "https://id.wikipedia.org/wiki/Kepulauan_Riau"
  },
  {
    name: "Jambi",
    capital: "Jambi",
    region: "Sumatera",
    image: "jambi.jpg",
    culture: "Musik Jambi banyak dipengaruhi oleh nuansa Melayu dan Arab, diantaranya adalah alat musik tradisional, seperti Gambus Jambi, Gendang Melayu, Sekdu, Kompangan, Marawis, Cangor dan Kelintang Jolo. Terdapat beberapa macam jenis tari tradisional khas Jambi, di antaranya tari Sekapur Sirih, Selampit Delapan, Inai, Rentak Kudo, Mengaup dan Rentak Besapih.",
    food: "Beberapa contoh makanan dari Jambi yang cukup populer adalah Nasi gemuk, Tempoyak, Kerutup ikan, Daging masak hitam, Gulai tepek ikan, Gulai terjun, dan Gulai tekuyung.",
    house: "Rumah Panggung Kajang Lako.",
    history: "Jambi merupakan wilayah yang terkenal dalam literatur kuno. Nama negeri ini sering disebut dalam prasasti-prasasti dan juga berita-berita Tiongkok. Ini merupakan bukti bahwa, orang Cina telah lama memiliki hubungan dengan Jambi, yang mereka sebut dengan nama Chan-pei. Jambi ini pernah dikuasai oleh beberapa kekuatan besar, mulai dari Sriwijaya, Singosari, Majapahit, Malaka hingga Johor-Riau. Terkenal dan selalu menjadi rebutan merupakan tanda bahwa Jambi sangat penting pada masa dahulu.",
    link: "https://id.wikipedia.org/wiki/Jambi"
  },
  {
    name: "Sumatera Selatan",
    capital: "Palembang",
    region: "Sumatera",
    image: "sumatra-selatan.jpeg",
    culture: "Gending Sriwijaya merupakan lagu daerah dan juga tarian yang cukup populer dari palembang. Lagu Gending Sriwijaya ini dibawakan untuk mengiringi tarian tarian Gending Sriwijaya. Baik lagu maupun tariannya menggambarkan keagungan budaya, kejayaan, dan keagungan bekas Kerajaan Sriwijaya yang pernah berjaya menyatukan Nusantara bagian barat.",
    food: "Pempek Kapal Selam dan Keriting, dicampur dengan Kuah Cuko, Laksan Palembang, Semangkuk Tekwan, dan Mie celor Palembang.",
    house: "Rumah Limas.",
    history: "Sumatera Selatan telah dihuni manusia sejak zaman Palaeolitikum. Bukti adanya permukiman tersebut dibuktikan dengan ditemukannya perkakas zaman Paleolitikum di dasar sungai Saling dan sungai Kikim di Desa Bunga Mas, Kabupaten Lahat dan Tujuh puluh delapan kerangka yang berasal dari 3.000–14.000 tahun yang lalu. Sekitar tahun 300 SM, masyarakat Deutero-Melayu tiba di wilayah ini dan mendorong penduduk asli ke pedalaman.",
    link: "https://id.wikipedia.org/wiki/Sumatera_Selatan"
  },
  {
    name: "Bangka Belitung",
    capital: "Pangkal Pinang",
    region: "Sumatera",
    image: "bangka-belitung.jpg",
    culture: "Budaya Bangka Belitung kaya dengan perpaduan Melayu dan Tionghoa, tercermin dalam upacara adat seperti Perang Ketupat dan Peh Cun, kesenian seperti Tari Campak dan musik dambus, serta kuliner khas seperti Mie Belitung. Masyarakatnya menjunjung tinggi nilai kekeluargaan dan gotong royong, yang diwujudkan dalam moto Sepintu Sedulang.",
    food: "Lempah, Asem Pedas, Mangut Pari, Kembung Bertelur, dan Gegodo Udang.",
    house: "Rumah Rakit, Rumah Limas, dan Rumah Panggung.",
    history: "Wilayah Provinsi Kepulauan Bangka Belitung, terutama Pulau Bangka berganti-ganti menjadi daerah taklukan Kerajaan Sriwijaya dan Majapahit. Berdasarkan UU Nomor 27 Tahun 2000 wilayah Kota Pangkalpinang, Kabupaten Bangka dan Kabupaten Belitung menjadi Provinsi Kepulauan Bangka Belitung, dengan Pejabat Gubernur pertama Drs Amur Muhasyim SH dan Ketua DPRD pertama H. Emron Pangkapi (Bang Emran).",
    link: "https://id.wikipedia.org/wiki/Kepulauan_Bangka_Belitung"
  },
  {
    name: "Bengkulu",
    capital: "Bengkulu",
    region: "Sumatera",
    image: "bengkulu.jpg",
    culture: "Budaya Bengkulu kaya akan tradisi seperti Festival Tabot, sebuah peringatan peristiwa Karbala. Budaya ini juga mencakup kain Besurek dengan motif tulisan Arab, upacara adat seperti Sedekah Rame dan Kedurai Agung, serta kesenian seperti tarian tradisional dan sistem pengelolaan hutan adat Rimbo Larangan. Keberagaman suku seperti Rejang, Serawai, dan Melayu Bengkulu juga membentuk keunikan budaya daerah",
    food: "Pendap, Bagar Hiu, dan Lempuk Durian",
    house: "Rumah Bubungan Lima.",
    history: "Pada tahun 1930-an, Bengkulu menjadi tempat pembuangan sejumlah aktivis pendukung kemerdekaan, termasuk Sukarno. Pada masa inilah Sukarno berkenalan dengan Fatmawati yang kelak menjadi istrinya. Setelah kemerdekaan Indonesia, Bengkulu menjadi keresidenan dalam provinsi Sumatera Selatan. Wilayah Bengkulu dahulu juga meliputi Kawedanan Krui yang meliputi Kabupaten Lampung Barat dan Kabupaten Pesisir Barat saat ini. Pada tanggal 18 November 1968 Bengkulu menjadi provinsi Indonesia ke-26 (termuda sebelum Timor Timur).",
    link: "https://id.wikipedia.org/wiki/Bengkulu"
  },
  {
    name: "Lampung",
    capital: "Bandar Lampung",
    region: "Sumatera",
    image: "lampung.jpg",
    culture: "Budaya Lampung kaya akan tradisi unik, di antaranya Tapis (kain tenun), Rumah Adat Nawo Sesat, upacara adat seperti Balimau dan Blangikhan, serta beragam tarian seperti Tari Tapis dan Nyambai. Masyarakat Lampung terbagi menjadi dua kelompok adat utama, yaitu Pepadun (di daratan) dan Saibatin (di pesisir), yang memiliki ciri budaya berbeda. Selain itu, musik tradisional seperti Gambus Lunik dan Kerenceng juga menjadi bagian dari warisan budaya takbenda Lampung.",
    food: "Seruit, Gulai Taboh, Tempoyak, Kemplang, Keripik Pisang, dan Kue Maksuba.",
    house: "Rumah Nuwou Sesat.",
    history: "Pada abad ke- 7 tahun 671 Masehi zaman pra-sejarah Lampung di Sumatra, Sriwijaya menguasai sebagian besar Asia Tenggara hingga abad ke-11 Masehi, di abad ke-13 tahun 1289 Masehi penyebaran Islam awal bermula dari Batu Brak di tengkuk gunung pesagi daerah hanibung yang ditandai dengan adanya peninggalan pra-sejarah hingga zaman sejarah yakni Dolmen dan Megalitikum tertua di tanah Lampung dalam ajang Kepaksian Sekala Brak.",
    link: "https://id.wikipedia.org/wiki/Lampung"
  },

  {
    name: "DKI Jakarta",
    capital: "Jakarta",
    region: "Jawa",
    image: "jakarta.jpg",
    culture: "Budaya DKI Jakarta adalah budaya mestizo atau campuran dari berbagai etnis, terutama Budaya Betawi yang merupakan penduduk asli Jakarta. Budaya ini terlihat dalam berbagai aspek seperti seni pertunjukan (Ondel-ondel, Lenong Betawi), tarian, musik (Gambang Kromong), kuliner (Nasi Uduk, Kerak Telor), pakaian adat, rumah adat, dan bahasa khas Betawi. Keberagaman ini juga dipengaruhi oleh pendatang dari berbagai penjuru Nusantara dan bangsa asing, menciptakan identitas budaya yang unik dan dinamis.",
    food: "Nasi Uduk, Soto Betawi, Kerak Telor, Gado-Gado, Asinan Betawi, Roti Buaya, Ketoprak, dan Semur Jengkol.",
    house: "Rumah Kebaya.",
    history: "Jakarta pertama kali dikenal sebagai salah satu pelabuhan Kerajaan Sunda yang bernama Sunda Kalapa (Aksara Sunda: ᮞᮥᮔ᮪ᮓ ᮊᮜᮕ), berlokasi di muara Sungai Ciliwung. Ibu kota Kerajaan Sunda yang dikenal sebagai Dayeuh Pakuan Padjadjaran atau Pajajaran (sekarang Bogor) dapat ditempuh dari pelabuhan Sunda Kelapa selama dua hari perjalanan.",
    link: "https://id.wikipedia.org/wiki/Daerah_Khusus_Ibukota_Jakarta"
  },
  {
    name: "Banten",
    capital: "Serang",
    region: "Jawa",
    image: "banten.jpg",
    culture: "Budaya Banten meliputi seni bela diri seperti Pencak Silat dan Debus, tarian tradisional seperti Tari Cokek dan Tari Topeng, alat musik seperti Dogdog Lojor dan Rampak Bedug, bahasa dialek Banten, serta tradisi adat seperti Seren Taun dan ritual masyarakat Suku Baduy yang menjaga kearifan lokal.",
    food: "Sate Bandeng, Rabeg, Angeun Lada, Sirup Rosella, dan Es Kuwut.",
    house: "Rumah Sulah Nyanda.",
    history: "Banten atau dahulu dikenal di dunia barat dengan nama Bantam pada masa lalu merupakan sebuah daerah dengan kota pelabuhan yang sangat ramai, serta dengan masyarakat yang terbuka dan makmur. Banten pada abad ke-5 merupakan bagian dari Kerajaan Tarumanagara. Salah satu prasasti peninggalan Kerajaan Tarumanagara adalah Prasasti Cidanghiyang atau prasasti Lebak, yang ditemukan di Kampung Lebak di tepi Ci Danghiyang, Kecamatan Munjul, Pandeglang, Banten. ",
    link: "https://id.wikipedia.org/wiki/Banten"
  },
  {
    name: "Jawa Barat",
    capital: "Bandung",
    region: "Jawa",
    image: "jawa-barat.jpg",
    culture: "Budaya Jawa Barat didominasi kebudayaan Sunda yang kental dengan nilai keislaman, filosofi silih asih, silih asah, silih asuh, dan berbagai kesenian seperti Wayang Golek, Jaipong, serta Angklung. Tradisinya meliputi upacara syukuran panen Seren Taun, pernikahan seperti Sawer dan Nincak Endog, serta pakaian adat Baju Pangsi dan senjata tradisional Kujang.",
    food: "Seblak, Batagor, Cireng, Lotek, Karedok, Nasi Tutug Oncom, dan Empal Gentong, serta jajanan manis seperti Combro, Misro, Peuyeum, dan Bandros.",
    house: "Rumah Jolopong, Rumah Julang Ngapak, Rumah Badak Heuay, dan Rumah Togok Anjing.",
    history: "Tanggal 27 Desember 1949 Jawa Barat menjadi Negara Pasundan yang merupakan salah satu negara bagian dari Republik Indonesia Serikat sebagai hasil kesepakatan tiga pihak dalam Konferensi Meja Bundar: Republik Indonesia, Bijeenkomst voor Federaal Overleg (BFO), dan Belanda. Kesepakatan ini disaksikan juga oleh United Nations Commission for Indonesia (UNCI) sebagai perwakilan PBB. Jawa Barat kembali bergabung dengan Republik Indonesia pada tahun 1950.",
    link: "https://id.wikipedia.org/wiki/Jawa_Barat"
  },
  {
    name: "Jawa Tengah",
    capital: "Semarang",
    region: "Jawa",
    image: "jawa-tengah.jpg",
    culture: "Budaya Jawa Tengah kaya akan tradisi, kesenian, dan kuliner yang dipengaruhi oleh warisan Hindu-Buddha dan Islam. Beberapa contohnya meliputi seni pertunjukan seperti wayang kulit dan tari tradisional (misalnya Tari Gambyong), upacara adat seperti Nyadran dan Tingkeban, serta kekayaan kuliner seperti Batik dan Sate Blengong. Selain itu, ada juga arsitektur khas seperti rumah Joglo dan festival seperti Festival Arak-arakan Cheng Ho di Semarang.",
    food: "Lumpia Semarang, Soto Kudus, Nasi Liwet Solo, dan Tahu Gimbal.",
    house: "Rumah Joglo.",
    history: "Provinsi Jawa Tengah sebagai provinsi dibentuk sejak zaman Hindia Belanda. Hingga tahun 1905, Jawa Tengah terdiri atas 5 wilayah (gewesten), yakni Semarang, Pati, Kedu, Banyumas, dan Pekalongan. Surakarta masih merupakan daerah swapraja kerajaan (vorstenland) yang berdiri sendiri dan terdiri dari dua wilayah, Kasunanan Surakarta dan Mangkunegaran, sebagaimana Yogyakarta.",
    link: "https://id.wikipedia.org/wiki/Jawa_Tengah"
  },
  {
    name: "DI Yogyakarta",
    capital: "Yogyakarta",
    region: "Jawa",
    image: "yogyakarta.jpg",
    culture: "Budaya Daerah Istimewa Yogyakarta meliputi Keraton Yogyakarta sebagai pusat kebudayaan Jawa, upacara adat seperti Sekaten dan Grebeg Maulud, kesenian pertunjukan seperti wayang kulit dan Sendratari Ramayana, serta kuliner khas seperti gudeg dan bakpia. Budaya ini juga mencakup nilai-nilai seperti toleransi beragama dan penghargaan terhadap seni, yang membentuk identitas kota yang kaya dan beragam",
    food: "Sate Klathak, Sego Pecel, Kipo, Bakpia, Mangut Lele, Thiwul, dan Gudeg.",
    house: "Rumah Joglo.",
    history: "Dalam sejarah perjuangan mempertahankan kemerdekaan Negara Kesatuan Republik Indonesia (NKRI), DIY mempunyai peranan yang penting. Terbukti pada tanggal 4 Januari 1946 sampai dengan tanggal 27 Desember 1949[11] pernah dijadikan sebagai ibu kota Indonesia. Tanggal 4 Januari inilah yang kemudian ditetapkan menjadi hari Yogyakarta Kota Republik pada tahun 2010.",
    link: "https://id.wikipedia.org/wiki/Daerah_Istimewa_Yogyakarta"
  },
  {
    name: "Jawa Timur",
    capital: "Surabaya",
    region: "Jawa",
    image: "jawa-timur.jpg",
    culture: "Budayanya beragam, mencakup suku Jawa, Madura, Osing, Tengger, dan Bawean dengan kesenian khas seperti ludruk, ketoprak, reog Ponorogo, tari remo, hingga karapan sapi, serta tradisi upacara adat yang kuat di berbagai daerah.",
    food: "Rujak Cingur, Rawon, Tahu Tek, Nasi Krawu, Lontong Balap, Pecel, dan Bakwan Malang.",
    house: "Rumah Joglo Situbondo dan Joglo Sinom.",
    history: "Jawa Timur memiliki sejarah panjang sejak masa prasejarah dengan penemuan fosil manusia purba di Trinil dan Mojokerto, berkembang menjadi pusat kerajaan besar seperti Kanjuruhan, Kediri, Singhasari, dan Majapahit, kemudian masuk masa kolonial Belanda hingga akhirnya bergabung ke dalam Republik Indonesia.",
    link: "https://id.wikipedia.org/wiki/Jawa_Timur"
  },
  {
    name: "Kalimantan Barat",
    capital: "Pontianak",
    region: "Kalimantan",
    image: "kalimantan-barat.jpg",
    culture: "Budaya Kalimantan Barat sangat beragam, dipengaruhi oleh suku Dayak, Melayu, Tionghoa, Jawa, dan suku pendatang lainnya; bahasa cukup banyak ragam, termasuk berbagai dialek Dayak dan Melayu, seni tradisional seperti tarian adat, alat musik, sastra lisan, tenun, kerajinan anyam bambu/rotan, kegiatan adat lokal seperti Robo’-Robo’ di Mempawah, serta adat-istiadat masyarakat yang tetap kuat di pedalaman dan pesisir.",
    food: "Pengkang, Bubur Pedas, Chai Kue, dan Sotong Pengkong.",
    house: "Rumah Betang.",
    history: "Kalimantan Barat resmi menjadi provinsi pada 1 Januari 1957 lewat UU No. 25 Tahun 1956, setelah sebelumnya wilayahnya termasuk bagian dari pemerintahan Hindia Belanda yang menguasai berbagai kerajaan dan kesultanan seperti Sambas, Pontianak, Sukadana, dan Lawai (Tanjungpura); sejak masa kolonial, daerah ini menjadi pusat perdagangan, jalur masuk orang Tionghoa dan Melayu, serta kontak dengan kerajaan di luar pulau, lalu setelah kemerdekaan menjadi bagian dari Negara Kesatuan Republik Indonesia.",
    link: "https://id.wikipedia.org/wiki/Kalimantan_Barat"

  },
  {
    name: "Kalimantan Tengah",
    capital: "Palangka Raya",
    region: "Kalimantan",
    image: "kalimantan-tengah.jpg",
    culture: "Budaya di Kalimantan Tengah sangat dipengaruhi oleh suku Dayak Ngaju, Dayak Bakumpai, Dayak Ma’anyan, selain suku pendatang seperti Banjar, Bugis, Jawa, dan Melayu; mereka melestarikan adat istiadat dan kepercayaan tradisional Dayak, upacara‐upacara adat, seni tari, musik dan vokal tradisional, pakaian pengantin khas, kerajinan tangan, serta pengertian hidup “Isen Mulang” sebagai semboyan lokal yang mencerminkan keberanian dan kesetiaan terhadap tanah leluhur. ",
    food: "Juhu Umbut Rotan, Kalumpe, Wadi, Bangamat, Kenta, Hintalu Karuang, dan Sasangan Patin.",
    house: "Rumah Huma Betang.",
    history: "Kalimantan Tengah berdiri sebagai provinsi sejak 23 Mei 1957 lewat UU Darurat No. 10 Tahun 1957, hasil pemekaran dari Kalimantan, setelah aspirasi dari masyarakat daerah Barito, Kapuas, dan Kotawaringin yang mendesak agar wilayah mereka mendapat status otonom; ibu kotanya adalah Palangka Raya, yang dipilih setelah Kongres Rakyat Kalimantan Tengah dan berbagai perundingan lokal.",
    link: "https://id.wikipedia.org/wiki/Kalimantan_Tengah"
  },
  {
    name: "Kalimantan Selatan",
    capital: "Banjarmasin",
    region: "Kalimantan",
    image: "kalimantan-selatan.jpg",
    culture: "Budaya Kalimantan Selatan sangat dipengaruhi oleh suku Banjar sebagai mayoritas, ditambah suku-Dayak di Pegunungan Meratus dan transmigrasi dari berbagai suku; budaya mereka meliputi bahasa Banjar (dengan dialek Kuala dan Hulu), adat istiadat Islam yang kuat, kesenian tari Banjar seperti Japin dan Baksa Kembang, musik, pakaian pengantin, kerajinan, serta tradisi lisan dan kuliner khas daerah.",
    food: "Soto Banjar, Ketupat Kandangan, Manday, Gangan Asam Banjar, Iwak Pakasam, Amparan Tatak, Dodol Kandangan, dan Kue Bingka",
    house: "Rumah Bubungan Tinggi.",
    history: "Kalimantan Selatan awalnya merupakan bagian dari Kesultanan Banjar yang kemudian menggantikan kerajaan-kerajaan sebelumnya seperti Negara Dipa dan Negara Daha; setelah Indonesia merdeka, digunakan dasar provinsi Kalimantan (1945-1950), lalu melalui beberapa undang-undang (UU No. 25 Tahun 1956, UU No. 27 Tahun 1959) wilayah ini dipecah-pecah dan akhirnya terbentuk sebagai Provinsi Kalimantan Selatan dengan batas administrasi seperti sekarang; ibu kotanya resmi dipindah dari Banjarmasin ke Banjarbaru sejak 2022.",
    link: "https://id.wikipedia.org/wiki/Kalimantan_Selatan"
  },
  {
    name: "Kalimantan Timur",
    capital: "Samarinda",
    region: "Kalimantan",
    image: "kalimantan-timur.jpg",
    culture: "Budaya Kalimantan Timur sangat kaya dan beragam, terutama dari dua suku utama, Dayak dan Kutai, yang memiliki tradisi seperti Upacara Erau untuk Kutai dan ritual Belian serta Tarian Hudoq untuk Dayak. Budaya ini tercermin dalam rumah adat seperti Rumah Betang, berbagai jenis tarian, upacara adat seperti Pesta Hudoq dan Tiwah, serta pakaian adat seperti Ulap Doyo dan Baju Adat Takwo",
    food: "Ayam Cincane, Nasi Bekepor, Sate Payau, Sayur Gangan Asm Kutau, dan Gammi Bawis.",
    house: "Rumah Lamin.",
    history: "Wilayah Kalimantan Timur dahulu mayoritas adalah hutan hujan tropis. Terdapat beberapa kerajaan yang berada di Kalimantan Timur, di antaranya adalah Kerajaan Kutai Martapura (beragama Hindu), Kesultanan Kutai Kertanegara ing Martapura, Kesultanan Pasir, dan Kesultanan Berau. Di pusat-pusat kerajaan tersebut berkembang bahasa serumpun yang memiliki benang merah dari leluhur bahasa yang sama yaitu rumpun bahasa Melayik.",
    link: "https://id.wikipedia.org/wiki/Kalimantan_Timur"
  },
  {
    name: "Kalimantan Utara",
    capital: "Tanjung Selor",
    region: "Kalimantan",
    image: "kalimantan-utara.jpg",
    culture: "Budaya Kalimantan Utara sangat heterogen; penduduknya terdiri dari suku Dayak (antara lain Lun Bawang, Kenyah, Murut), Tidung, Bulungan, Melayu, dan banyak suku pendatang seperti Jawa, Bugis, Mandar, serta masyarakat dari suku-suku laut; agama Islam adalah mayoritas, diikuti Kristen; budaya lokal tercermin dalam bahasa, tradisi lisan, alat musik tradisional, pakaian adat, dan upacara-adat serta keberadaan senjata tradisional seperti mandau sebagai bagian identitas budaya.",
    food: "Lawa, Nasi Subut, Tudai, Kepiting Soka, Kie Lapis Cempedak, dan Dodol",
    house: "Rumah Baloy.",
    history: "Kalimantan Utara menjadi provinsi baru di Indonesia berdasarkan UU No. 20 Tahun 2012, disahkan DPR pada 25 Oktober 2012 dan efektif sejak 2013. Provinsi ini dibentuk dari pemekaran wilayah dari Provinsi Kalimantan Timur dan sebelumnya merupakan bagian dari kesultanan dan kerajaan lokal seperti Kesultanan Bulungan dan daerah Nagri Marancang, yang pada masa kolonial Belanda mengalami berbagai perjanjian dan perubahan administratif.",
    link: "https://id.wikipedia.org/wiki/Kalimantan_Utara"
  },

  // SULAWESI
  {
    name: "Sulawesi Utara",
    capital: "Manado",
    region: "Sulawesi",
    image: "sulawesi-utara.jpg",
    culture: "Budaya Sulawesi Utara kaya akan tradisi beragam dari berbagai suku seperti Minahasa, Sangihe, dan Bolaang Mongondow, yang mencakup upacara adat (Tulude, Mamu'a Ton'na, Batifar), tarian (Maengket), musik tradisional, seni kerajinan (anyaman, ukiran), hingga kuliner khas seperti nasi jaha dan dodol. Budaya Mapalus, yang berarti gotong royong, juga menjadi ciri khas masyarakat Minahasa.",
    food: "Bubur Tinutuan, Cakalang Fufu, Sate Kolombi, Klappertaart, Kawok, Mujair Bakar, dan Saut.",
    house: "Rumah Walewangko.",
    history: "Sulawesi Utara memiliki bukti pemukiman manusia sejak zaman prasejarah, seperti temuan fosil Stegodon, kubur batu waruga, dan benda megalitik; wilayah ini pernah menjadi bagian dari kerajaan-kerajaan lokal dan rute perdagangan rempah-rempah serta terlibat dalam kolonialisme Portugis, Spanyol, dan Belanda; setelah kemerdekaan dan melalui berbagai masa administratif akhirnya ditetapkan sebagai provinsi pada tanggal 23 September 1964. ",
    link: "https://id.wikipedia.org/wiki/Sulawesi_Utara"
  },

  {
    name: "Gorontalo",
    capital: "Gorontalo",
    region: "Sulawesi",
    image: "gorontalo.jpg",
    culture: "Budaya Gorontalo kaya akan warisan kesenian, adat istiadat, dan tradisi yang berakar dari sejarah persekutuan lima kerajaan (Duluwo Limo lo Pohala'a) serta dipengaruhi kebudayaan luar seperti Melayu, Arab, dan Tionghoa. Beberapa aspek utama budaya Gorontalo meliputi tarian (Tari Dana-Dana, Tari Tidi), ritual (Tumbilotohe, Hileiya), sastra lisan (Tahuli, Lohidu), makanan khas (Binte Biluhuta), seni bela diri (Langga), dan tradisi kekeluargaan yang erat dengan nilai gotong royong, sebagaimana tercermin dalam prinsip Adat Bersendi Sara, Sara Bersendi Kitabullah",
    food: "Binte Biluhuta, Ilabulo, Tili Aya, Perkedel Nike, dan Sate Tuna.",
    house: "Rumah Bantayo Poboide.",
    history: "Gorontalo menjadi provinsi resmi pada 5 Desember 2000 berdasarkan UU No. 38 Tahun 2000 setelah sebelumnya merupakan bagian dari Sulawesi Utara; secara historis wilayah ini pernah terdiri dari kerajaan-kerajaan tradisional seperti Suwawa sekitar abad ke-8 M, memiliki sistem pemerintahan adat dengan struktur Pohala’a dan lembaga-lembaga seperti Bantayo Poboide, Buatula Totolu, Buatula Bubato, serta peran Raja (Olongia), dan sejak zaman dahulu menjadi pusat perdagangan dan jalur masuk Islam di Sulawesi Utara dan wilayah sekitarnya.",
    link: "https://id.wikipedia.org/wiki/Gorontalo"
  },
  {
    name: "Sulawesi Tengah",
    capital: "Palu",
    region: "Sulawesi",
    image: "sulawesi-tengah.jpeg",
    culture: "Budaya Sulawesi Tengah ditandai dengan banyaknya suku seperti Kaili, Lore, Pamona, Mori, Bungku, Saluan, Tolitoli, Buol, selain suku pendatang; bahasa daerah sekitar 21 bahasa digunakan; seni tari dan musik tradisional seperti Tari Dero, penggunaan instrumen gong, kakula, lalove, jimbe; adanya tradisi tenun ikat ganda, upacara-upacara adat, kepercayaan lokal, serta kebiasaan masyarakat menyambut tamu dengan persembahan seperti ayam putih, beras, telur, dan tuak.",
    food: "Kaledo, Uta Dada, Kapurung, Milu Siram, Duo Sale, dan Onyop.",
    house: "Rumah adat Tambi.",
    history: "Sulawesi Tengah secara resmi menjadi provinsi pada 13 April 1964 berdasarkan UU nomor terkait, setelah sebelumnya wilayahnya merupakan bagian dari berbagai kerajaan lokal dan pimpinan adat, serta mengalami proses penaklukan militer Belanda dan integrasi ke dalam struktur negara Indonesia pasca kemerdekaan.",
    link: "https://id.wikipedia.org/wiki/Sulawesi_Tengah"
  },
  {
    name: "Sulawesi Barat",
    capital: "Mamuju",
    region: "Sulawesi",
    image: "sulawesi-barat.jpg",
    culture: "Budaya Sulawesi Barat sangat beragam, didominasi suku Mandar serta minoritas Toraja, Bugis, Jawa, Makassar dan lainnya; kebudayaan lokal meliputi tarian tradisional seperti Tari Pattu'du, Tari Bulu Londong, Tari Toerang Batu; lagu daerah seperti Tenggang-Tenggang Lopi, Pasurungai Salili; alat musik seperti Calong, Rebana Mandar, Kecapi Mandar; makanan/minuman khas seperti Jepa, Golla Kambu / Baye', Pupuq, Bau Peapi, Paso’, dan lainnya.",
    food: "Jepa, Sambusa, Bau Piapi, Golla Kambu, Kue Cucur, dan Apang.",
    house: "Rumah Boyang.",
    history: "Sulawesi Barat dibentuk sebagai provinsi ke-33 di Indonesia lewat Undang-Undang Nomor 26 Tahun 2004 yang disahkan 5 Oktober 2004, hasil pemekaran dari Sulawesi Selatan, dengan ibu kota di Mamuju. Sebelum pemekaran, wilayah ini terdiri atas banyak kerajaan Mandar dan konfederasi seperti Pitu Babana Binanga (tujuh kerajaan pesisir) yang bersatu untuk memperkuat persatuan dan keamanan serta mengatur perdagangan di pesisir barat Sulawesi. ",
    link: "https://id.wikipedia.org/wiki/Sulawesi_Barat"
  },
  {
    name: "Sulawesi Selatan",
    capital: "Makassar",
    region: "Sulawesi",
    image: "sulawesi-selatan.jpg",
    culture: "Budaya di Sulawesi Selatan sangat beragam antar suku (Bugis, Makassar, Toraja, Mandar, dan lainnya), dengan adat istiadat seperti ritual Mappalili/Appalili dalam pertanian padi, beragam tarian tradisional, musik, bahasa daerah yang beragam dialek, serta kuliner khas yang populer seperti Coto Makassar, Pallubasa, Kapurung, dan pisang epe",
    food: "Coto Makassar, Sop Konro, Nasu Palekko, Kapurung, Jalangkote, dan Pisang Epe.",
    house: "Rumah Tongkonan dan Rumah Balla Lampoa.",
    history: "Sulawesi Selatan mempunyai sejarah panjang sebagai pusat kerajaan-kerajaan Bugis, Makassar, Bone, dan Gowa sejak abad ke-15 sampai ke-19, yang berperan penting dalam perdagangan rempah-rempah di bagian timur Nusantara; kemudian menghadapi interaksi dan konflik dengan VOC Belanda, termasuk Perjanjian Bungaya, sampai akhirnya menjadi bagian dari Indonesia setelah masa kolonial dan pembentukan provinsi.",
    link: "https://id.wikipedia.org/wiki/Sulawesi_Selatan"
  },
  {
    name: "Sulawesi Tenggara",
    capital: "Kendari",
    region: "Sulawesi",
    image: "sulawesi-tenggara.jpg",
    culture: "Budaya Sulawesi Tenggara sangat beragam dengan banyak suku seperti Tolaki, Buton, Muna, Wawonii, Bajo, Moronene, Wolio-Buton dan lainnya, memakai bahasa daerah (tolaki, wolio, cia-cia, dll), dan memiliki tradisi lokal yang kuat, termasuk seni, musik, kerajinan, sistem adat, dan kepercayaan masyarakat yang berbeda antar pulau serta interaksi budaya antar suku.",
    food: "Sinonggi, Kasuami, Ikan Dole, Lapa-lapa, Sate Gogos, Karasi, Bagea, dan Keripik Mete.",
    house: "Rumah Laika.",
    history: "Sulawesi Tenggara awalnya bagian dari Sulawesi Selatan; wilayah ini pernah terdiri atas Onderafdeling Boeton Laiwui pada masa Hindia Belanda, kemudian menjadi Kabupaten Sulawesi Tenggara tahun 1952; akhirnya ditetapkan sebagai provinsi otonom (Daerah Otonom Tingkat I) melalui Perpu No. 2 Tahun 1964 juncto UU No. 13 Tahun 1964, yang efektif sejak 27 April 1964.",
    link: "https://id.wikipedia/wiki/Sulawesi_Tenggara"
  },

  //Nusa Tenggara
  {
    name: "Bali",
    capital: "Denpasar",
    region: "Nusa Tenggara",
    image: "bali.jpg",
    culture: "Kebudayaan Bali berakar kuat pada agama Hindu dengan sistem irigasi subak, berbagai sekte Hindu kuno, seni tari, musik, dan ritual yang masih dijalankan hingga kini, serta perpaduan pengaruh India, Cina, dan Jawa.",
    food: "Nasi Campur Bali, Babi Guling, dan Ayam Betutu.",
    house: "Rumah Asta Kosala Kosali.",
    history: "Bali dihuni sejak 2000 SM oleh migran Austronesia dan berkembang dengan pengaruh Hindu-Buddha, membentuk kerajaan-kerajaan Hindu yang bertahan hingga kedatangan Belanda pada abad ke-19; setelah masa kolonial dan puputan, Bali menjadi bagian dari Indonesia.",
    link: "https://id.wikipedia/wiki/Bali"
  },
  {
    name: "Nusa Tenggara Barat",
    capital: "Mataram",
    region: "Nusa Tenggara",
    image: "ntb.jpg",
    culture: "Budaya NTB sangat beragam, dengan suku Sasak sebagai mayoritas di Lombok, serta suku Bima, Sumbawa di Pulau Sumbawa; tradisi lokal meliputi mata pencaharian petani dan nelayan, bahasa Sasak dengan dialek berbeda, warisan seni sastra seperti lontar-lontar, upacara adat, musik dan tarian tradisional, serta pengaruh budaya Jawa-Bali karena sejarah kerajaan dan interaksi antar pulau.",
    food: "Ayam Taliwang, Sate Bulayak, Plecing Kangkung, Beberuk Terong, Dodol Rumput Laut, Kue Kerake, dan Susu Kuda Liar.",
    house: "Rumah Bale Tani.",
    history: "NTB secara resmi terbentuk sebagai provinsi sejak 17 Desember 1958 lewat UU No. 64 Tahun 1958, setelah sebelumnya menjadi bagian dari Provinsi Sunda Kecil, dan mengalami beberapa masa pemerintahan yang terus berubah sampai akhirnya memiliki struktur pemerintahan sendiri yang lebih mantap setelah masa reformasi dan pembangunan infrastruktur, misalnya penyelesaian pembangunan Bandara Internasional Lombok. ",
    link: "https://id.wikipedia/wiki/Nusa_Tenggara_Barat"
  },
  {
    name: "Nusa Tenggara Timur",
    capital: "Kupang",
    region: "Nusa Tenggara",
    image: "ntt.jpg",
    culture: "Budaya NTT sangat kaya dengan banyak suku bangsa seperti Atoni, Manggarai, Sumba, Solor, Ngada, Rote dan lain-lain, yang melestarikan tradisi unik seperti tarian Caci di Flores, tradisi Pasola di Sumba, serta kepercayaan lokal seperti Marapu di Sumba; bahasa daerah banyak ragam dan ada kepercayaan serta praktik adat yang beragam tergantung suku serta kondisi geografis pulau masing-masing.",
    food: "Se'i Daging Sapi, Se'i Babi, Catemak Jagung, Jagung Bose, Kolo, Rumpu Rampe, dan Aka Bilan.",
    house: "Rumah Musalaki.",
    history: "Nusa Tenggara Timur dibentuk sebagai provinsi sejak 11 Agustus 1958, mencakup bagian timur Kepulauan Nusa Tenggara; wilayahnya terdiri atas banyak pulau seperti Flores, Sumba, Timor Barat, Alor, Lembata, Rote, dan lain-lain.",
    link: "https://id.wikipedia/wiki/Nusa_Tenggara_Timur"
  },


  {
    name: "Maluku",
    capital: "Ambon",
    region: "Maluku",
    image: "maluku.jpg",
    culture: "Masyarakat Maluku memiliki budaya yang sangat kaya, mencakup bahasa daerah, musik dan tarian tradisional seperti Cakalele, serta rumah adat seperti Baileo yang berfungsi sebagai tempat pertemuan masyarakat dan upacara adat, mencerminkan struktur sosial dan nilai kebersamaan.",
    food: "Papeda, Sinole, Ikan Kuah Pala Banda dan Ikan Komu Asar, Nasi Lapola, Kohu-Kohu, dan Sambal Colo-Colo.",
    house: "Rumah Baileo.",
    history: "Provinsi Maluku adalah salah satu provinsi paling awal di Indonesia, dikenal sejak masa prasejarah dengan penduduk asli Austronesia-Melanesia dan berbagai suku seperti Alifuru, Ambon, Buru, Kei, dan Tanimbar. Sejak dulu Maluku menjadi pusat perdagangan rempah-rempah (cengkih dan pala), menarik perhatian pedagang dari Nusantara, Arab, Tiongkok hingga Eropa. Pada masa kolonial, Portugis, Belanda, dan kekuatan asing lain bersaing menguasai kepulauan ini karena kekayaan rempahnya. Setelah kemerdekaan RI, Maluku tetap menjadi provinsi tunggal hingga pemekaran ke Maluku Utara pada akhir abad ke-20.",
    link: "https://id.wikipedia/wiki/Maluku"
  },
  {
    name: "Maluku Utara",
    capital: "Sofifi",
    region: "Maluku",
    image: "maluku-utara.jpg",
    culture: "Budaya Maluku Utara sangat kaya: masyarakatnya masih melestarikan tradisi kerajaan, adat istiadat lokal, cerita rakyat seperti Rion-rion, serta rumah adat seperti Sasadu milik suku Sahu yang berfungsi sebagai tempat pertemuan adat dan pusat komunitas di desa. ",
    food: "Gohu Ikan, Papeda, Ikan Asar, Lapis Tidore, Bagea, Sambal Colo-Colo, dan Woku Komo-Komo.",
    house: "Rumah Sasadu.",
    history: "Maluku Utara berasal dari wilayah kerajaan-kerajaan Islam kuno yang dikenal sebagai Moloku Kie Raha (empat kerajaan besar: Ternate, Tidore, Bacan, Jailolo). Kesultanan-kesultanan ini sudah ada sejak abad ke-13 dan memegang peranan penting dalam perdagangan rempah-rempah, penyebaran Islam, dan dinamika politik lokal sampai masa kolonial Belanda. ",
    link: "https://id.wikipedia/wiki/Maluku_Utara"
  },


  {
    name: "Papua",
    capital: "Jayapura",
    region: "Papua",
    image: "papua.jpg",
    culture: "Papua kaya ragam budaya tradisional yang meliputi sistem kepercayaan adat, bahasa suku banyak (seperti Biak, Yapen, dan suku pegunungan), musik tradisional, seni ukir, alat musik seperti tifa, juga benda budaya seperti noken, kuliner khas lokal, serta rumah adat seperti Rumah Kariwari dan Rumsram sebagai simbol identitas komunitas dan pusat kegiatan sosial-majemuk masyarakat Papua.",
    food: "Martabak Sagu, Sate Ulat Sagu, Bubur Sagu, Ikan Bungkus, dan Kue Lontar.",
    house: "Rumah Kariwari.",
    history: "Provinsi Papua dulunya dikenal dengan nama Irian Barat dan Irian Jaya, merupakan wilayah bekas koloni Belanda yang kemudian bergabung dengan Republik Indonesia setelah melalui proses diplomasi dan politik seperti Perjanjian New York dan Penentuan Pendapat Rakyat (PEPERA) tahun 1969; wilayah ini berdiri di bawah otonomi khusus, semula memiliki luas sangat besar sebelum dimekarkan menjadi beberapa provinsi baru (Papua Tengah, Papua Pegunungan, Papua Selatan) pada 30 Juni 2022.",
    link: "https://id.wikipedia/wiki/Papua"
  },
  {
    name: "Papua Barat",
    capital: "Manokwari",
    region: "Papua",
    image: "papua-barat.jpg",
    culture: "Budaya Papua Barat sangat beragam karena dihuni oleh banyak suku seperti Arfak, Biak, Moi, dan Irarutu yang masih melestarikan bahasa, tarian, musik tradisional, serta seni ukir dan anyaman; tradisi mereka juga mencakup upacara adat, penggunaan noken, serta rumah adat khas Rumah Kaki Seribu milik suku Arfak yang berfungsi sebagai tempat tinggal, pusat kegiatan sosial, dan simbol identitas budaya masyarakat setempat.",
    food: "Ayam Baboto, Papeda, Kue Lontar, Ikan Bakar Manokwari, dan Sate Ulat Sagu.",
    house: "Rumah Kaki Seribu.",
    history: "Papua Barat adalah provinsi di bagian barat Pulau New Guinea yang secara administratif dipisahkan dari Provinsi Papua lewat Undang-Undang Nomor 45 Tahun 1999, dan mencakup wilayah Semenanjung Doberai, Bomberai, dan Wandamen dengan ibu kota Manokwari; provinsi ini memiliki sejarah panjang interaksi antar suku, perdagangan antar pulau, pengaruh kolonial Belanda serta perkembangan kebudayaan lokal yang kuat meski berada di daerah terpencil.",
    link: "https://id.wikipedia/wiki/Papua_Barat"
  },
  {
    name: "Papua Barat Daya",
    capital: "Sorong",
    region: "Papua",
    image: "papua-barat-daya.jpg",
    culture: "Masyarakat Papua Barat Daya terdiri dari beragam suku asli seperti Moi, Ayamaru, Tehit, Kais, Matbat dan lainnya, yang melestarikan bahasa dan tradisi lokal; salah satu rumah adat khas mereka adalah Rumah Kaki Seribu, yang menjadi simbol budaya dan fungsi banyak bagi komunitas di wilayah Doberai. ",
    food: "Udang Selingkuh, Papeda, Roti Abon Gulung, dan Ikan Kuah Kuning.",
    house: "Rumah Kaki Seribu.",
    history: "Papua Barat Daya resmi terbentuk sebagai provinsi baru ke-38 di Indonesia melalui Undang-Undang Nomor 29 Tahun 2022, setelah perjuangan panjang yang dimulai sejak tahun 2007 melalui deklarasi di Sorong dan Jayapura, meskipun usulan sempat tertunda pada beberapa periode karena belum terpenuhinya persyaratan administratif.",
    link: "https://id.wikipedia/wiki/Papua_Barat_Daya"
  },
  {
    name: "Papua Selatan",
    capital: "Merauke",
    region: "Papua",
    image: "papua-selatan.jpg",
    culture: "Papua Selatan dihuni suku-suku seperti Marind, Asmat, dan Muyu yang tinggal di pesisir dan rawa-rawa, dengan budaya khas berupa seni ukir dan patung Asmat yang mendunia, penggunaan perahu dayung sebagai sarana tradisional, serta festival budaya yang menampilkan tarian adat dan kreasi lokal untuk melestarikan identitas masyarakatnya.",
    food: "Papeda, Aunu Senebre, Ulat Sagu, Keladi Tumbuh, dan Ikan Bungkus.",
    house: "Rumah Luop.",
    history: "Provinsi Papua Selatan resmi dimekarkan dari Provinsi Papua pada 25 Juli 2022 melalui UU No. 14 Tahun 2022, setelah perjuangan panjang sejak 2002 dan diajukan kembali pada 2020. Wilayah ini meliputi Kabupaten Merauke, Asmat, Mappi, dan Boven Digoel, dahulu merupakan bagian dari wilayah adat Anim Ha, serta memiliki jejak sejarah kolonial Belanda seperti pos militer di Sungai Maro untuk menekan praktik pemburuan kepala suku Marind dan penggunaan Digul sebagai tempat pembuangan politik.",
    link: "https://id.wikipedia/wiki/Papua_Selatan"
  },
  {
    name: "Papua Tengah",
    capital: "Nabire",
    region: "Papua",
    image: "papua-tengah.png",
    culture: "Masyarakat Papua Tengah memiliki ragam budaya berdasarkan suku, dengan pakaian adat seperti koteka di kalangan suku pegunungan dan rok atau cawat rumbai di pesisir. Terdapat noken sebagai tas anyaman yang diakui sebagai warisan budaya tak benda oleh UNESCO. Seni ukir kayu juga hidup di suku Kamoro dan lainnya, dan rumah-adat bermacam bentuk seperti rumah Emawa, Nduni, Kunume, rumah panggung, yang tiap suku memiliki fungsi khusus seperti tempat ritual inisiasi. ",
    food: "Kue Sagu, Papeda, dan Swamening.",
    house: "Rumah Emawa.",
    history: "Papua Tengah resmi terbentuk sebagai provinsi terpisah pada 30 Juni 2022 berdasarkan Undang-Undang No. 15 Tahun 2022, setelah sebelumnya menjadi bagian dari Provinsi Papua. Wilayah ini pernah berada di bawah pengaruh Kesultanan Tidore di pesisir selatan abad ke-18, kemudian dikuasai Hindia Belanda yang membuka ekspedisi dan penemuan serta pengembangan wilayah pedalaman seperti Danau Wissel (sekarang Paniai) dan penemuan potensi tambang emas di Carte",
    link: "https://id.wikipedia.org/wiki/Papua_Tengah"
  },
  {
    name: "Papua Pegunungan",
    capital: "Wamena",
    region: "Papua",
    image: "papua-pegunungan.jpeg",
    culture: "Kebudayaan Papua Pegunungan ditandai oleh pakaian tradisional seperti koteka, penggunaan noken yang diakui UNESCO, serta tradisi kuliner bakar batu dengan ubi jalar sebagai makanan pokok. Rumah adat honai berbentuk bundar berfungsi sebagai tempat tinggal sekaligus penghangat, sementara beberapa suku seperti Dani, Hubula, dan Yali masih mengenal tradisi mumi untuk tokoh penting. Kekayaan budaya ini juga ditampilkan dalam Festival Lembah Baliem yang menampilkan perang-perangan adat, karapan babi, hingga prosesi bakar batu sebagai simbol persatuan dan perayaan identitas masyarakat pegunungan.",
    food: "Papeda (bubur sagu), Hipere (ubi jalar), Sagu Lempeng, Ulat Sagu, dan Bakar Batu.",
    house: "Rumah Honai.",
    history: "Pada abad ke-17 pelaut Jan Carstenszoon mencatat adanya pegunungan bersalju di Papua meski berada di khatulistiwa, kawasan yang oleh bangsa Eropa disebut terra incognita. Ekspedisi Hendrikus Albertus Lorentz tahun 1909 yang menuju Puncak Wilhelmina (kini Puncak Trikora) sempat berinteraksi dengan suku Pesechem di Nduga, namanya kemudian diabadikan menjadi Taman Nasional Lorentz. Ekspedisi lain pun menyusul, seperti van Overeem dan Kremer (1920) yang menemukan Lembah Swart/Toli, Danau Habema, serta suku Lani, dan ekspedisi Richard Archbold (1938) yang dari udara menemukan Lembah Baliem, dihuni suku Dani, lalu disebut Belanda sebagai Groote Vallei. Pada masa Perang Dunia II wilayah ini masih minim peta, hingga insiden pesawat Gremlin Special tahun 1945 menewaskan banyak orang di Pass Valley, Yalimo, meski tiga korban selamat, termasuk Kopral Margaret Hastings, berhasil dievakuasi dan kisahnya sempat menjadi berita besar.",
    link: "https://id.wikipedia.org/wiki/Papua_Pegunungan"
  },
];


const inputSearch = document.getElementById("searchInput");
const regionBtns = document.querySelectorAll(".region-filter button");
const showCount = document.getElementById("showCount");
const cardList = document.getElementById("cardList");

const modal = document.getElementById("infoModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("image");
const modalTitle = document.getElementById("title");
const modalCapital = document.getElementById("capital");
const modalRegion = document.getElementById("region");
const modalCulture = document.getElementById("culture");
const modalHistory = document.getElementById("history");
const modalHouse = document.getElementById("house");
const modalFood = document.getElementById("food");
const modalLink = document.getElementById("link");



function showProvinces(list) {
  cardList.innerHTML = "";
  list.forEach((p, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="images/provinsi/${p.image}" alt="${p.name}">
      <div class="card-body">
        <h3>${p.name}</h3>
        <p><strong>Ibukota:</strong> ${p.capital}</p>
        <span class="tag">${p.region}</span>
      </div>
    `;
    card.addEventListener("click", () => openModal(p));
    cardList.appendChild(card);
  });
  showCount.textContent = `Menampilkan ${list.length} provinsi`;
}

function openModal(province) {
  modal.style.display = "flex";
  modalImage.src = `images/provinsi/${province.image}`;
  modalTitle.textContent = `${province.name} | ${province.region}`;
  modalCapital.textContent = province.capital || "-";
  modalCulture.textContent = province.culture || "-";
  modalHistory.textContent = province.history || "-";
  modalHouse.textContent = province.house || "-";
  modalFood.textContent = province.food || "-";

  if (province.link) {
    modalLink.href = province.link;
    modalLink.textContent = "Baca selengkapnya disini";
    modalLink.style.display = "inline";
  } else {
    modalLink.style.display = "none";
  }
}

closeModal.onclick = () => (modal.style.display = "none");
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

function filterProvinces() {
  const keyword = inputSearch.value.toLowerCase();
  const activeRegion = document.querySelector(".region-filter .active").dataset
    .region;

  let filtered = provinces;
  if (activeRegion !== "Semua")
    filtered = filtered.filter((p) => p.region === activeRegion);
  if (keyword)
    filtered = filtered.filter((p) => p.name.toLowerCase().includes(keyword));

  showProvinces(filtered);
}

document.getElementById("btnSearch").addEventListener("click", filterProvinces);
regionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    regionBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filterProvinces();
  });
});


showProvinces(provinces);
