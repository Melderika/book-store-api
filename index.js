const express = require('express')
const app = express()
const port = 5151

 // representasi data dari database
 const data_users = [
    { id: 1, name: "Kamelia", alamat: "Bandung" },
    { id: 2, name: "Syalamah", alamat: "Bandung" },
    { id: 3, name: "Dini", alamat: "Jogja" },
    { id: 4, name: "Saskia", alamat: "Sumedang" },
];

app.get("/nama", (req, res) => {
    //mendapatkan data dari database
    const data = data_users;

    //memberikan respon json data
    let result = {
        status: 200,
        data: data,
    };

    res.json(result);
});

app.listen(port,() => console.log(`Server running on port ${port}`))