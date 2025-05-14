//complete this code
class Animal {
	Constructor(species){
		this.species = species;
	}
	get species(){
		return this.species;
	}

	set species(species){
		this.species = species;
	}

	makeSound(){
		return `The ${this.species} make a sound`;
	}
}

class Dog extends Animal {
	bark(){
		return "woof";
	}
}

class Cat extends Animal {
	purr(){
		return "purr";
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
