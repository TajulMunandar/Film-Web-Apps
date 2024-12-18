import React, { useEffect, useState, useRef } from "react";
import {
  fetchFilmDetail,
  FilmDetail as FilmDetailType,
  fetchFilms,
  Film,
} from "../services/api";
import { useParams, Link } from "react-router-dom";

const FilmDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [film, setFilm] = useState<FilmDetailType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [popularFilms, setPopularFilms] = useState<Film[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null); // Use ref for video

  // Mengambil detail film berdasarkan slug
  useEffect(() => {
    if (slug) {
      fetchFilmDetail(slug)
        .then((response) => {
          const filmData = response.data.data;
          setFilm(filmData);
          setLoading(false);
        })
        .catch(() => {
          setError("Gagal memuat detail film.");
          setLoading(false);
        });
    }
  }, [slug]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Tambahkan smooth scrolling
    });
  };

  // Mengambil daftar film dan filter berdasarkan rating 4 dan 5
  useEffect(() => {
    fetchFilms()
      .then((response) => {
        const films = response.data.data;
        const filteredFilms = films.filter(
          (film: FilmDetailType) => film.rating >= 4
        );
        setPopularFilms(filteredFilms);
      })
      .catch(() => {
        setError("Gagal memuat film populer.");
      });
  }, []);

  useEffect(() => {
    if (videoRef.current && film) {
      videoRef.current.load(); // Reload video when film changes
      videoRef.current.play(); // Optionally play the video again
    }
  }, [film]);

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
        );
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
        );
      }
    }
    return stars;
  };

  const renderStars2 = (rating: number) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-star-fill text-warning"
            viewBox="0 0 16 16"
            key={i}
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-star text-warning"
            viewBox="0 0 16 16"
            key={i}
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
          </svg>
        );
      }
    }
    return stars;
  };

  if (loading)
    return (
      <div className="centered">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  if (error)
    return <div className="alert alert-danger text-center mt-5">{error}</div>;

  return (
    <div className="container mt-4">
      <div className="row d-flex">
        <div className="col col-lg-12">
          <video
            ref={videoRef}
            controls
            autoPlay
            width="100%"
            height="auto"
            className="mt-3"
          >
            <source src={film?.details.link} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h2 className="mb-4 mt-3">
            {film?.judul} ({film?.details.tahun_rilis})
          </h2>
          <hr className="text-danger" />
          <p>
            <strong>Deskripsi:</strong> {film?.details.deskripsi}
          </p>
          <p>
            <strong>Rating:</strong> {renderStars(film?.rating ?? 0)}
          </p>
          <p>
            <strong>Kategori:</strong>{" "}
            {film?.kategoris.map((kategori: any) => (
              <span
                key={kategori.id_kategori}
                className="badge bg-secondary me-2"
              >
                {kategori.nama_kategori}
              </span>
            ))}
          </p>
          <p>
            <strong>Durasi:</strong> {film?.details.durasi}
          </p>
        </div>
      </div>
      <hr className="text-danger" />

      <h3>Film Populer</h3>
      {/* Bagian Film Populer */}
      <div
        className="d-flex mt-3"
        style={{ gap: "16px", padding: "10px 0", overflowX: "auto" }}
      >
        {popularFilms.map((film) => (
          <div key={film.id_film} className="card">
            <img
              src={film.thumbnail}
              className="card-img-top"
              alt={film.judul}
              style={{
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <div className="card-body">
              <div className="row">
                <div className="col col-lg-12 mb-0">
                  <h5 className="card-title mb-0">{film.judul}</h5>
                </div>
                <div className="col mt-0">
                  <span>{renderStars2(film?.rating ?? 0)}</span>
                </div>
              </div>
              <p className="card-text">{film.details.deskripsi.slice(0, 20)}</p>
              <Link
                to={`/films/${film.slug}`}
                className="btn btn-primary btn-sm mt-2"
                key={film.slug}
                onClick={scrollToTop}
              >
                Nonton
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmDetail;
