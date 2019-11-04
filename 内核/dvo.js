class DVO {
    constructor( dvo ) {
        //缓存重要属性
        this.obj = dvo.obj
        this.view = dvo.view
        this.data = dvo.data

        //data 必须存在
        if( this.obj ) {
            dvo.obj = newObj(dvo.obj)

        }else{

        }
    }
}

function newObj(obj) {

    var id = obj.id
    var x = obj.x
    var y = obj.y
    var w = obj.w
    var h = obj.h
    var type = obj.type
    var txt = obj.txt
    var name = obj.name


    if(id){

    }else{
        id = 0

    }

    Object.defineProperty(obj,'txt',{
        get:function(){
            return obj['txt']
        },
        set:function(newValue){
            obj['txt'] = newValue;
            document.getElementById("v_"+id).value = newValue
            //document.getElementById('show-txt').innerHTML = newValue
        }
    })
}