import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import { fetchFilms, Film } from "../services/api"; // Asumsikan endpoint untuk mendapatkan data film

const Carousel: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Ambil data film
    fetchFilms()
      .then((response) => setFilms(response.data.data))
      .catch((err) => console.error("Gagal memuat data film!", err));
  }, []);

  const carouselFilms = films.slice(0, 3);
  const cardFilms = films.slice(3, 9);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselFilms.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselFilms.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Bagian Carousel */}
        <div className="col-md-8">
          <div className="carousel slide position-relative">
            <div className="carousel-inner">
              <AnimatePresence initial={false}>
                {carouselFilms.map(
                  (film, index) =>
                    index === currentIndex && (
                      <motion.div
                        key={`${film.id_film}-${index}`}
                        className="carousel-item active"
                        initial={{ opacity: 0, z: 100 }}
                        animate={{ opacity: 1, z: 0 }}
                        exit={{ opacity: 0, z: -100 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Link to={`/films/${film.slug}`}>
                          <img
                            src={film.thumbnail}
                            className="d-block w-100"
                            alt={film.judul}
                            style={{
                              borderRadius: "8px",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </Link>
                        <div className="carousel-caption d-none d-md-block">
                          <h5>
                            <Link
                              to={`/films/${film.slug}`}
                              style={{ color: "#fff", textDecoration: "none" }}
                            >
                              {film.judul}
                            </Link>
                          </h5>
                          <p>{film.details.deskripsi.slice(0, 100)}...</p>
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>

            {/* Animasi Tombol Prev dan Next */}
            <motion.button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrev}
              initial={{ opacity: 0, x: -50 }} // Tombol mulai dengan opacity 0 dan geser sedikit ke kiri
              animate={{ opacity: 1, x: 0 }} // Tombol bergerak ke posisi normal dengan opacity 1
              exit={{ opacity: 0, x: -50 }} // Ketika tombol hilang, geser sedikit ke kiri dan hilang
              transition={{ duration: 0.3 }}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </motion.button>

            <motion.button
              className="carousel-control-next"
              type="button"
              onClick={handleNext}
              initial={{ opacity: 0, x: 50 }} // Tombol mulai dengan opacity 0 dan geser sedikit ke kanan
              animate={{ opacity: 1, x: 0 }} // Tombol bergerak ke posisi normal dengan opacity 1
              exit={{ opacity: 0, x: 50 }} // Ketika tombol hilang, geser sedikit ke kanan dan hilang
              transition={{ duration: 0.3 }}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </motion.button>
          </div>
        </div>

        {/* Bagian Scrollable Cards */}
        <div className="col-md-4">
          <div
            className="card-container"
            style={{
              height: "400px",
              overflowY: "scroll",
              border: "1px solid #f5efe7",
              borderRadius: "8px",
              padding: "10px",
            }}
          >
            {cardFilms.map((film, index) => (
              <motion.div
                key={film.id_film}
                className="card mb-3"
                style={{ display: "flex", flexDirection: "row" }}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/films/${film.slug}`}>
                  <img
                    src={film.thumbnail}
                    className="card-img-top"
                    alt={film.judul}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "4px 0 0 4px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
                <div className="card-body" style={{ width: "60%" }}>
                  <h5 className="card-title">
                    <Link
                      to={`/films/${film.slug}`}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {film.judul}
                    </Link>
                  </h5>
                  <p className="card-text">
                    {film.details.deskripsi.slice(0, 50)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
