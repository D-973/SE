// Data templates or responses
const templates = `
{
    "name": "Nama aku DeTa.",
    "hobby": "Haha.. saya suka membaca pikiran kamu :).",
    "human": "Saya adalah chatbot, dapat memberikan informasi.",
    "okey": "Okey, kamu luar biasa. Salam sukses !!!",
    "greetings": "Hallo, semoga kamu baik-baik saja.",
    "thanks": "Iya, sama-sama ya.",
    "hi": "Hi juga. Semoga harimu menyenangkan.",
    "condition": "Saya adalah chatbot. Pastinya saya sehat.",
    "id_server": "ID adalah nomor identifikasi akun Anda di game, sedangkan Server ID adalah nomor unik untuk server tempat Anda bermain. Keduanya bisa dilihat di profil Anda di game.",
    "waktu_diamond_masuk": "Biasanya, diamond akan masuk dalam waktu 1-10 menit setelah pembayaran berhasil.",
    "perlu_login": "Tidak, Anda hanya perlu memberikan ID dan Server ID Mobile Legends Anda.",
    "biaya_tambahan": "Tidak ada biaya tambahan. Harga yang tertera adalah harga final.",
    "harga_diamond": "Harga bervariasi tergantung jumlah diamond yang Anda pilih. Paket dimulai dari Rp10.000 hingga Rp1.000.000.",
    "diskon": "Kami sering mengadakan promo. Silakan cek bagian promo di platform kami.",
    "paket_spesial": "Ya, kami memiliki paket spesial dengan bonus diamond tambahan.",
    "harga_rp50k": "Anda akan mendapatkan sekitar 250 diamond, tergantung promo yang berlaku.",
    "starlight": "Tidak, diamond dan starlight biasanya dijual secara terpisah.",
    "metode_pembayaran": "Anda bisa membayar melalui transfer bank, e-wallet (seperti OVO, GoPay, Dana), pulsa, atau kartu kredit.",
    "metode_pembayaran": "Anda bisa membayar melalui transfer bank, e-wallet (seperti OVO, GoPay, Dana), pulsa, atau kartu kredit.",
    "bayar_pulsa": "Ya, kami mendukung pembayaran menggunakan pulsa Telkomsel, XL, Indosat, dan lainnya.",
    "cara_e_wallet": "Pilih metode pembayaran e-wallet, masukkan nomor e-wallet Anda, dan ikuti petunjuk pembayaran.",
    "bayar_atm": "Ya, Anda bisa melakukan transfer melalui ATM ke rekening yang kami sediakan.",
    "pembayaran_aman": "Kami menggunakan sistem pembayaran yang terjamin keamanannya dan sudah terpercaya.",
    "diamond_belum_masuk": "Pastikan pembayaran Anda berhasil. Jika sudah, diamond akan masuk dalam waktu 10 menit. Hubungi CS jika ada masalah.",
    "salah_id": "Segera hubungi customer service kami untuk membantu memperbaiki.",
    "pembayaran_gagal": "Cek saldo Anda dan pastikan koneksi internet stabil. Jika masih gagal, coba metode pembayaran lain.",
    "refund": "Maaf, pembelian diamond yang sudah berhasil tidak bisa dibatalkan atau dikembalikan.",
    "status_pesanan": "Anda akan mendapatkan notifikasi melalui email atau aplikasi kami setelah pembayaran berhasil.",
    "bonus_pembelian_pertama": "Ya, pembelian pertama biasanya mendapatkan bonus tambahan diamond.",
    "kode_promo": "Ikuti akun media sosial kami untuk mendapatkan kode promo terbaru.",
    
    "cara_beli": "Anda dapat memilih paket diamond yang tersedia, masukkan ID akun Mobile Legends Anda, lakukan pembayaran, dan diamond akan masuk ke akun Anda."
}`;

// Parse templates into a JSON object
const data_responses = JSON.parse(templates);
