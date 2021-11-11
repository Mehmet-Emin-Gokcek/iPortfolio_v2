  var form = document.getElementById("email-form");
  
    async function handleSubmit(event) {
      event.preventDefault();
	  
	  document.querySelector(".loading").classList.add("d-block");
	  document.querySelector(".error-message").classList.remove("d-block");
      document.querySelector(".sent-message").classList.remove("d-block");
	  
	  var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
		setTimeout(() => { document.querySelector(".loading").classList.remove("d-block"); }, 500);
		setTimeout(() => { document.querySelector(".sent-message").classList.add("d-block"); }, 500);
        form.reset()
      }).catch(error => {
         document.querySelector(".error-message").classList.add("d-block");
      });
    }
    form.addEventListener("submit", handleSubmit);
