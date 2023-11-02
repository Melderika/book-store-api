const { Book } = require("../models");

const findAllBooks = async(req, res) => {
    //ambil data dari database
    const data = await Book.findAll();

    //tampilan
    res.json({
        message: "Ini dari router",
        data: data,
    });
};

const detailBook = async (req, res) => {
    // get id dari request
    let id = parseInt(req.body.id);

    const data = await Book.findByPk(id);

    //tampilkan 
    res.json({
        message: "Ini dari router",
        data: data,
    });
};

const tambahBuku = async (req, res) => {
    try {
        //ambil data dari request
        const data = req.body;

        const result = await Book.create(data);
        //inserth kedatabase
        //tampilkan status
        res.json({
            result: result,
        });
        // res.send("Tambah Data")
    } catch (error) {
        res.json({
            message: "error :" + error,
        });
    };
};

const hapusBuku = async (req, res) => {
    try {
        const id = req.body.id;

        const result = await Book.destroy({
            where: {
                id: id,
            },
        });

        res.json({
            message: "buku berhasil dihapus",
        });
    } catch (error) {
        res.json({
            message: "error :" + error,
        });
    }
};

const updateBuku = async (req, res) => {
    try {
        const id = req.body.id;

        const newData = req.body

        const result = await Book.update(newData, {
            where: {
                id: id,
            },
        });

        res.json({
            message: "buku berhasil diupdate",
            data : newData,
        });
    } catch (error) {
        res.json({
            message: "error :" + error,
        });
    }
};

module.exports = {findAllBooks, detailBook, tambahBuku, hapusBuku, updateBuku};