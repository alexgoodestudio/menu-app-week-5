/* 
Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.
*/

class Member {
    constructor(name,position){
    this.name = name;
    this.position = position; 
    }

    describe() {
        return `${this.name} plays ${this.position}.`
         
    }
}

class Band{
    constructor(name){
        this.name = name;
        this.members =[]; 
    }   
    addMember(member){
      if (member instanceof Member) {
      this.members.push(member);
    } else {
        throw new Error(`You can only add an instance of member. 
        Argument is not a member: ${member}`)
    }
}

describe (){
    return` ${this.name} has ${this.members.length} members.`;
    }
}

class Menu {
    constructor(){
        this.bands =[];
        this.selectedBand = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1' : 
                    this.createBand();
                    break;
                case '2': 
                    this.viewBand();
                    break;
                case '3':
                    this.displayBands();
                    break;
                    case '4':
                    this.deleteBand();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert`Take Care!
        - with love
        Promineo Records`;
    }
    showMainMenuOptions(){
        return prompt(`
        0) exit
        1) create new band
        2) band details
        3) display bands
        4) delete bands
        `);
    }

    showBandMenuOptions(bandInfo){
        return prompt (`
        0) back
        1) create member
        2) delete member
        --------------------------
        ${bandInfo}
        `);
    }

    displayBands(){
        let bandString = '';
        for (let i = 0; i < this.bands.length; i++ ) {
            bandString += i + ') ' + this.bands[i].name + '\n';
        }
        alert(bandString);
    }
    createBand(){
        let name = prompt('Enter name for new band:')
        this.bands.push(new Band(name));
        }
     viewBand(){
            let index = prompt('Enter the index of the band'); 
            if (index > -1 && index < this.bands.length){
              this.selectedBand = this.bands[index];
              let description = 'Band Name: ' + this.selectedBand.name + '\n'; 
              
              for (let i = 0; i < this. selectedBand.members.length; i++){
              description += i + ') ' + this.selectedBand.members[i].name
              + ' - ' + this.selectedBand.members[i].position + '\n';
              }
              let selection = this.showBandMenuOptions(description);
              switch (selection){
                case '1':
                    this.createMember();
                    break;
                case '2':
                    this.deleteMember();

            
                }
            }
        }
     deleteBand() {
            let index = prompt ('Enter the index of the band you would like to delete:');
            if (index > -1 && index < this.bands.length){
                this.bands.splice(index,1);
            }
            
        }
        createMember(){
            let name = prompt (' Enter name for new member: ');
            let position = prompt('Enter position for new member:');
            this.selectedBand.members.push(new Member(name, position));

        }  
        deleteMember(){
            let index = prompt ('Enter the index of the member you wish to delete');
            if (index > -1 && index < this.selectedBand.members.length){
                this.selectedBand.members.splice(index,1);
            }
        }
    }
    
    let menu = new Menu();
    menu.start();