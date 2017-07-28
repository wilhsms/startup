var ComingSoon = function () {

    return {
        //main function to initiate the module
        init: function () {
            //var austDay = new Date();
            //austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);

            var austDay = new Date(2018, 1, 31, 23, 59, 59);            
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());
        }

    };

}();