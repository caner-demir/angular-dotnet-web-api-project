export class actorCreationDTO implements baseActor {
    name: string;
    dateOfBirth: Date;
    picture: File;

    constructor(name: string, dateOfBirth: Date, picture: File){        
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.picture = picture;
    }
}

export class actorDTO implements baseActor {
    picture: string;
    name: string;
    dateOfBirth: Date;

    constructor(name: string, dateOfBirth: Date, picture: string){        
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.picture = picture;
    }
}

export interface baseActor{
    name: string;
    dateOfBirth: Date;
}