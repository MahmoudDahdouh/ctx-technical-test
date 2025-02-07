import axios from "axios"
import Constants from "./constants/constants"

const instance = axios.create({
  baseURL: Constants.BASE_URL,
})

export default instance
