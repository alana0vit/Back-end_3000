import express from 'express';
import multer from 'multer';
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsController.js';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionsSuccessStatus: 200
}

// apenas para windows
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})
// ^

const upload = multer({dest:'./uploads', storage}); // parte do ', storage' só para windows

const routes = (app) => {
    // Perminte que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());
    app.use(cors(corsOptions));
    // Rota para buscar todos os posts
    app.get('/posts', listarPosts);
    // Rota para criar um novo post
    app.post('/posts', postarNovoPost);
    // Rota para upload de imagens (assumindo uma única iagem chamada 'imagem)
    app.post('/upload', upload.single('imagem'), uploadImagem);

    app.put('/upload/:id', atualizarNovoPost);
};

export default routes;