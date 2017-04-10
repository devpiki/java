/**
 * Created by hwayoung.kang on 2016-12-28.
 */

function error(){
    var foo = {};
    return foo.bar();
}
function aaa(){
    try {
        error();
    }catch(e){
        window.error(e);
    }
}


window.addEventListener('error',function(e){
    var error = e.error;
    console.log(error);
});

aaa();
