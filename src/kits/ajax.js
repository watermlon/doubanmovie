let ajax={
    get:(parms,fn)=>{
        let url = 'https://api.douban.com/'+parms
        vm.$http.jsonp(url).then((res)=>{
        let data = res.body;
        if (fn) {
            fn(data)
            } 
        })
    }
}
export default ajax


