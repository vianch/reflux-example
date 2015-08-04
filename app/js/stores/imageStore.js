import Reflux from 'reflux';
import $ from 'jquery';
import ImageActions from '../actions/imageActions';

let ImageStore = Reflux.createStore({
	url: 'http://api.flickr.com/services/feed/photos_public.gne?format=json',
	listeneables: [ImageActions],
	imageList: [],
	init: function() {
		this.fetchList();
	},
	fetchList: function () {
		let tags = ['portraits','fashion','studio','photography']
		let randomTag = Math.floor(Math.random()*tags.length);
		$.ajax({
			url: this.url + `&tag=${randomTag}`,
			dataType: 'jsonp',
			jsonpCallback: 'jsonFlickrFeed',
			cache: false,
			context: this,
			success: function(data) {
				console.log('fetch ok!');
				this.imageList = data.items;
				this.trigger(this.imageList);
			}
		});
	}
});

export default ImageStore;