
$(document).on('pagecontainerbeforeshow', function(e, ui) {
    var pageId = $('body').pagecontainer('getActivePage').prop('id');

    if(pageId==='home'){
        console.log('loading home...');

        var request = new XMLHttpRequest();
        request.open("GET", "http://www.interkoi.eu/json/star/", true);
        request.onreadystatechange = function() {
                //Call a function when the state changes.
            if (request.readyState == 4) {
                if (request.status == 200 || request.status == 0) {
                    var JSON_result = JSON.parse(request.responseText);

                    console.log(JSON_result);
                    var data = '<ul data-role="listview" data-inset="true" class="ui-listview ui-listview-inset ui-corner-all ui-shadow">';
                    var tableClass;
                    for (i = 0; i < JSON_result.koi_star.length; i++) {
                        if (i == 0) {
                            liClass = ' ui-first-child';
                        }else if(i == JSON_result.koi_star.length - 1) {
                            liClass = 'ui-last-child';
                        }else{
                            liClass = '';
                        }

                        data += '<li class="ui-li-has-alt ui-li-has-thumb'+liClass+'">';
                        data += '<a href="#koi-detail" class="ui-btn">';
                        data += '<img src="http://www.interkoi.eu/files/koi_image/1397655748/small_SH-V14-0427_01.jpg">';
                        data += '<h3>' + JSON_result.koi_star[i].code + '</h3>';
                        data += '<p>' + JSON_result.koi_star[i].length + '</p>';
                        data += '</a>';
                        data += '<a href="" data-rel="dialog" data-transition="slideup" class="ui-btn ui-btn-icon-notext ui-icon-carat-r" title="Purchase album"></a>';
                        data += '</li>';

//                        data += "<tr style='border: 1px solid black'>";
//                        data += "<td class='" + tableClass + "'>";
//                        data += "<img src='" + JSON_result.koi_star[i].code + "'/>";
//                        data += "</td>";
//                        data += "<td class='" + tableClass + "'>";
//                        data += "<b>" + JSON_result.koi_star[i].id + "</b>";
//                        data += "</td>";
//                        data += "</tr>";
                    }
                    data += "</ul>";
                    var result = document.getElementById("star-koi");
                    result.innerHTML = data;
                }
            }
        }
        console.log("asking for JSON_result");
        request.send();
//        $.ajax({
//            beforeSend: function() { $.mobile.showPageLoadingMsg(); }, //Show spinner
//            complete: function() { $.mobile.hidePageLoadingMsg() }, //Hide spinner
//            url: '',
//            dataType: 'json',
//            headers: '',
//            success: function(data) {
//            }
//        });

    }else{
        console.log('loading news...');
    }
});