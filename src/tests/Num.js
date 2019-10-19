export class Num {

    constructor(val){
       this.val = val;
    }

   
    setValue(value){
        this.val = value;
    }

   
    getValue() {
        return this.val;
    }

    /**
     * Provides a textual summary of this transaction.
     * 
     * @return A string storing a textual summary of this object.
     */
   toString() {
        return "" + this.val;
    }
}
 
export default Num