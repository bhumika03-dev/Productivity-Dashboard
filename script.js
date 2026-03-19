var allElems=document.querySelectorAll('.elems');
var FullElemPage= document.querySelectorAll('.fullElem');
var allFullElemsBackBtn=document.querySelectorAll('.fullElem .back')
allElems.forEach(function(elems){
    elems.addEventListener('click',function(){
        FullElemPage[elems.id].style.display='block';
    })
})
allFullElemsBackBtn.forEach(function(back){
    back.addEventListener('click',function(){
        FullElemPage[back.id].style.display='none';
    })
})