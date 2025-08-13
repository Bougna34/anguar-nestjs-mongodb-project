class Blog {
    private id: number;
    private titre: string;
    private contenu: string;
    private auteur: string;

    constructor(id: number, titre: string, contenu: string, auteur: string) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;
    }

    getAllInfos(): string {
        return `${this.id} - ${this.titre} - ${this.contenu} - ${this.auteur}`;
    }
}