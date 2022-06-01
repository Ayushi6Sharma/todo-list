let addbtn=document.getElementsByClassName("todo-button");
addbtn[0].addEventListener("click", function(event){
  event.preventDefault();
});
// add button function
addbtn[0].addEventListener("click",addElement);
function addElement()
{	let ul=document.getElementsByClassName("todo-list");

	let li=document.createElement("li");
	let deletebutton=document.createElement("button");
	let completebutton=document.createElement("button");
	let div=document.createElement("div");

	let listtext=document.querySelector(".todo-input").value;
	// if(listtext.trim()=="" )
	// {
	// 	return;
	// }
	div.className="todo";
	
	li.innerText=listtext;
	li.className="todo-item";

	deletebutton.innerText="delete";
	deletebutton.className="trash-btn";

	completebutton.innerText="completed";
	completebutton.className="complete-btn";
	div.append(li,completebutton,deletebutton);
	ul[0].appendChild(div);

	// completed btn function
	let completebtn=document.getElementsByClassName("todo-list");
	let completevalue=false;
	completebtn[0].addEventListener("click",completeElement);
	function completeElement(e)
	{		
		if(e.target.className=="complete-btn")
		{	
			let targetbtn=e.target;
			let div=targetbtn.parentNode;
			if(completevalue==false)
			{	
				console.log(div.children[0]);
				div.children[0].style.textDecoration="line-through solid rgb(0, 0, 0)";
				completevalue=true;
			}
			else
			{	
				
				div.children[0].style.textDecoration="none";
				completevalue=false;
			}
		}
	}

// remove btn function
	let removebtn=document.getElementsByClassName("todo-list");
	removebtn[0].addEventListener("click",removeElement);
	function removeElement(e)
	{		
		if(e.target.className=="trash-btn")
		{			
			// let targetbtn=e.target;
			// let div=targetbtn.parentNode;
			// let ul=div.parentNode;
			// ul.removeChild(div);
			e.target.parentNode.remove();
		}
	}

}