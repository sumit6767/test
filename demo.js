var obj = {

    val: 100
    
    }
    
    function fun(){
    
    console.log(this.val)
    
    }
    
    fun.call(obj)