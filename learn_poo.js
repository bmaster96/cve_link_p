/// part json analysis of implementation.
superHeroes.hometown


/// oriented object et prototypage

function creerNouvellePersonne(nom) {
    var obj = {};
    obj.nom = nom;
    obj.salutation = function () {
        alert('Salut ! je m\'appelle ' + this.nomComplet +'.');
    };
    return obj;
}


function Groupe(designation) {
    this.designation = designation;    
}

function Sous_groupe (designation) {

}


function Personne(prenom, nom, age, genre, interets) {
       
        this.nomComplet= {prenom,nom};
        this.age = age;
        this.genre = genre;
        this.interets = interets;
   
        this.bio = function () {
            alert(this.nomComplet.prenom + ' ' + this.nomComplet.nom + ' a ' + this.age + ' ans. Il aime ' + this.interets[0] + ' et ' + this.interets[1] + '.');
        };
        this.salutation = function () {
            alert('Bonjour ! Je m\'appelle ' + this.nomComplet.prenom + '.');
        };
}
;

Personne.prototype.aurevoir = function() {
    alert(this.nomComplet.prenom + ' est sorti. Au revoir ! ');
}

    var personne1 = new Personne('Bob', 'Smith', 32, 'homme', ['musique', 'ski']);
 
    function Professeur (prenom, nom, age, genre, interest, matiere) {
        Personne.call(this, prenom, nom, age, genre, interest, matiere);
        this.matiere = matiere;
    }

    Professeur.prototype = Object.create(Personne.prototype);

    Professeur.prototype.constructor = Professeur;
   // alert(personne1['age']);

    var professeur1 = new Professeur('Cédric', 'Villani', 44, 'm', ['football', 'cuisine'], 'les mathématiques');

      


 
