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
test('Post Not Found - should return 404', function (t) {
t.plan(1)
    post.find({
       
	where: {
             post_name : 'the-demon-ca'
	}, 
	attributes : atr
    

})
.then( function(result) {
	
if (result === null || result === undefined  ) {
	t.pass('404 result === ' + result)
}
else {
	t.fail('strange it worked')
}


})
.catch(t.throw)
})