// Here we created a file to handle all the communication with our server-side code and DB
// Axios will help us with the Requests and Posts
import axios from "axios";

// Store all functions in a variable so we can later access them easily
const Api = {
    login: (userData) => {
        return axios.post("/api/login", userData)
    },

    create: (newUser) => {
        return axios.post("/api/user", newUser);
    },

    getList: (userId) => {
        return axios.get("/overview/" + userId);
    },

    createList: (userId, listName) => {
        return axios.post("/overview", {id: userId, listName: listName});
    },

    deleteList: (listId) => {
        return axios.post("/api/list", listId);
    },

    getListData: (listId) => {
        return axios.post("/api/list/data", listId);
    },

    newItem: (itemData) => {
        return axios.post("/api/newitem", itemData);
    },

    updateItem: (itemId) => {
        return axios.post("/api/item/update", itemId);
    }
};

export default Api;