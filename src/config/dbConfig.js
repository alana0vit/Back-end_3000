import { MongoClient } from "mongodb";

export default async function conectarAoBanco(StringConexao) {
    let mongoClient;

    try{
        mongoClient = new MongoClient(StringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conecatndo ao MongoDB Atlas com sucesso');

        return mongoClient;
    } catch (erro) {
        console.error('Falaha na conexão com o banco!', erro);
        process.exit();
    }
}