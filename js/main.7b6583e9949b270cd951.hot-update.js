webpackHotUpdate("main",{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//import '../scss/main.scss';\n$(function () {\n\n    var showbtn = $('.show-lastPushEvent-btn');\n    var repo_info = $('.repo-info');\n    var repoDataList = $('.repo-data');\n    var repo_data = $('.repo-data');\n\n    function insertEventsData(eventsData) {\n\n        var events = Object.values(eventsData);\n        var pushEvents = events.filter(function (i) {\n            return i.type === \"PushEvent\";\n        });\n        var pushEventsSorted = pushEvents.sort(function (a, b) {\n            return a.created_at < b.created_at ? -1 : a.date > b.date ? 1 : 0;\n        });\n\n        var lastPushEvent = pushEventsSorted[0];\n\n        var userAvatarUrl = lastPushEvent.actor.avatar_url;\n        var repoNameData = lastPushEvent.repo.name;\n        var repoUrlData = lastPushEvent.repo.url;\n        var pushDateData = lastPushEvent.created_at;\n\n        //const userAvatar = $('img').attr('src', userAvatarUrl);\n        var repoName = $('<li>').text(repoNameData);\n        var pushDate = $('<li>').text(pushDateData);\n        var repoUrl = $('<li>').append($('<a>').attr('href', repoUrlData).text(repoUrlData));\n\n        $('.content--background').css(\"background-image\", url('userAvatarUrl'));\n\n        // repo_info.before(userAvatar);  \n        repoDataList.append(repoName);\n        repoDataList.append(pushDate);\n        repoDataList.append(repoUrl);\n\n        showbtn.addClass('hide');\n        repo_info.removeClass('hide').addClass('visible');\n        repo_data.removeClass('hide').addClass('visible');\n    }\n\n    showbtn.one('click', function () {\n        var gitUser = $('#userName').val();\n\n        var url = 'https://api.github.com/users/' + gitUser + '/events?per_page=100';\n\n        $.ajax({\n            url: url,\n            method: 'GET'\n        }).done(function (eventsData) {\n            insertEventsData(eventsData);\n            console.log(eventsData[0]);\n        }).fail(function () {\n            alert(\"enter valid github user login\");\n        });\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

})