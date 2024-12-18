import React, { useEffect, useState } from "react";
import { fetchFilms, fetchCategories, Film, Category } from "../services/api";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const FilmList: React.FC = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filmsPerPage] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Ambil kategori
    fetchCategories()
      .then((response) => {
        setCategories(response.data.data); // Set kategori
      })
      .catch(() => setError("Gagal memuat data kategori!"));

    // Ambil film dengan filter kategori
    fetchFilms({ kategori: selectedCategory, search: searchQuery })
      .then((response) => {
        setFilms(response.data.data);
      })
      .catch(() => setError("Gagal memuat data film!"))
      .finally(() => setLoading(false));
  }, [selectedCategory, searchQuery]);

  // Menghitung total halaman
  const totalPages = Math.ceil(films.length / filmsPerPage);

  // Menentukan film yang akan ditampilkan pada halaman tertentu
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

  const renderStars = (rating: number) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star-fill text-warning"
            viewBox="0 0 16 16"
            key={i}
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ); // Bintang penuh
      } else {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-star text-warning"
            viewBox="0 0 16 16"
            key={i}
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
          </svg>
        ); // Bintang kosong
      }
    }
    return stars;
  };

  const filmVariants = {
    hidden: { opacity: 0, y: 50 }, // Mulai dari opacity 0 dan sedikit turun
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Terlihat dengan transisi halus
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page); // Ubah halaman yang aktif
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); // Set kategori yang dipilih
    setLoading(true);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value); // Menyimpan query pencarian
    setLoading(true);
  };

  if (loading)
    return (
      <div className="container mt-4">
        <h1>List Film</h1>
        {/* Kategori dan Pencarian */}
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <button
              className={`btn ${
                selectedCategory === "" ? "btn-dark" : "btn-primary"
              } me-2`}
              onClick={() => handleCategoryChange("")}
            >
              Semua Kategori
            </button>
            {categories.map((category) => (
              <button
                key={category.id_kategori}
                className={`btn ${
                  selectedCategory === category.nama_kategori
                    ? "btn-dark"
                    : "btn-primary"
                } me-2`}
                onClick={() => handleCategoryChange(category.nama_kategori)}
              >
                {category.nama_kategori}
              </button>
            ))}
          </div>

          {/* Pencarian */}
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Cari film..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Tampilan loading */}
        <div className="centered">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );

  if (error)
    return <div className="alert alert-danger text-center mt-5">{error}</div>;

  // Jika tidak ada film yang ditemukan
  if (currentFilms.length === 0)
    return (
      <div className="container mt-4">
        <h1>List Film</h1>
        <div className="mb-4 d-flex justify-content-between align-items-center">
          <div>
            <button
              className={`btn ${
                selectedCategory === "" ? "btn-dark" : "btn-primary"
              } me-2`}
              onClick={() => handleCategoryChange("")}
            >
              Semua Kategori
            </button>
            {categories.map((category) => (
              <button
                key={category.id_kategori}
                className={`btn ${
                  selectedCategory === category.nama_kategori
                    ? "btn-dark"
                    : "btn-primary"
                } me-2`}
                onClick={() => handleCategoryChange(category.nama_kategori)}
              >
                {category.nama_kategori}
              </button>
            ))}
          </div>

          {/* Pencarian */}
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Cari film..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {/* Pesan Tidak ada data */}
        <div className="alert alert-warning text-center">
          Tidak ada data yang ditemukan.
        </div>
      </div>
    );

  return (
    <div className="container mt-4">
      <h1>List Film</h1>
      {/* Kategori dan Pencarian */}
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <div>
          <button
            className={`btn ${
              selectedCategory === "" ? "btn-dark" : "btn-primary"
            } me-2`}
            onClick={() => handleCategoryChange("")}
          >
            Semua Kategori
          </button>
          {categories.map((category) => (
            <button
              key={category.id_kategori}
              className={`btn ${
                selectedCategory === category.nama_kategori
                  ? "btn-dark"
                  : "btn-primary"
              } me-2`}
              onClick={() => handleCategoryChange(category.nama_kategori)}
            >
              {category.nama_kategori}
            </button>
          ))}
        </div>

        {/* Pencarian */}
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Cari film..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Tampilkan daftar film */}
      <div className="row">
        {currentFilms.map((film) => (
          <motion.div
            key={film.id_film}
            className="col-md-4 mb-4"
            initial="hidden"
            animate="visible"
            variants={filmVariants} // Menambahkan animasi pada setiap card film
          >
            <div className="card h-100 shadow-sm">
              <img src={film.thumbnail} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{film.judul}</h5>
                <div className="mb-2">
                  {film.kategoris.map((kategori: any) => (
                    <span
                      key={kategori.id_kategori}
                      className="badge bg-secondary me-2"
                    >
                      {kategori.nama_kategori}
                    </span>
                  ))}
                </div>

                <div className="mb-2">{renderStars(film.rating)}</div>

                <Link to={`/films/${film.slug}`} className="btn btn-primary">
                  Lihat Detail
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-end mt-3">
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FilmList;
