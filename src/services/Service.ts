import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-spring-71j2.onrender.com'
})

//funcao cadastrar usuario
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) =>{
    const resposta = await api.post(url, dados); setDados(resposta.data)
}

//funcao autenticar usuario
export const login = async (url:string, dados: Object, setDados: Function) => {
    const resposta= await api.post(url,dados); setDados(resposta.data)
}