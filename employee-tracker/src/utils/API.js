import axios from "axios";
const url = "https://randomuser.me/api/?page=1&results=10&nat=us&seed=0ea9c09d5e32c23d";

const peopleRandomizer = {
    search: function () {
        return axios.get(url);
    }
};

export default peopleRandomizer;