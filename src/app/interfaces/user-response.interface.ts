 export interface UsersResponse<t>{
  page:number,
  per_page:number,
  total:number,
  total_pages:number,  
  data: t,
      support: {
        url: string,
        text: string
      }
    }
    
    export interface Iuser{
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    }
    