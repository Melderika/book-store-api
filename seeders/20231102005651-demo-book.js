'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Books', [
      {
        judul: "Luka Cita",
        penerbit: "Bhuana Ilmu Populer",
        deskripsi: "Lukacita adalah novel yang ditulis oleh seorang penulis wanita muda yang populer di Indonesia, bernama Valerie Patkar. Lukacita ini merupakan novel kelima yang sebelumnya diterbitkan di wattpad, layaknya karya Valerie yang lain berhasil menarik hati banyak orang hingga resmi dirilis dalam bentuk buku oleh penerbit Bhuana Ilmu Populer. Novel yang sudah dibaca lebih dari 1 juta orang di wattpad ini bercerita tentang dua orang pemimpi yang dikhianati oleh cita-cita mereka sendiri.",
        gambar: "assets/image/Lukacita_Depan.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Books', null, {});
  }
}; 
