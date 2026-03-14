import "../css/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About BG Movie Watch</h1>
        <p className="about-tagline">A demo movie platform that takes your film discovery experience to the next level.</p>
      </div>

      <section className="about-content">
        <div className="about-card">
          <h2>About This Project</h2>
          <p>
            This website was created by <strong>Babak Gasimzade</strong> under <a href="https://bgdevofficial.com/" target="_blank" rel="noopener noreferrer" className="about-link">BGdev</a> as a professional demo movie platform.
          </p>
          <p>
            BG Movie Watch is built using The Movie Database (TMDB) API; it offers popular movie discovery, search, favorites, and detailed movie information pages.
          </p>
        </div>

        <div className="about-card">
          <h2>Features</h2>
          <ul className="about-features">
            <li>Popular movies list</li>
            <li>Advanced movie search</li>
            <li>Save your favorite movies</li>
            <li>Detailed movie pages (overview, cast, trailer)</li>
            <li>Modern and responsive design</li>
          </ul>
        </div>

        <div className="about-card about-credits">
          <p>
            <strong>Developer:</strong> Babak Gasimzade<br />
            <strong>Brand:</strong>{" "}
            <a href="https://bgdevofficial.com/" target="_blank" rel="noopener noreferrer" className="about-link">
              BGdev — Enterprise Web Development & AI Solutions
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
