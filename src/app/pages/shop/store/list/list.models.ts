export interface Product {
    id: number;
    estado: string;
    nombre: string;
    categoria: string;
    categoriaId:number;
    marca: string;
    marcaId:number;
    descripcion: string;
    imgURL: string;
    codigo: number;
    precio: number;
    cantidad: number;
    unidadMedida: string;
    unidMinVenta: number;
    createdAt: Date;
    updatedAt: Date;
}

//objeto request de paginacion para que se muestres 10 o 20 productos y no 5mil, por ejemplo.
export interface PaginationRequest {
    pageIndex: number | null;
    pageSize: number | null;
    search: string | null;
    sort: string | null;
    marca: number | null;
    categoria: number | null;
}

//Objeto paginacion con las respuestas que me de el cliente, los resultados que me de el cliente.
export interface Pagination {
    count: number;//lo que me devuelve el servidor cantidad de elementos
    pageIndex: number;//que me devuelva el index de la pagina
    pageSize: number;
    pageCount: number;
    data: any[];//coleccion de elementos que me devolvera el servidor de tipo Product
}
