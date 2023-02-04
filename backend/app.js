const createError = require("http-errors");
const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const { NODE_ENV } = require("./config");

// ****************************************************************************
// 										importacion de rutas
// ****************************************************************************

// const representativeRoute = require("./routes/representative.route");
const patientRoute = require("./routes/patient.route");
const activityRoute = require("./routes/activity.route");
const bookRoute = require("./routes/book.route");
const bookFichaRoute = require("./routes/bookFicha.route");

const app = express();

app.use(cors());

if (NODE_ENV === "development") app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./uploads" }));

// ****************************************************************************
// 										rutas para la api
// ****************************************************************************

// app.use("/api/representative", representativeRoute);
app.use("/api/patient", patientRoute);
app.use("/api/activity", activityRoute);
app.use("/api/book", bookRoute);
app.use("/api/bookficha", bookFichaRoute);

// app.use('/api/users', userRoutes)
// app.use('/api/orders', orderRoutes)
// app.use('/api/upload', uploadRoutes)

// ****************************************************************************
// 										declaracion de archivos estaticos
// ****************************************************************************
// * se colocan despues de las rutas para que no las afecte

// app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));

if (NODE_ENV === "production") {
	app.use(express.static(path.join(path.resolve(), "/frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(
			path.resolve(path.resolve(), "frontend", "build", "index.html")
		)
	);
} else {
	app.get("/", (req, res) => {
		res.send("API is running....");
	});
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
	// res.redirect('/')
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({ error: err });
});

module.exports = app;
