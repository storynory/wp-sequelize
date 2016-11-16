var test  = require('tap').test;
var atr = [
/* attributes are the fields that we will retrieve with the query */
	"id", 
	"post_title", 
	"post_excerpt", 
	"post_content", 
	"post_status", 
	"post_parent", 
	"menu_order",
	"post_date",
	"post_date_gmt"
	]





import { post } from '../src'
test('Fetch Post Title', function (t) {
    t.plan(1);
    post.find({
       
	where: {
             post_name : 'the-demon-cat'
	}, 
	attributes : atr
    

})
.then( function(result) {
	var data = result.get({plain: true})
	
  t.equal('The Demon Cat', data.post_title, 'correct title')
  t.comment(data.post_title)

})
.catch( function(err) {
  t.fail("did not fetch post" + err)
})
})
