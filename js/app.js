//import '../scss/main.scss';
$(function () {

    const showbtn = $('.show-lastPushEvent-btn');
    const repo_info = $('.repo-info');
    const repo_data = $('.repo-data');

    const insertEventsData = ((eventsData) => {
        const events = Object.values(eventsData);
        const pushEvents = events.filter(i => i.type === "PushEvent");
        const pushEventsSorted = pushEvents.sort((a, b) => {
            return (a.created_at < b.created_at) ? -1 : ((a.date > b.date) ? 1 : 0);
        });

        let lastPushEvent = pushEventsSorted[0];
        let userAvatarUrl = lastPushEvent.actor.avatar_url;
        let repoNameData = lastPushEvent.repo.name;
        let repoUrlData = lastPushEvent.repo.url;
        let pushDateISO8601 = lastPushEvent.created_at;
        let pushDate_Date = String(new Date(pushDateISO8601));
        let pushDateData= pushDate_Date.replace("GMT+0100 (czas środkowoeuropejski standardowy)", "");
        let userAvatar = $('<img class="avatar">').attr('src', userAvatarUrl);
        let repoName = $('<li>').text(repoNameData);
        let repoUrl = $('<li>').append($('<a>').attr('href', repoUrlData).text(repoUrlData));
        let pushDate = $('<li>').text(pushDateData);
        

        $('.content--background').append(userAvatar);
        repo_data.append(repoName);
        repo_data.append(repoUrl);
        repo_data.append(pushDate);

        showbtn.addClass('hide');
        $('#userName').addClass('hide');
        $('#goBackBtn').removeClass('hide').addClass('visible');
        repo_info.removeClass('hide').addClass('visible');
        repo_data.removeClass('hide').addClass('visible');

        $('.content--grid').removeClass('content--background');

    });

    showbtn.one('click', function () {
        const gitUser = $('#userName').val();

        let url = `https://api.github.com/users/${gitUser}/events?per_page=100`

        $.ajax({
            url: url,
            method: 'GET'
        }).done((eventsData) => {
            insertEventsData(eventsData);
        }).fail(() => {
            alert("enter valid github login");
        })

    });

});