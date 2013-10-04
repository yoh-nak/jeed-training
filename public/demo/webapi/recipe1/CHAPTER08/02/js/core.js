//問い合せさきと、データタイプのデフォルトを指定します。
$.ajaxSetup({
	url : 'api.php',
	dataType : 'json'
});


$.ajax({
	type : 'GET',
	data :
	{
		api  : 'account/verify_credentials',
		data : {
			include_entities : true
		}
	},
	success : function(data, status, xhr)
	{
		var username = data.name,
			image = data.profile_image_url,
			screenName = data.screen_name;
				
		$('#Account').append(
			'@' + screenName + 'としてログイン中<img src="' + image + '" alt="' + username + '">'
		);
	}
});

$(function(){
	
	$('#FormCheckTweet')
		.submit(function(e){
			
			e.preventDefault();

            var useHashtag   = $('#UseHashtag').is(':checked'),
				useStartDate = $('#UseStartDate').is(':checked'),
				useEndDate   = $('#UseEndDate').is(':checked');
			
			var hashtag   = $('#Hashtag').val();

			var startYear    = parseInt($('#StartYear').val()),
				startMonth   = parseInt($('#StartMonth').val()) - 1,
				startDate    = parseInt($('#StartDate').val()),
				startHours   = parseInt($('#StartHours').val()),
				startMinutes = parseInt($('#StartMinutes').val()),
				startSeconds = parseInt($('#StartSeconds').val()),
				endYear      = parseInt($('#EndYear').val()),
				endMonth     = parseInt($('#EndMonth').val()) - 1,
				endDate      = parseInt($('#EndDate').val()),
				endHours     = parseInt($('#EndHours').val()),
				endMinutes   = parseInt($('#EndMinutes').val()),
				endSeconds   = parseInt($('#EndSeconds').val()),
				startDateObj = new Date(startYear, startMonth, startDate, startHours, startMinutes, startSeconds),
				endDateObj   = new Date(endYear, endMonth, endDate, endHours, endMinutes, endSeconds);
			
			var $lotForm = $('#FormTweetLot').hide();
				$panel = $('#TweetList').html('');
			
			$('#Status').show();
			
			getTweet(1, useHashtag, hashtag, useStartDate, startDateObj, useEndDate, endDateObj, $panel, function(){
				$('#PanelTweetList');
				$('#Status')
					.text('完了しました。');
				
				$lotForm.show();
				
				$lotForm
					.submit(function(e){
						e.preventDefault();
						
						$('#Status')
							.text('抽選を開始しました。');
						
						$('#TweetList>li')
							.hide();
							
						var lotNum = parseInt($('#LotNum').val());
						
						for(i = 0;i < lotNum; i++)
						{
							var liLength = $('#TweetList>li:hidden').length;
							
							$('#TweetList>li:hidden:eq(' + Math.floor(liLength * Math.random()) + ')').show();
						}
						
						$('#Status')
							.text('抽選を終了しました。');
						
						return false;	
					});
			});
			
			return false;
			
		});
			
});

var getTweet = function(pageNum, useHashtag, hashtag, useStartDate, startDate, useEndDate, endDate, $panel, callback)
{
	$('#Status')
		.text('ツイートを取得・検索しています。しばらくお待ちください…　' + (pageNum * 20) + '件目までを取得中…');

	$.ajax({
		type : 'GET',
		data : 
		{
			api  : 'statuses/mentions',
			data : 
			{
				include_entities : true,
				page             : pageNum
			}
		},
		success : function(data, status, xhr)
		{
			if(!data || data.length == 0)
			{
				callback.apply();
				return;
			}
			
			for(var i = 0; i < data.length; i++)
			{
			    var tweetDate = new Date(data[i].created_at);
				
				if(useStartDate)
				{
					if(startDate > tweetDate)
					{
						callback.apply();
						return;
					}
				}
				
				if(useEndDate)
				{
					if(endDate < tweetDate) continue;
				}
				
				if(useHashtag)
				{
					var hit = false;
					var targetHashtags = data[i].entities.hashtags;
					
					for(var j = 0; j < targetHashtags.length; j++)
					{
						if(targetHashtags[j].text == hashtag)
						{
							hit = true;
							break;
						}
					}
					if(!hit) continue;
				}
				
				var image = data[i].user.profile_image_url,
					userName = data[i].user.name,
					screenName = data[i].user.screen_name,
					text = data[i].text;
				
				$panel
					.append('<li><img src="' + image + '" alt="' + userName + '">' + '<span class="screenName">' + screenName + '</span><span class="userName">' + userName + '</span><br>' + text + '</li>');
				
			}
	
			getTweet(pageNum+1, useHashtag, hashtag, useStartDate, startDate, useEndDate, endDate, $panel, callback);
		}
	});
}