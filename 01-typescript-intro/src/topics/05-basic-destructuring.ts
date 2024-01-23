export {};

interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    year: number;
    author: string;
}

const audioPlayer : AudioPlayer= {
    audioVolume: 4,
    songDuration: 15,
    song: "Organs for Oceans",
    details: {
        year: 2017,
        author: "Jaason"
    }
}

//primero desestructurar details para sacar los datos
//const { details } = audioPlayer;

const { song:anotherSong, songDuration: duration, details} = audioPlayer;
const { author } = details;

// console.log("song", anotherSong);
// console.log("duration", duration);
// console.log("Author", author);

const dbz : string[] = ['Goku', 'Piccolo', 'Trunks']
const vegeta = dbz[3] || 'No hay pj vegeta'
console.log("Pj 4:", vegeta);

//hay una mejor manera de hacerlo

const [ , , trunks = 'Not found'] : string[] = ['Goku', 'Piccolo', 'Trunks'];

console.error('personaje 3:', trunks); 
