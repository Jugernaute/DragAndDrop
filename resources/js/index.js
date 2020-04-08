$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
} );

let ul = '<ul id="sortable">';
    quotes.forEach(function(q) {
        let txt = q.text
        let avatar = q.site.avatarUrl;
        let name = q.site.name;
        let date = q.date;
        let img = '<img src="../resources/media/'+avatar+'" alt="'+name+'">';
        let img_before = '<div class="picture" >'+img+'</div>';
        let text = "<p>"+txt+"</p>";
        let signature = "<p class='signature'>"+name+"</p>";
        let wdate = "<p class='date'>"+date+"</p>"


        ul += '<li class="ui-state-default">'+img_before+ text+signature+wdate+'</li>';
    });
    ul += '</ul>';
    document.getElementById("cont").innerHTML = ul;
