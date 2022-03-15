var i=1;
function change()
{
if(localStorage.getItem("wqq"+i+"")!=undefined)
{
document.getElementById("img").src=sessionStorage.getItem("wqq"+i+"");
sessionStorage.setItem("wqq"+i+"","("+localStorage.getItem("wqq"+i+"")+").jpg");
localStorage.removeItem("wqq"+i+"");
}
document.getElementById("img").src=sessionStorage.getItem("wqq"+i+"");
i++;
// for(var i=0;i<54;i++)
// {
//     localStorage.removeItem("wqq"+i+"");
// }  
};

function prev()
{
  if(i!=1)
  {
      i--;
      document.getElementById("img").src=sessionStorage.getItem("wqq"+i+"");
  }
}