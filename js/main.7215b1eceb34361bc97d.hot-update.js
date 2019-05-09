webpackHotUpdate("main",{

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n//import '../scss/main.scss';\n$(function () {\n\n    var input = $('#userName');\n    input.on(\"change\", function () {\n        var gitUSer = input.val();\n        console.log(gitUSer);\n    });\n\n    var url = \"\";\n    //const url = \"https://api.github.com/orgs/allegro/events?per_page=100\";\n    var showbtn = $('.show-lastPushEvent-btn');\n    var repo_info = $('.repo-info');\n    var repo_data = $('.repo-data');\n\n    function insertEventsData(eventsData) {\n        var events = Object.values(eventsData);\n        var pushEvents = events.filter(function (i) {\n            return i.type === \"PushEvent\";\n        });\n        var pushEventsSorted = pushEvents.sort(function (a, b) {\n            return a.created_at < b.created_at ? -1 : a.date > b.date ? 1 : 0;\n        });\n\n        var lastPushEvent = pushEventsSorted[0];\n        var userData = lastPushEvent.org.login;\n        var repoNameData = lastPushEvent.repo.name;\n        var repoUrlData = lastPushEvent.repo.url;\n        var pushDateData = lastPushEvent.created_at;\n        var authorData = lastPushEvent.actor.login;\n\n        var repoName = $('<li>').text(repoNameData);\n        var pushDate = $('<li>').text(pushDateData);\n        var author = $('<li>').text(authorData);\n        var user = $('<li>').text(userData);\n        var repoUrl = $('<li>').append($('<a>').attr('href', repoUrlData).text(repoUrlData));\n\n        var repoDataList = $('.repo-data');\n\n        repoDataList.append(repoName);\n        repoDataList.append(pushDate);\n        repoDataList.append(author);\n        repoDataList.append(user);\n        repoDataList.append(repoUrl);\n\n        showbtn.addClass('hide');\n        repo_info.removeClass('hide').addClass('visible');\n        repo_data.removeClass('hide').addClass('visible');\n\n        //console.log(userData);\n        //console.log(repoNameData);\n        //console.log(repoUrlData);\n        //console.log(pushDateData)\n        //console.log(authorData);\n    }\n\n    showbtn.on('click', function () {\n\n        $.ajax({\n            url: url,\n            method: 'GET'\n        }).done(function (eventsData) {\n            insertEventsData(eventsData);\n        }).fail(function (error) {\n            console.log(error);\n        });\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

})