export class actorCreationDTO implements baseActor {
    name: string;
    dateOfBirth: Date;
    picture: File;
    biography: string;

    constructor(name: string, dateOfBirth: Date, picture: File, biography: string){        
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.picture = picture;
        this.biography = biography;
    }    
}

export class actorDTO implements baseActor {
    picture: string;
    name: string;
    dateOfBirth: Date;
    biography: string;

    constructor(name: string, dateOfBirth: Date, picture: string, biography: string){        
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.picture = picture;
        this.biography = biography;
    }    
}

export interface baseActor{
    name: string;
    dateOfBirth: Date;
    biography: string;
}