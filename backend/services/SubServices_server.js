const {
	ImageSyncCloud,
	ImageResizeAll,
	deleteAllImgFileInTrash,
} = require("./ImageService");
const { syncAllDataWithCloudServer } = require("./SyncWithCloudServer");

// ejecutar esta funcion cada cierto tiempo
const corrutineSecundPlane = async () => {


	// borrar de cloudinary, base de datos y local las img eliminadas
	await deleteAllImgFileInTrash();

	// comprimir imagenes
	await ImageResizeAll();

	// subir imagens a cloudinary
	await ImageSyncCloud();


	// sincronizar cambios con la landing
	await syncAllDataWithCloudServer();
};

module.exports = corrutineSecundPlane;
