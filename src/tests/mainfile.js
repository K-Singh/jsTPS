


    var num = new Num(0);
    var jTransactions = new jsTPS();
    var position = -1;
    window.add = function(){
        var add = document.getElementById("input").value;
        var addNum = new Num(add);
        var addNumTrans = new addNumberTransaction(num, addNum);
        jTransactions.addTransaction(addNumTrans);
        position++;
        updateList();
        updateNumber();
        return false;
    }

    function updateList(){
        document.getElementById("transactions").innerHTML = "";
        for(var i = 0; i < jTransactions.transactions.length; i++){
            if(i !== position)
                document.getElementById("transactions").innerHTML += (jTransactions.transactions[i].toString()) + "<br\>";
            else
                document.getElementById("transactions").innerHTML += "-" + (jTransactions.transactions[i].toString()) + "<br\>";

        }
    }

    function updateNumber(){
        document.getElementById("number").value = num.getValue();
    }


 
