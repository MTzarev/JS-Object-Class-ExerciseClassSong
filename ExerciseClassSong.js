function songsClass (input){
let numOfSongs = input.shift();
let typeOfSong = input.pop();
let newArr = [];

for(let i=0; i<input.length; i++){
    let songInfo = input[i].split(`_`);
    
    if (songInfo.includes(typeOfSong)){
        newArr.push(songInfo[1])
    }else if(typeOfSong==="all"){
        newArr.push(songInfo[1])
    }
}
console.log(newArr.join());

    console.log();
}
songsClass([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
// songsClass([4,
//     'favourite_DownTown_3:14',
//     'listenLater_Andalouse_3:24',
//     'favourite_In To The Night_3:58',
//     'favourite_Live It Up_3:48',
//     'listenLater']);