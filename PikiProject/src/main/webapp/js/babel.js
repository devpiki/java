/**
 * Created by piki on 2016-12-27.
 */
//const getMessage = () => "Hello World";
//document.getElementById('output').innerHTML = getMessage();

function checkParam(){
    throw new Error('파라미터를 입력하세요');
}

function foo(param=checkParam()){
    return param;
}

const arr = ['a','b','c'];
for(const [index, elem] of arr.entries()){
    document.getElementById('output').innerHTML
        += (`index = ${index}, elem = ${elem}`) + '<br/>';
}

for(const ch of 'x\uD83D\uDE80y'){
    console.log(ch +'||'+ ch.length)
}

var a = 'a';
var b = 'b';
var c = [a,b] = [b,a];

const tmpl = addrs => `<table>
    ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>`).join('')}
    </table>
`;

const data = [
    {first:'<Jane>', last:'Bond'},
    {first:'Lars', last:'<Croft>'}];
document.getElementById('output1').innerHTML = tmpl(data);