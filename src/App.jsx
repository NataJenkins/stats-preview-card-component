import "./App.scss";
import ImageDesktop from "./assets/image-header-desktop.jpg";
import ImageMobile from "./assets/image-header-mobile.jpg";

function App() {
    return (
        <div className="container">
            <main>
                <div className="card">
                    <div className="left">
                        <h1 className="title">
                            Get <span>insights</span> that help your business
                            grow.
                        </h1>
                        <p className="description">
                            Discover the benefits of data analytics and make
                            better decisions regarding revenue, customer
                            experience, and overall efficiency.
                        </p>
                        <div className="stats">
                            <div className="item">
                                <div className="number">10k+</div>
                                <p className="label">COMPANIES</p>
                            </div>
                            <div className="item">
                                <div className="number">314</div>
                                <p className="label">TEMPLATES</p>
                            </div>
                            <div className="item">
                                <div className="number">12M+</div>
                                <p className="label">QUERIES</p>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <img src={ImageDesktop} alt="" className="desktop" />
                        <img src={ImageMobile} alt="" className="mobile" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
