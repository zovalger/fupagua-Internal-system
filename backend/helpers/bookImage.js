const { uploadImage } = require("../libs/cloudinary")

const addBookImage = (book,filePath)=>{
  uploadImage(filePath)
}