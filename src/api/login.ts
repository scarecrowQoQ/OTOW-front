import request from '@/utils/request';

export function login(code: string){
    return request({
        url: '/loginMachine/verityCode',
        method:"get",
        params:{
            code: code
        }
    })
}
