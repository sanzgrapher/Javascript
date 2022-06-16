let gces = {
    name: "Gandaki College Of Engineering & Science",
    location: {

        streetName:"lamachur",
        city: "pokhara",
        state: "gandaki",
        country: "nepal",
        
    },
    affilateTo: "Pokhara University",
    staffs: [
        {
            name: "Birendra Khadka",
            address: "Lamachaur",
            position: "principal",
            phoneNo: "9856011111",
        },
        {
            name: "Ashok Raj",
            address: "Chipledhunga",
            position: "Vice principal",
            phoneNo: "9856011111",
        }
    ],
    noOfStaffs() {
        return this.staffs.length()
   }
  


}
console.log(gces.name);
console.log(gces.staffs);
 
// console.log(gces.staffs[0].position)
getposition = gces.staffs[0].position;

for (i = 0; 1 <= 1;i++) {
    // console.log(gces.staffs[i].position);

    if (getposition == "principal") {
        console.log(gces.staffs[1].name)
        
    }

    
 }


