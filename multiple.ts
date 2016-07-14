import sdm530 from './index'

interface Iconfigs {

}




export default function (configs:Iconfigs){

function  checkDate() {
        let that = this;
        function checkRemote() {
            rpj.get("https://io.kernel.online/date").then(function(date) {

                console.log(date);

                if (new Date().getTime() > (date.unixtime - 90000)) {
                    console.log("time is valid from now");
                    that.validDate = true;
                } else {
                    checkRemote();
                }

            }).catch(function(err) {
                console.log(err);
                checkRemote();
            });
        }

        checkRemote();
    }



}