const {
	ImageSyncCloud,
	ImageResizeAll,
	deleteAllImgFileInTrash,
} = require("./ImageService");
const { syncAllDataWithCloudServer } = require("./SyncWithCloudServer");

// ejecutar esta funcion cada cierto tiempo
const corrutineSecundPlane = async () => {
	console.log("*******************************************");
	console.log("inicio de subrutina de imagenes");

	// borrar de cloudinary, base de datos y local las img eliminadas
	await deleteAllImgFileInTrash();

	// comprimir imagenes
	await ImageResizeAll();

	// subir imagens a cloudinary
	await ImageSyncCloud();
	console.log("*******************************************");

	console.log("*******************************************");
	console.log("inicio de subrutina de sincronizacion con CloudServer");

	// sincronizar cambios con la landing
	await syncAllDataWithCloudServer();
	console.log("*******************************************");
};

module.exports = corrutineSecundPlane;
