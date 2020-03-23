$(function(){
    chrome.storage.sync.get(['total','limit'],function(budget){
        $('#total').text(budget.total);
        $('#limit').text(budget.limit);
        })
        $('#spendAmount').click(function(){
        //check if total already exist
            chrome.storage.sync.get('total',function(budget){
                var newTotal = 0;
                if (budget.total){
                    newTotal += parseInt(budget.total);
                //if it does exist we add to the total amount.otherwise it going to remain zero
                }
                var amount=$('#amount').val()
                if(amount){
                    newTotal += parseInt(amount);
                //in this we enter the amount if with previous value
                }
                chrome.storage.sync.set({'total': newTotal});

                $('#total').text(newTotal);
                $('#amount').val('');
            
        });
    });
});