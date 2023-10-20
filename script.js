//your JS code here. If required.
  const ptag=document.getElementById("status");
  const button=document.getElementById("enterBtn");

  button.addEventListener("click", ()=>{
	  let h1=document.createElement("h1");
	  h1.id="status";
	  h1.innerText="Metaverse Entered";
	  document.body.insertBefore(h1,ptag);
	  ptag.remove();
  })
