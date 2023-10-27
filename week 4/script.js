var names=new Array();
names[0]="Ruban";
names[1]="Nancy";
names[2]="Elizabeth";
names[3]="Margaret";
names[4]="Keith";
names[5]="Felix";
names[6]="Diego";
names[7]="Adrien";
names[8]="Matilda";
names[9]="Priscilla";


for (var i = 0; i < names.length; i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
    }
    else{
        console.log("Hello "+names[i])
    }
}