function isupper(string){
for(i=0;i<string.length;i++){
if(string[i].toLowerCase()!=string[i]){
return true;
break;
}
}
}
function isnum(string){
for(i=0;i<string.length;i++){
if(isNaN(string[i])==false){
return true;
break;
}
}
}