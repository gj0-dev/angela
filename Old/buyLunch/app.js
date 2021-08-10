function whosPaying(names){
    const rand =  Math.floor(Math.random() * names.length);
    console.log(names[rand]);
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);
