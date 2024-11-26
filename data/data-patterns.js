const trainingPhrases = [
  { phrase: "what is your name?", result: { name: 1 } },
  { phrase: "cara beli diamond?", result: { cara_beli: 1 } },
  { phrase: "id server apa?", result: { id_server: 1 } },
  { phrase: "apa itu id server?", result: { id_server: 1 } },
  { phrase: "berapa lama diamond masuk?", result: { waktu_diamond_masuk: 1 } },
  { phrase: "haruskah login?", result: { perlu_login: 1 } },
  { phrase: "ada biaya tambahan?", result: { biaya_tambahan: 1 } },
  { phrase: "berapa harga diamond?", result: { harga_diamond: 1 } },
  { phrase: "apakah ada diskon?", result: { diskon: 1 } },
  { phrase: "apa paket spesial?", result: { paket_spesial: 1 } },
  { phrase: "berapa harga 50 ribu?", result: { harga_rp50k: 1 } },
  { phrase: "starlight bisa dibeli?", result: { starlight: 1 } },
  { phrase: "metode pembayaran apa saja?", result: { metode_pembayaran: 1 } },
  { phrase: "bisa bayar pakai pulsa?", result: { bayar_pulsa: 1 } },
  {
    phrase: "bagaimana cara bayar pakai e-wallet?",
    result: { cara_e_wallet: 1 },
  },
  { phrase: "bisakah bayar lewat atm?", result: { bayar_atm: 1 } },
  { phrase: "pembayaran ini aman?", result: { pembayaran_aman: 1 } },
  { phrase: "diamond saya belum masuk?", result: { diamond_belum_masuk: 1 } },
  { phrase: "apa yang terjadi jika salah id?", result: { salah_id: 1 } },
  { phrase: "kenapa pembayaran saya gagal?", result: { pembayaran_gagal: 1 } },
  { phrase: "bisakah saya refund?", result: { refund: 1 } },
  { phrase: "bagaimana status pesanan saya?", result: { status_pesanan: 1 } },
  {
    phrase: "ada bonus pembelian pertama?",
    result: { bonus_pembelian_pertama: 1 },
  },
  {
    phrase: "bagaimana cara mendapatkan kode promo?",
    result: { kode_promo: 1 },
  },
  { phrase: "apakah ada cashback?", result: { event_cashback: 1 } },
  { phrase: "promo besar apa saja yang ada?", result: { promo_besar: 1 } },
  { phrase: "kenapa harus beli di sini?", result: { keuntungan_disini: 1 } },
  { phrase: "apakah id saya aman?", result: { id_aman: 1 } },
  {
    phrase: "bisa beli diamond untuk teman?",
    result: { diamond_untuk_teman: 1 },
  },
  { phrase: "apa itu diamond ilegal?", result: { diamond_ilegal: 1 } },
  { phrase: "bisakah diamond dipindahkan?", result: { transfer_diamond: 1 } },
  { phrase: "berapa harga skin epic?", result: { harga_skin_epic: 1 } },
  { phrase: "bisa hubungi cs?", result: { customer_service: 1 } },
  { phrase: "kenapa diamond hilang?", result: { diamond_hilang: 1 } },
  { phrase: "nama", result: { name: 1 } },
  { phrase: "siapa nama kamu", result: { name: 1 } },
  { phrase: "nama kamu siapa", result: { name: 1 } },
  { phrase: "apa hobby kamu?", result: { hobby: 1 } },
  { phrase: "hobby?", result: { hobby: 1 } },
  { phrase: "apa hobi kamu?", result: { hobby: 1 } },
  { phrase: "hobi kamu?", result: { hobby: 1 } },
  { phrase: "kamu suka bermain apa?", result: { hobby: 1 } },
  { phrase: "kamu suka apa?", result: { hobby: 1 } },
  { phrase: "kamu manusia atau robot?", result: { human: 1 } },
  { phrase: "manusia atau robot?", result: { human: 1 } },
  { phrase: "apakah kamu manusia?", result: { human: 1 } },
  { phrase: "apakah kamu robot?", result: { human: 1 } },
  { phrase: "kamu pasti robot?", result: { human: 1 } },
  { phrase: "kamu seperti manusia?", result: { human: 1 } },
  { phrase: "selamat sore", result: { greetings: 1 } },
  { phrase: "selamat malam?", result: { greetings: 1 } },
  { phrase: "good morning.", result: { greetings: 1 } },
  { phrase: "hari yang indah.", result: { greetings: 1 } },
  { phrase: "hari ini sangat indah.", result: { greetings: 1 } },
  { phrase: "terima kasih", result: { thanks: 1 } },
  { phrase: "thank you", result: { thanks: 1 } },
  { phrase: "thanks", result: { thanks: 1 } },
  { phrase: "mantap sekali", result: { okey: 1 } },
  { phrase: "mantap", result: { okey: 1 } },
  { phrase: "good", result: { okey: 1 } },
  { phrase: "pintar", result: { okey: 1 } },
  { phrase: "ok ok", result: { okey: 1 } },
  { phrase: "oke", result: { okey: 1 } },
  { phrase: "Okey", result: { okey: 1 } },
  { phrase: "hi", result: { hi: 1 } },
  { phrase: "helo", result: { hi: 1 } },
  { phrase: "hi there", result: { hi: 1 } },
  { phrase: "kabar?", result: { condition: 1 } },
  { phrase: "apa kabar kamu?", result: { condition: 1 } },
  { phrase: "how are you?", result: { condition: 1 } },
];
