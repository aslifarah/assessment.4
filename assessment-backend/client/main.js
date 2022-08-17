const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const getFortunes = () => {
    axios.get("http://localhost:4000/api/fortunes/")
        .then(res => {
            const data = res.data;
			
			let dropdown = document.getElementById("selFortune")			
			
			while (dropdown.options.length > 0) {                
				dropdown.remove(0);
			}   

			data.forEach(element => {var option = document.createElement("option"); option.text = element; dropdown.add(option);});
			
            
    });
};


const fortuneAddBtn = document.getElementById("fortuneAddButton")

const addFortune = () => {
	const txtFortune = document.getElementById("txtFortune").value;
	//alert(txtFortune);
	let fortune = {fortune : txtFortune}
    axios.post("http://localhost:4000/api/fortune/", fortune)
        .then(res => {
            const data = res.data;
			getFortunes();
            alert(data);
    });
};

fortuneAddBtn.addEventListener('click', addFortune)

const fortuneRemoveBtn = document.getElementById("fortuneRemoveButton")

const removeFortune = () => {
	let dropdown = document.getElementById("selFortune");
	
	//alert(txtFortune);
	//let fortune = {fortuneindex : dropdown.selectedIndex}
	
	//alert(dropdown.selectedIndex);
	
    axios.delete("http://localhost:4000/api/fortune/"+ dropdown.selectedIndex)
        .then(res => {
            const data = res.data;
			getFortunes();
            alert(data);
    });
};

fortuneRemoveBtn.addEventListener('click', removeFortune)


const fortuneUpdateBtn = document.getElementById("fortuneUpdateButton")

const updateFortune = () => {
	let dropdown = document.getElementById("selFortune");
	
	const txtFortune = document.getElementById("txtFortune").value;

	let fortune = {fortune : txtFortune}
	
    axios.put("http://localhost:4000/api/fortune/"+ dropdown.selectedIndex, fortune)
        .then(res => {
            const data = res.data;
			getFortunes();
            alert(data);
    });
};

fortuneUpdateBtn.addEventListener('click', updateFortune)