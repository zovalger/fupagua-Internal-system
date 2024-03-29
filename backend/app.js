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
const addressRoute = require("./routes/address.route");
const activityRoute = require("./routes/activity.route");
const bookRoute = require("./routes/book.route");
const bookFichaRoute = require("./routes/bookFicha.route");
const utilityRoute = require("./routes/utility.route");
const videolinkRoute = require("./routes/videoLink.route");
const FupaguaServiceRoute = require("./routes/fupaguaService.route");
const FupaguaEmpleadoRoute = require("./routes/fupaguaEmpleado.route");
const BookRecommendedRoute = require("./routes/bookRecommended.route");
const EventPostRoute = require("./routes/EventPost.route");
// const authRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");
const userLogsRoutes = require("./routes/userLogs.route");

const app = express();

app.use(cors());

if (NODE_ENV !== "production") app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./uploads" }));

// ****************************************************************************
// 										rutas para la api
// ****************************************************************************

// app.use("/api/representative", representativeRoute);
app.use("/api/patient", patientRoute);
app.use("/api/address", addressRoute);
app.use("/api/activity", activityRoute);
app.use("/api/book", bookRoute);
app.use("/api/bookficha", bookFichaRoute);
app.use("/api/videolink", videolinkRoute);
app.use("/api/fupaguaservice", FupaguaServiceRoute);
app.use("/api/fupaguaempleados", FupaguaEmpleadoRoute);
app.use("/api/book_recommended", BookRecommendedRoute);
app.use("/api/eventpost", EventPostRoute);
app.use("/api/user", userRoutes);
app.use("/api/userlogs", userLogsRoutes);
// app.use("/api/auth", authRoutes);
app.use("/api/utility", utilityRoute);

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
