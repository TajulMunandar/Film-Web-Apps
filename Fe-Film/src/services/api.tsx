import axios from "axios";

axios.defaults.withCredentials = true;
const API_BASE_URL = "http://localhost:8000/api";

export interface Film {
  id_film: number;
  kategoris: any;
  judul: string;
  slug: string;
  details: any;
  rating: number;
  thumbnail: string;
}

export interface Category {
  id_kategori: number;
  nama_kategori: any;
}

export interface FilmDetail {
  details: any;
  kategoris: any;
  judul: string;
  deskripsi: string;
  link: string;
  durasi: string;
  tahun_rilis: number;
  rating: number;
  thumbnail: string;
}


export const fetchCategories = () => axios.get(`${API_BASE_URL}/kategori`);

export const fetchFilms = (params?: object) =>
  axios.get(`${API_BASE_URL}/films`, { params });

export const fetchFilmDetail = (slug: string) =>
  axios.get(`${API_BASE_URL}/films/${slug}`);

export const createCategory = (data: { nama_kategori: string }) =>
  axios.post(`${API_BASE_URL}/kategori`, data);

// Edit kategori
export const updateCategory = (
  id_kategori: number,
  data: { nama_kategori: string }
) => axios.put(`${API_BASE_URL}/kategori/${id_kategori}`, data);

// Hapus kategori
export const deleteCategory = (id_kategori: number) =>
  axios.delete(`${API_BASE_URL}/kategori/${id_kategori}`);
