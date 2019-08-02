var parent=document.getElementById("parent");
var btn=document.getElementById("btn");
var ip=document.getElementById("ip");
function Todo()
{
    this._count=0;
    this._store=[];
}

Todo.prototype.addTodo=function(val)
{
    this._store.push(val);
    var node=document.createElement("tr");
    var node1=document.createElement("td");
    node1.innerHTML=val;
    node.appendChild(node1);
    var node2=document.createElement("td");
    var del=document.createElement("button");
    del.innerHTML="delete todo";
    node2.appendChild(del);
    node.appendChild(node2);
    parent.appendChild(node);
    
    del.addEventListener('click',this.deleteTodo.bind(this));
}

Todo.prototype.deleteTodo=function(e)
{

    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);

}
var ob=new Todo();
btn.addEventListener("click",function()
{
    ob.addTodo(ip.value);
    ip.value="";
})