interface Song {
    songName : string;
    singerName : string;
    printSongInfo(songName: string, singerName:string):string
}

const song1 : Song = {
    songName : "Heather",
    singerName : "connon",
    printSongInfo: (songName,singerName) => {
        return `Song : ${songName} , Singer: ${singerName}`
    }
}
console.log(song1.printSongInfo("Heather","connon"))

interface MovieDetails {
    readonly name : string;
    ratings : number;
    printMovieInfo(name:string,price:number,ratings:number) : string | number
}


interface MovieGenre extends MovieDetails {
    genre: string;
}

const movie1: MovieGenre = {
    name : "inception",
    genre : "scifi",
    ratings : 9,
    printMovieInfo(
        name:string,
        price:number,
        ratings:number
     ) : string | number {
        return  `Movie name ${name} Price: ${price} Ratings : ${ratings}`;
    }
}

const res = movie1.printMovieInfo('JohnWick',100,8)
console.log(res)