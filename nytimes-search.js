// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "9c4cc5ccf9044b47b63cfc79461ccc0a",
  'q': "tacos",
  'begin_date': "20150101",
  'end_date': "20170101",
  'page': 10
});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	console.log(url);
  console.log(result);
}).fail(function(err) {
  throw err;
});

var searchTerm = '';
var beginDate = '19000101';
var endDate = '20171103';
var resultsNum = '';

$(document).ready(function () {

	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";



	$('button').click(function (event) {
		event.preventDefault();
		searchTerm = $('#search').val();
		beginDate = $('#yearone').val() + '0101';
		endDate = $('#yeartwo').val() + '0101';
		resultsNum = $('#records').val();

		queryUrl += '?' + $.param({
			  'api-key': "9c4cc5ccf9044b47b63cfc79461ccc0a",
			  'q': searchTerm,
			  'begin_date': beginDate,
			  'end_date': endDate,
			  'page': resultsNum
			});

		console.log(searchTerm);

		$.ajax({
			url: queryUrl,
			method: 'GET'
		}).done(function (result) {
			console.log(result);

			var articleInfo = $('<div>');

			// array of articles
			var output = result.response.docs;

			for (var i=0; i < output.length; i++) {
				/*var p = $('<p>');
				p.append(output[i]);
				articleInfo.append(output[i] + '<br>');*/
				// abstract, byline, headline, url

				var link = $('<a>Click here to go to the article</a>');
				link.attr('href', output[i].web_url);

				articleInfo.append(output[i].headline.print_headline + '<br>');
				articleInfo.append(output[i].byline.original + '<br>');
				articleInfo.append(output[i].abstract + '<br>');
				articleInfo.append(link);

			}



			$('.results').append(articleInfo);
			
		})
	})


});




