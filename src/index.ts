import http from "http";
import moment from "moment";

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(
        "This is just a placeholder. Please install your app at /app. Time:" +
            moment().format("MMMM Do YYYY, h:mm:ss a")
    );
});

const port = 1337;
server.listen(port, "0.0.0.0", () =>
    console.log(`Server running at http://localhost:${port}`)
);
