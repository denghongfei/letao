define(['jquery'], function () {

    //检测登录
    // http://localhost:3000/employee/employeeLogin
    $.ajax({
        url: '/api/employee/checkRootLogin',
        type: 'get',
        success: function (info) {
            if (info.error) {
                location.href = '/login.html';
            }
        }
    })

    //退出登录
    $('.logout').on('click', function() {
        $.ajax({
            url: '/api/employee/checkRootLogin',
            type: 'get',
            success: function (info) {
                if(info.success) {
                    location.href = '/login.html';
                }
            }
        })
    })
})