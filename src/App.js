import "./App.css";
import { Fragment } from "react";
import { UploadImages } from "./components/ImageUploader";
import "./App.css";

function App() {
    const resizeOps = () => {
        document.documentElement.style.setProperty(
            "--vh",
            window.innerHeight * 0.01 + "px"
        );
    };

    resizeOps();
    window.addEventListener("resize", resizeOps);

    return (
        <Fragment>
            <div>
                <h1>Ben & Hellen's wedding</h1>
            </div>

            <div>
                <p>Upload your photos here!</p>
                {<UploadImages />}
            </div>
        </Fragment>
    );
}

export default App;
