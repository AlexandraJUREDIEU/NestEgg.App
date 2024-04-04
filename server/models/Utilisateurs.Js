// require necessaire
const database = require('./Database');
const bcrypt = require('bcrypt');

// instance db connection
const db = new database('localhost', 'root', 'root', 'nestegg')

// class utilisateur
class Utilisateur {
	constructor(nom_utilisateur, prenom_utilisateur, email_utilisateur, password, confirm_password, newsletter = 'non', pub_commerciale = 'non') {
	this.nom_utilisateur = nom_utilisateur;
	this.prenom_utilisateur = prenom_utilisateur;
	this.email_utilisateur = email_utilisateur;
	this.password = password;
	this.confirm_password = confirm_password;
	this.newsletter = newsletter;
	this.pub_commerciale = pub_commerciale;
	}

	// methode pour enregistrer un utilisateur
	async saveNewUser() {
		if  (this.password !== this.confirm_password) {
			throw new Error('Les mots de passe ne correspondent pas');
		}
		try {
			const hashedPassword = await bcrypt.hash(this.password, 10);
			const query = `INSERT INTO utilisateurs (nom_utilisateur, prenom_utilisateur, email_utilisateur, password, newsletter, pub_commerciale) VALUES (?, ?, ?, ?, ?, ?)`;
			const result = await db.userQuery(query, [this.nom_utilisateur, this.prenom_utilisateur, this.email_utilisateur, hashedPassword, this.newsletter, this.pub_commerciale]);
			return result;
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	// methode pour verifier si un utilisateur existe
	async checkUser() {
		try {
			const query = `SELECT * FROM utilisateurs WHERE email_utilisateur = ?`;
			const result = await db.userQuery(query, [this.email_utilisateur]);
			return result;
		} catch (error) {
			throw new Error('Erreur lors de la verification de l\'utilisateur');
		}
	}
}
