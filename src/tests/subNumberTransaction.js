export class subNumberTransaction {

    constructor(oldNum, addition){
       this.oldNum = oldNum;
       this.oldNumVal = this.oldNum.getValue();
       this.addition = addition;
    }

   
    doTransaction() {
        this.oldNum.setValue(this.oldNum.getValue() - this.addition.getValue())
    }

   
    undoTransaction() {
        this.oldNum.setValue(this.oldNumVal);
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
   toString() {
        return "- " + this.addition + "\n";
    }
}
 
export default subNumberTransaction