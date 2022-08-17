let fortunes = ["A beautiful, smart, and loving person will be coming into your life.","A dubious friend may be an enemy in camouflage.","A faithful friend is a strong defense.","A feather in the hand is better than a bird in the air.","A fresh start will put you on your way."];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
	
    getFortune: (req, res) => {        
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getAllFortune: (req, res) => {                    
        res.status(200).send(fortunes);
    },
	
    addFortune: (req, res) => {        
		
		let fortune = req.body.fortune;
		
		fortunes.push(fortune);
      
        res.status(200).send(fortune + " Successfully Added");
    },	
	
    removeFortune: (req, res) => {        
		
		let fortuneIndex = req.params.fortuneindex;		
      
        res.status(200).send(fortunes.splice(fortuneIndex, 1) + " Successfully Deleted");
    },	
		
    putFortune: (req, res) => {        
		
		let fortuneIndex = req.params.fortuneindex;		
		let fortune = req.body.fortune;
      
        res.status(200).send(fortunes.splice(fortuneIndex, 1, fortune) + " Successfully Updated");
    }	
			

}