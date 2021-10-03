export class movieCreationDTO implements movieBase {
    title: string;
    summary: string;
    poster: File;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
    genresIds: number[];
    movieTheaterIds: number[]

    constructor(title: string, summary: string, poster: File, inTheaters: boolean,
        releaseDate: Date, trailer: string, genresIds: number[], movieTheaterIds: number[]) {
            this.title = title;
            this.summary = summary;
            this.poster = poster;
            this.inTheaters = inTheaters;
            this.releaseDate = releaseDate;
            this.trailer = trailer;
            this.genresIds = genresIds;
            this.movieTheaterIds = movieTheaterIds;
    }    
}

export class movieDTO implements movieBase {
    title: string;
    summary: string;
    poster: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;

    constructor(title: string, summary: string, poster: string, inTheaters: boolean,
        releaseDate: Date, trailer: string, genresIds: number[]) {
            this.title = title;
            this.summary = summary;
            this.poster = poster;
            this.inTheaters = inTheaters;
            this.releaseDate = releaseDate;
            this.trailer = trailer;
    }    
}

export interface movieBase {
    title: string;
    summary: string;
    inTheaters: boolean;
    releaseDate: Date;
    trailer: string;
}