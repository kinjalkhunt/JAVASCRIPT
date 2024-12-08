import axios from "axios";

// Define the function to fetch data
function getdata() {
    axios.get("https://663cb35717145c4d8c374f0d.mockapi.io/weetech/names")
        .then((rowdata) => {
            console.log("data ===>", rowdata.data);
        })
        .catch((error) => {
            console.log("error in catch ===", error);
        });
}

// Call the function to fetch data
getdata();

  

    


