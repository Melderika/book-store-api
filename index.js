const express = require('express')
const { Client } = require("pg");

const app = express();
app.use(express.json());

const port = 5151

const client = new Client ({
    user: "postgres",
    host: "localhost",
    database: "book_store_api",
    password: "ROOT",
    port: 5432,
})

client.connect()
    .then(() => {
        console.log("Terhubung ke database postgreSQL");
    })
    .catch((error) => {
        console.error("Gagal terhubung ke database:");
    });

app.get('/user',(req, res) => {
    //akses database
    client.connect()
    .then(() => {
        console.log("Terhubung ke database postgreSQL");
    })
    .catch((error) => {
        console.error("Gagal terhubung ke database:");
    });

    //ambil data
    let data;
    client.query("SELECT id, nama, alamat FROM users;", (req, result) => {
        res.json(result.rows);
    });
});

app.get('/user/:id', async (req, res) => {

    let id = parseInt(req.params.id);

    try {
        const query = "select * from users where id = $1";
        const {rows} = await client.query(query, [id]);

        if (rows.length === 0) {
            return res.status(404).json({
                message: "Data not found"
            });
        } else {
            res.json({
                data: rows[0],
            });
        }
    } catch (error) {}
      return res.status(404).json({
        message: "Data not found"
      });
});

app.post('/user', async (req, res) => {
    let data = req.body;

    const query = "INSERT INTO public.users(id, nama, alamat)VALUES ($1, $2, $3);";

    client.query(query, [data.id, data.nama, data.alamat], (err, result) => {
        if (err) {
            console.error("Error executing INSERT query:", err);
            return res.status(500).json({error: "Terjadi kesalahan" + err});
        } else {
            res.json({
                message: "Data berhasil dimasukkan"
            })
        }
    });

});


app.listen(port, () => console.log(`Server running on port ${port}`))

 // representasi data dari database
//  const data_users = [
//     { id: 1, name: "Kamelia", alamat: "Bandung" },
//     { id: 2, name: "Syalamah", alamat: "Bandung" },
//     { id: 3, name: "Dini", alamat: "Jogja" },
//     { id: 4, name: "Saskia", alamat: "Sumedang" },
// ];

// app.get("/users/:id", (req, res) => {
//     // get data dari parameter
//     let id = parseInt(req.params.id);

//     // get data dari database
//     let result;
//     const user = data_users.find((user) => user.id === id);
//     if (user) {
//         result = {
//         status: 200,
//         data: user,
//         };
//     } else {
//         res.status(404).json({ error: "User not found" });
//     }
//     res.json(result);
// });

