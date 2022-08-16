(function() {
    const birthday = { 
        year: 2000,
        month: 9,
        date: 20
    };
    const today = { 
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate()
    };

    var age = today.year - birthday.year;

    if (today.month < birthday.month ||
        (today.month == birthday.month && today.date > birthday.date))
        age--;
        
    console.log("Shinza is " + age + " years old.");
})()